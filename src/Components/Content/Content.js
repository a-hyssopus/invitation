import React from 'react';
import classes from './Content.module.css';

import {withRouter} from 'react-router-dom';

const Content = (props) => {
    return (
        <div className={classes.Parent}>
            <div className={classes.Content}>
                <h1>Dear {localStorage.getItem("name")}, </h1>
                <h2>We invite you to be the part of our Wedding Party <br/>
                    on April 24th, 2021 in Gastrobar, 16:00 <br/><br/>
                    Dima & Dasha</h2>
            </div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10880.807194335826!2d28.8271208!3d47.0166438!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdf44847021dc1475!2sGastrobar!5e0!3m2!1sen!2s!4v1614016652917!5m2!1sen!2s"></iframe>
            {/*<button onClick={() => props.history.push({pathname: "/:name"})}>Return to the Pigeon</button>*/}
            <button onClick={() => props.history.goBack()}>Return to the Pigeon</button>
        </div>
    )
}


export default withRouter(Content);