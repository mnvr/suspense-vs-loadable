import * as React from "react";

const ComponentThatUsesWindow = () => {
    // If we were to directly import and use this component in a page, we will
    // get the following (expected) error during `gatsby build`:
    //
    //     WebpackError: ReferenceError: window is not defined
    //     ...
    //     "window" is not available during server-side rendering.

    const message = `Window size: ${window.innerWidth} x ${window.innerHeight}`;
    console.log("Rendering ComponentThatUsesWindow");
    return (
        <div>
            <h4>ComponentThatUsesWindow</h4>
            <p>{message}</p>
        </div>
    );
};

export default ComponentThatUsesWindow;
