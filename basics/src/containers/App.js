import React, {Component} from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass';


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

        if (this.state.showPersons) {
            persons = <Persons
                persons = { this.state.persons }
                clicked = { this.deletePersonHandler }
                changed = { this.nameChangedHandler }
            />
        }

        return (
            <Aux>
                <Cockpit
                    showPersons = { this.state.showPersons }
                    persons = { this.state.persons }
                    clicked = { this.togglePersonHandler }
                />
                { persons }
            </Aux>
        );
    }
}

export default withClass(App, classes.App);
