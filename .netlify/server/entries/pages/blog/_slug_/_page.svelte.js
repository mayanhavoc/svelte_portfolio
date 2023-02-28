import { c as create_ssr_component, e as escape, f as add_attribute, v as validate_component, d as each } from "../../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { title, date, Content } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-131u438_START -->${$$result.title = `<title>Blog - ${escape(title)}</title>`, ""}<meta property="${"og:title"}"${add_attribute("content", title, 0)}><!-- HEAD_svelte-131u438_END -->`, ""}
<article><h1>${escape(title)}</h1>
    <p>Published ${escape(date)}</p>
    ${validate_component(Content, "Content").$$render($$result, {}, {}, {})}</article>
${data.categories.length ? `<aside><h2>Posted in:</h2>
    <ul>${each(data.categories, (category) => {
    return `<li><a href="${"/blog/category/" + escape(category, true)}">${escape(category)}</a>
        </li>`;
  })}</ul></aside>` : ``}`;
});
export {
  Page as default
};
