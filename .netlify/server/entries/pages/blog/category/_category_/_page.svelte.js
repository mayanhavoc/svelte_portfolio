import { c as create_ssr_component, d as each, f as add_attribute, e as escape } from "../../../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${data.category && data.category.length > 0 ? `<ul>${each(data.posts, (post) => {
    return `<li><h2><a${add_attribute("href", post.path, 0)}>${escape(post.meta.title)}
            </a></h2>
        Published ${escape(post.meta.date)}
    </li>`;
  })}</ul>` : `<p>No posts found.</p>`}`;
});
export {
  Page as default
};
