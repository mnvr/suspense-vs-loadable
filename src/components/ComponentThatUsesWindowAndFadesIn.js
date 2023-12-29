import * as React from "react";
import "../styles/style.css";

// yarn add react-transition-group
import { CSSTransition } from "react-transition-group";

const ComponentThatUsesWindowAndFadesIn = () => {
    const [isVisible, setIsVisible] = React.useState(false);

    React.useEffect(() => {
        setIsVisible(true);
    }, []);

    const message = `Window size: ${window.innerWidth} x ${window.innerHeight}`;
    console.log(
        `Rendering ComponentThatUsesWindowAndFadesIn with isVisible ${isVisible}`
    );
    return (
        <CSSTransition in={isVisible} timeout={2000} classNames="my-component">
            <div>
                <h4>ComponentThatUsesWindowAndFadesIn</h4>
                <p>{message}</p>
            </div>
        </CSSTransition>
    );
};

export default ComponentThatUsesWindowAndFadesIn;
