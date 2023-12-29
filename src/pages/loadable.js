import * as React from "react";

// yarn add @loadable/component
import loadable from "@loadable/component";

const LoadablePage = () => {
    console.log("Rendering LoadablePage");

    return (
        <>
            <Title />
            <LoadableComponentContainer />
        </>
    );
};

export const Head = () => <title>Using Loadable Component</title>;

export default LoadablePage;

const Title = () => <h1>Using Loadable Component</h1>;

const LoadableComponentContainer = () => {
    console.log("Rendering LoadableComponentContainer");

    return <ComponentThatUsesWindowWrappedInLoadable fallback={<Loading />} />;
};

const ComponentThatUsesWindowWrappedInLoadable = loadable(() =>
    import("../components/ComponentThatUsesWindow")
);

const Loading = () => {
    console.log("Rendering Loading");
    return <h1>Loading</h1>;
};
