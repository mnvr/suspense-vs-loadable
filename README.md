Testing various ways of using client side only libraries with Gatsby 5.13 and
React 18.

    yarn
    yarn dev

Demonstrates:

* Using `Suspense` with `lazy`. While these come with React, and will be the way
  to go, currently these don't work well with SSR.

* Using [Loadable Component](https://loadable-components.com/). This works fine
  with SSR as of today.

* Using Loadable Component, and also adding a fade animation (using [React
  Transition Group](http://reactcommunity.org/react-transition-group/)) to
  gracefully bring in the lazy loaded client side component.
