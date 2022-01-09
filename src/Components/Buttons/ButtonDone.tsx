import React from "react";
import classnames from 'classnames';
import classes from './Buttons.module.scss'



const ButtonDone = () => {

    return (
        <button className={classnames(classes.button, classes.border)}>
            Done
        </button>
    )
}

export default ButtonDone