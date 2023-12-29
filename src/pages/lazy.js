import * as React from "react";

const LazyPage = () => {
    console.log("Rendering LazyPage");

    return (
        <>
            <Title />
            <ClientOnlyLazyLoadedComponent />
        </>
    );
};

export const Head = () => <title>Using Suspense + Lazy</title>;

export default LazyPage;

const Title = () => <h1>Using Suspense + Lazy</h1>;

/**
 * Trying to render LazyLoadedComponent during SSR doesn't work, so as a
 * workaround, we conditionally skip it during SSR.
 *
 * https://www.gatsbyjs.com/docs/using-client-side-only-packages/
 *
 * This workaround causes the build (`yarn build`) to succeed, but later on when
 * we open the* page (`yarn serve`), we get the following warning on the console
 *
 * > Hydration failed because the initial UI does not match what was rendered on
 *   the server.
 */
const ClientOnlyLazyLoadedComponent = () => {
    console.log("Rendering ClientOnlyLazyLoadedComponent");

    const isSSR = typeof window === "undefined";
    return <>{!isSSR && <LazyLoadedComponent />}</>;
};

const LazyLoadedComponent = () => {
    console.log("Rendering LazyLoadedComponent");

    return (
        <React.Suspense fallback={<Loading />}>
            <ComponentThatUsesWindowWrappedInLazy />
        </React.Suspense>
    );
};

const ComponentThatUsesWindowWrappedInLazy = React.lazy(() =>
    import("../components/ComponentThatUsesWindow")
);

const Loading = () => {
    console.log("Rendering Loading");

    return <h1>Loading</h1>;
};
