import React from "react";
import classes from './Coins.module.scss';

const Coins = () => {

    return (
        <div className={classes.container}>
            <img src={"/img/25.png"} alt="25" />
            <img src={"/img/10.png"} alt="10" />
            <img src={"/img/5.png"} alt="5" />
            <img src={"/img/1.png"} alt="1" />
        </div>
    )
}

export default Coins