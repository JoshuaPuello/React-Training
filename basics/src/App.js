import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
    state = {
        persons: [
            { id: "fskd1", name: "Max", age: "23" },
            { id: "fskd2", name: "Charles", age: "07" },
            { id: "fskd3", name: "Fighter", age: "32" },
        ],
        showPersons: false
    }

    deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({ persons: persons });
    }

    nameChangedHandler = (event, id) => {

        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {
            ...this.state.persons[personIndex]
        };

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({ persons: persons })
    }

    togglePersonHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({
            showPersons: !doesShow
        });
    }

    render() {

        const style = {
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        }

        let persons = null;
        let classes = [];

        if (this.state.showPersons) {
            persons = (
                <div>
                    {
                        this.state.persons.map(( person, index ) => {
                            return <Person
                                click = { () => this.deletePersonHandler(index) }
                                name = { person.name }
                                age = { person.age }
                                key = { person.id }
                                changed = { (event) => this.nameChangedHandler(event, person.id) }
                            />
                        })
                    }
                </div>
            );

            style.backgroundColor = 'red';
        }

        if (this.state.persons.length <= 2) classes.push('red');
        if (this.state.persons.length <= 1) classes.push('bold');

        return (
            <div className = "App">
                <h1>Hi, I'm a React app!</h1>
                <p className = { classes.join(' ') }>This really works!</p>
                <button style = { style } onClick = { this.togglePersonHandler }>
                    Switch data
                </button>

                { persons }

            </div>
        );
    }
}

export default App;