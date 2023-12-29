import * as React from "react";
import "../styles/style.css";

// yarn add react-transition-group
import { CSSTransition } from "react-transition-group";

const ComponentThatUsesWindowAndFadesIn = () => {
    const message = `Window size: ${window.innerWidth} x ${window.innerHeight}`;
    console.log("Rendering ComponentThatUsesWindowAndFadesIn");
    return (
        <CSSTransition
            in={true}
            appear={true}
            timeout={2000}
            classNames="my-component"
        >
            <div>
                <h4>ComponentThatUsesWindowAndFadesIn</h4>
                <p>{message}</p>
            </div>
        </CSSTransition>
    );
};

export default ComponentThatUsesWindowAndFadesIn;
