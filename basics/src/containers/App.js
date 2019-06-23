import React, {Component} from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons'

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

        let persons = null;
        let assignClasses = [];
        let btnClass = '';

        if (this.state.showPersons) {
            persons = (
                <div>
                    <Persons
                        persons = { this.state.persons }
                        clicked = { this.deletePersonHandler }
                        changed = { this.nameChangedHandler }
                    />
                </div>
            );

            btnClass = classes.Red;

        }

        if (this.state.persons.length <= 2) assignClasses.push( classes.red );
        if (this.state.persons.length <= 1) assignClasses.push( classes.bold );

        return (

                <div className = { classes.App }>
                    <h1>Hi, I'm a React app!</h1>
                    <p className = { assignClasses.join(' ') }>This really works!</p>
                    <button
                        className = { btnClass }
                        onClick = { this.togglePersonHandler }
                    >
                        Switch data
                    </button>

                    { persons }

                </div>

        );
    }
}

export default App;
