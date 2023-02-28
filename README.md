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

## Markdown

mdsvex is a svelte markdown parser that:

- handles converting Markdown to HTML;
- allows Markdown files to be used as components; and
- allows the use of Svelte components inside Markdown

In order to use mdsvex inside SvelteKit, it is necessary to install it `npm i -D mdsvex` and configure `svelte.config.js` to use it:

```svelte
import { mdsvex } from 'mdsvex

const config = {
    extensions: ['.svelte', '.md' ],
    preprocess: [
        mdsvex({
            extensions: ['.md']
        })
    ]
}
```

- The `extensions` config property specifies the type of files to treat as components.
- The `mdsvex()` function preprocesses Markdown to HTML - but only targets `.svx` files by default. It is necessary to modify this, and that is the argument passed into `mdsvex`

`mdsvex` allows us to use Markdown files as pages and even import and use Markdown content inside of other files. This could be useful if interactivity or state were need inside of a markdown file. `mdsvex` also comes with `prism.js` pre-installed, which means it can render syntax highlighting for code blocks.

In order to use a Svelte component inside of a Markdown file, all we need to do is add a `script` tag inside of the Markdown file. 

### Loading Markdown files

In order to keep all Markdown files within a single folder, it is necessary to load all posts using dynamic routing. This allows us to place the Markdown files anywhere in our app folder structure. Every route on the site needs a `+page.svelte` file to render.

In order to dynamically load each Markdown file, we must create a `[slug]` folder inside of `src/routes/blog`. The brackets `[]` are important, as they tell SvelteKit that this route is dynamic and will be used to match any `/blog/*` path except for the root path `/blog` which is handled by the `+page.svelte` file.

To handle the dynamic routing, we need a `load` function.

#### Preloading page data server-side

In SvelteKit, a +page.js file, preloads on the server before the page renders and also runs on the client for hydration purposes if necessary. Every time you load a route in SvelteKit, the router will look for a `+page.js` file at that route. For example, when we navigate to the `/blog` route, SvelteKit will look for a `+page.js` (`+page.ts` for Typescript)file inside of `/blog` to figure out if any content needs to be loaded. If the file exists and exports a `load` function, SvelteKit will run the function server-side before rendering the `+page.svelte` route and will pass the data returned along with this file.

Summary:

- `+page.ts` exports a `load` function that attempts to load the Markdown file corresponding to the current route.
- We `return` the destructured content (this is a preference, you could just as well return the entire file) with the data we are going to use, which will  be available in our post template.
- `.metadata` contains all the post's frontmatter properties, and `.default` contains the content itself.

Now we can add a `+page.svelte` file inside of the `[slug]` directory. The data from the `load` function is automatically available as the `data` prop. We need to export that props inside of a `script` tag to pass it in and then use it.

`<svelte:component>` is a dynamic component; which means it renders an arbitrary Svelte component provided as the value of the `this` property. This works because we previously told SvelteKit (in our `svelte.config.js` file) to treat `.md` files as components.

**NOTE** If you choose to destructure the loaded object inside of `blog/[slug]/+page.svelte`, it is important to **capitalize** the content property, both in the template and in the data returned from the `load` function (both inside the `+page.svelte` page, not in the `load` function itself). This lets SvelteKit know that `Content` is a component.

## SvelteKit server routes

SvelteKit offers `server routes`, which can be thought of as API endpoints. They work the same way as pages, but instead of returning HTML, they return data.

3 important conventions to follow when creating a server route:

1. A server route file **must be named `+server.js`**.
2. `+server.js` should export a function named for each HTTP verb it responds to.
3. Server routes must return a new `Response` object.

### A server for our blog's index

Because it is likely that the posts we are using will be used in multiple places, we need to build an API endpoint for them. To do this, we need to create an `api` folder inside of the `src` directory. We'll add a `posts` directory and inside it a `server.ts` file.

Inside the `server.ts` function, we declare a `GET` function which will handle the retrieval of all posts. It is important to know that the `GET` function exposes headers, query parameters and other useful information about the `request` object.

In order to fetch the Markdown files we need to fetch them. To do this, we will create a `utils` directory inside of `src/lib` and create an `index.ts` file inside of it (i.e., `src/lib/utils`). 

We can use a `+page.ts` file with a `load` function to fetch our API data the same way we used it for the blog index.

The `load` function has contextual access to the following arguments:

- `url` and `params`, which contain info about the `request` object;
- `fetch`, which is a helper to normalize the `fetch` implementation

The `load` function returns an object which will be available as `data`.

Because `+page.ts` runs both on server and client side, it shouldn't reference environment specific things like the `window` or `process`. If we widh to run the `load` function **only** on the server, use `+page.server.ts` instead, but note that it has `fetch` available natively.

Once we've created our `load` function for our blog index, the posts will be passed to the component as `data` and we can loop over it to render posts in the corresponding `+page.svelte` file.

SvelteKit is server-rendered by default and static file prerendering is opt-in so we can pre-render static pages like an about or FAQ (which normally don't have any dynamic content). We can also prerender at the layout level, to handle whole directories once. This is done by exporting a `prerender` constant and setting it to `true`.

If we want to prerender our whole site, we can use SvelteKit's static adapter (this avoids having to keep track of which routes are and aren't set to pre-render based on code). In order to use static pre-rendering, we must install `adapter-static` from SvelteKit with `npm i -D @sveltejs/adapter-static` and replace the `adapter-auto` in `svelte.config.js` to the static adapter we just installed with `import adapter from '@sveltejs/adapter-static`. Then we need to tell our routes to prerender by exporting a `prerender` prop and setting it to `true`.

To avoid setting the `prerender:true` in each page, we can create a `+layout.ts` file in `scr/routes` and add the prop there. The `+layout.svelte` file handles the layout on every page, while the `+layout.ts` file handles server-side scripting for every page. 
