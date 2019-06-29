import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import classes from './Person.css';

class Person extends Component {

    componentDidMount() {
        this.inputElement.focus();
    }

    render() {
        return (
            <Aux>
                <p onClick = { this.props.click }>
                    Hi, i'm a { this.props.name } and i'm { this.props.age } years old!
                </p>
                <p>{ this.props.children }</p>

                <input
                    type = "text"
                    onChange = { this.props.changed }
                    value = { this.props.name }
                    ref = { (inputEl) => {this.inputElement = inputEl} }
                />
            </Aux>
        )
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    key: PropTypes.string
};

export default withClass(Person, classes.Person);