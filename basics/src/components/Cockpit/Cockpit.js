import React from 'react';

import classes from './Cockpit.css'

const cockpit = (props) => {

    let assignClasses = [];
    let btnClass = '';

    if (props.persons.length <= 2) assignClasses.push( classes.red );
    if (props.persons.length <= 1) assignClasses.push( classes.bold );

    if (props.showPersons) {
        btnClass = classes.Red;
    }

    return (
        <div className = { classes.Cockpit }>
            <h1>Hi, I'm a React app!</h1>
            <p className = { assignClasses.join(' ') }>This really works!</p>
            <button
                className = { btnClass }
                onClick = { props.clicked }
            >
                Switch data
            </button>
        </div>
    )
}

export default cockpit;