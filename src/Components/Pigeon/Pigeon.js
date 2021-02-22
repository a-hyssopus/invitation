import React, {useState} from "react";

import pigeon from "../../assets/pigeon2.gif";
import classes from "./Pigeon.module.css";
import envelop from "../../assets/envelop.gif";

const Pigeon = (props) => {
    localStorage.setItem("name", props.match.params.name.split('-').join(" "));
    let name = localStorage.getItem("name");

    return (
        <div onClick={() => {
            props.history.push({pathname: "/" + props.match.params.name + "/invite"});
        }}>
            <img src={pigeon}
                 className={classes.Pigeon}
                 alt="Pigeon"
            />
            <img src={envelop}
                 className={classes.Envelop}
                 alt="Envelop"
            />
        </div>
    )
}

export default Pigeon;