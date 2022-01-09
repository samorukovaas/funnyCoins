import React from "react";
import classnames from 'classnames';
import classes from './Buttons.module.scss'



const ButtonSubmit = () => {

    return (
        <button className={classnames(classes.button, classes.submit)}>
            Submit
        </button>
    )
}

export default ButtonSubmit