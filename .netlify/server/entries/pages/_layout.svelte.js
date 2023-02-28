import { c as create_ssr_component, v as validate_component } from "../../chunks/index.js";
const Header_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "header.svelte-1a0zuj1{padding:2rem 5rem;display:flex;flex-wrap:wrap;justify-content:space-between}ul.svelte-1a0zuj1{margin:0;list-style-type:none;display:flex;gap:1rem}a.svelte-1a0zuj1{text-decoration:none;color:inherit}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<header class="${"svelte-1a0zuj1"}"><a href="${"/"}" class="${"svelte-1a0zuj1"}">Home</a>
  <nav><ul class="${"svelte-1a0zuj1"}"><li><a href="${"/about"}" class="${"svelte-1a0zuj1"}">About</a></li>
      <li><a href="${"/blog"}" class="${"svelte-1a0zuj1"}">Blog</a></li>
      <li><a href="${"/contact"}" class="${"svelte-1a0zuj1"}">Contact</a></li></ul></nav></header>`;
});
const Footer_svelte_svelte_type_style_lang = "";
const css = {
  code: "footer.svelte-4xv6fv{padding:2rem 5rem;display:flex;flex-wrap:wrap;justify-content:space-between}ul.svelte-4xv6fv{margin:0;list-style-type:none;display:flex;gap:1rem}a.svelte-4xv6fv{text-decoration:none;color:inherit}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<footer class="${"svelte-4xv6fv"}"><a href="${"/"}" class="${"svelte-4xv6fv"}">Home</a>
    <ul class="${"svelte-4xv6fv"}"><li><a href="${"/about"}" class="${"svelte-4xv6fv"}">About</a></li>
        <li><a href="${"/blog"}" class="${"svelte-4xv6fv"}">Blog</a></li>
        <li><a href="${"/contact"}" class="${"svelte-4xv6fv"}">Contact</a></li></ul></footer>`;
});
const style = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

<main>${slots.default ? slots.default({}) : ``}</main>

${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
