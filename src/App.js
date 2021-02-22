import React, {Component} from "react";
import {Route} from "react-router-dom";

import Pigeon from "./Components/Pigeon/Pigeon";
import Content from "./Components/Content/Content";

import classes from "./App.module.css";

class App extends Component {
    render() {
        return (
            <div>
                <Route path={"/:name/invite"} component={Content}/>
                <div className={classes.PigeonAndEnvelop}>
                    <Route exact path="/:name" component={Pigeon}/>
                </div>

            </div>
        )
    }
}

export default App;