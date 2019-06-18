import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

// Base-class component

class App extends Component {
    state = {
        persons: [
            { name: "Max", age: "23" },
            { name: "Charles", age: "07" },
        ]
    }

    switchNameHandler = (newName) => {
        this.setState({
            persons: [
                { name: newName, age: "25" },
                { name: "Winehouse Abigail", age: "09" },
            ]
        })
    }

    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                { name: event.target.value, age: "25" },
                { name: "Abigail", age: "07" },
            ]
        })
    }

    render() {

        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        }

        return (
            <div className="App">
                <h1>Hi, I'm a React app!</h1>
                <p>This really works!</p>
                <button style = { style } onClick = { this.switchNameHandler.bind(this, "Smith Charles Max") }>
                    Switch data
                </button>
                <Person
                    changed = { this.nameChangedHandler }
                    click = {this.switchNameHandler.bind(this, "Just Max!")}
                    name = { this.state.persons[0].name }
                    age = { this.state.persons[0].age }
                >My hobby is: Read books!</Person>
                <Person
                    name = { this.state.persons[1].name }
                    age = { this.state.persons[1].age }
                />
            </div>
        );
    }
}

export default App;

/*
const App = props => {

    const [personsState, setPersonsState] = useState(
        {
            persons: [
                { name: "Joshua", age: "23" },
                { name: "Abigail", age: "07" },
            ],
            otherState: "some other value"
        }
    );

    const switchNameHandler = () => {
        setPersonsState({
            persons: [
                { name: "Puello Joshua", age: "23" },
                { name: "Puello Abigail", age: "07" },
            ],
            otherState: personsState.otherState
        });
    }

    return (
        <div className="App">
            <Person name={personsState.persons[0].name} age={personsState.persons[0].age}>My hobby is: Read books!</Person>
            <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
            <button onClick={switchNameHandler}>Switch data</button>
        </div>
    );

}

export default App;
*/