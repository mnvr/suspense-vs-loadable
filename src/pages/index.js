import { Link } from "gatsby";
import * as React from "react";

const IndexPage = () => {
    return (
        <ul>
            <li>
                <Link to={"/loadable"}>Loadable</Link>
            </li>
            <li>
                <Link to={"/lazy"}>Suspense + Lazy</Link>
            </li>
        </ul>
    );
};

export const Head = () => <title>Index</title>;

export default IndexPage;
