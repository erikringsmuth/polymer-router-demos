## Polymer Router Demos

[Download](https://github.com/erikringsmuth/polymer-routing-demos/archive/master.zip) and un-zip `polymer-router-demos`.

#### no-router
A router is completely optional. You can load HTML files directly.

1. Open a terminal in the `no-router` directory
2. Start the express.js server with `node server.js`
3. Open [http://localhost:8080/](http://localhost:8080/)

#### app-router
The [&lt;app-router&gt;](http://erikringsmuth.github.io/app-router/) adds data binding and can lazy-load content. It's similar to the Angular ui-router and Backbone's router.

1. Open a terminal in the `app-router` directory
2. Start the express.js server with `node server.js`
3. Open [http://localhost:8080/](http://localhost:8080/)

#### flatiron-director
[&lt;flatiron-director&gt;](https://github.com/PolymerLabs/flatiron-director) with [&lt;core-animated-pages&gt;](http://www.polymer-project.org/docs/elements/core-elements.html#core-animated-pages) and a modified version of Polymer's [music demo](http://www.polymer-project.org/components/core-animated-pages/demos/music.html) routes like a mobile app.

1. Open a terminal in the `flatiron-director` directory
2. Start the express.js server with `node server.js`
3. Open [http://localhost:8080/](http://localhost:8080/)

## Notes
The choice comes down to complexity. If you don't need data binding you probably don't need a router.

Polymer's `<core-animated-pages>` extends `<core-selector>` so you use the `<core-selector>` attributes to choose a route. Routes can be integers or strings. They are smiple enough to store in a URL hash `#`. Two way data binding can auto update the hash when you use `<flatiron-director autoHash>`. This works well for websites that operate like a mobile app and you want a simple hash to store your `<core-selector>` state.

`<app-router>` lazy loads content, data binds path variables and query parameters, and uses `pushState()` or `hashchange` events. This is more like Angular's ui-router or Backbone's router.

You can also use a server-side router and template engine and only use custom elements for specific parts of the page.