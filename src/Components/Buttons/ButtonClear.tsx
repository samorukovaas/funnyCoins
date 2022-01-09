import React from "react";
import classnames from 'classnames';
import classes from './Buttons.module.scss'

const ButtonClear = () => {

    return (
        <button className={classnames(classes.button, classes.underline)}>
            Clear
        </button>
    )
}

export default ButtonClear