## Routing in SvelteKit

Directory-based approach to routing and pages. The structure of `src/routes` will mirror the structure of the website.
Any folder inside `src/routes` becomes the name of a page. A +page.svelte file inside that folder defines the page's HTML content.

E.g.
Inside `src/routes`:

- `+page.svelte` is the homepage (`/`)
- `about/+page.svelte` is the `/about` page
- `blog/+page.svelte` is the `/blog` page
- `blog/some-post/+page.svelte` is a post in `/blog`

The special `+` prefix helps distinguish between components and pages.

Routing is taken care of automatically by creating folders inside `routes` and adding a `+page.svelte` file inside.

### Layouts

To define a general layout:

Create a new file `+layout.svelte` within `src/routes`. SvelteKit automatically checks `routes` (and all its subdirectories) for a `+layout.svelte` file. That layout will wrap all content loaded from the route and sub-routes.

A layout becomes a **parent** component, and the current page will be sloted in as its **child** component. A layout at the top level of `routes` will apply globally.

### Components

Create a `lib` folder inside `src` (`lib` is a SvelteKit convention). Inside `src/lib` create a `components` folder, this is for organizational purposes. Inside `src/lib/components` create a `Header.svelte` file (this folder structure and the capitalization of components are preferred conventions).

#### Use a component

To use a component, we must `import` it inside a `script` tag (the `script` tag can go anywhere in the page).

**NOTICE**

- The import path `$lib`, which is a shorthand for `src/lib`. This alias can be customized or add a new one in a `jsconfig.json` file.
- Components related to **routing** (pages, layouts, endpoints) begin with `+`.
- Normal **reusable** components don't, and are usually **capitalized** (keeping reusable components in the `lib` folder is a preferred convention)

### Styling

To add css to a page/component, simply include a `<style>` tag in the page.

#### Stylesheets

You can import stylesheets directly into components, pages and layouts. Importing them this way preprocesses them automatically, which is useful when using Sass.

To use a stylesheet, simply import it within the pages' `<script>` tag.