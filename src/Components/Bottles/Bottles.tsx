import React from "react";
import classes from './Bottles.module.scss';
import '../../App.css'

const Bottles = () => {

    return (
        <div className={classes.container}>
            <img src={"/img/bottle-big.png"} className={classes.bottleActive} />
            <div className={classes.flex}>
                <div className={classes.bottle}>
                    <img src="img/bottle.png" />
                </div>
                <div className={classes.bottle}>
                    <img src="img/bottle.png" />
                </div>
                <div className={classes.bottle}>
                    <img src="img/bottle.png" />
                </div>
            </div>
        </div>
    )
}

export default Bottles


