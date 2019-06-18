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

    togglePersonHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({
            showPersons: !doesShow
        });
    }

    render() {

        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        }

        let persons = null;

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
                            />
                        })
                    }
                </div>
            );
        }

        return (
            <div className="App">
                <h1>Hi, I'm a React app!</h1>
                <p>This really works!</p>
                <button style = { style } onClick = { this.togglePersonHandler }>
                    Switch data
                </button>

                { persons }

            </div>
        );
    }
}

export default App;
