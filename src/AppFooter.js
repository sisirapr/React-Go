import React, { Component, Fragment } from "react";
import './AppFooter.css'

export default class AppFooter extends Component {

    render() {
        const currentyear = new Date().getFullYear();
        return (
            <Fragment>
                <hr />
                <p className="footer">Copyright &copy; {currentyear} Acme Ltd.</p>
            </Fragment>
        );
    }
}