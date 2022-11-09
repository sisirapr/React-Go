import React, {Fragment} from "react";
import "./AppFooter.css"

export default function AppFooterFunctionalComponent(props) {
    const currentyear = new Date().getFullYear();
    return (
        <Fragment>
            <hr />
            <p className="footer">Copyright &copy; {currentyear} Acme Ltd. {props.myProp}</p>
            {/* cannot use "this" keyword with props here */}
        </Fragment>
    );
}