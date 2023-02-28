import { c as create_ssr_component } from "./index.js";
const metadata = {
  "id": "0001",
  "title": "CSS units: vh, `vw`, vmin, vmax",
  "date": "2023-02-04",
  "categories": ["Front End", "CSS"]
};
const _0001 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2 id="${"viewport-units-vh-vw-vmin-vmax"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#viewport-units-vh-vw-vmin-vmax"}"><span class="${"icon icon-link"}"></span></a>Viewport units: <code>vh</code>, <code>vw</code>, vmin, vmax</h2>
<p><code>vh</code> - % viewport height
<code>vw</code> - % viewport width
Note: On mobile views, <code>vh</code> can cause content overflow. Use media queries.</p>
<p>How do these differ from <code>width: 100%</code>? <code>width:100%</code> sets width to 100% of the parent container.
<code>vmax</code> uses the viewport’s largest dimension (width or height). So it’s % of the bigger viewport size.</p>
<h3 id="${"using-vmin-and-vmax-with-padding"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#using-vmin-and-vmax-with-padding"}"><span class="${"icon icon-link"}"></span></a>Using vmin and vmax with padding</h3>
<p>If height is <code>100vh</code>, also set padding with <code>vh</code>. The padding adjusts with the viewport height.
Using <code>vmin</code> and <code>vmax</code> with font size <code>vw</code> for font size increases/decreases the font with the viewport width. Good for titles but not paragraphs. Use <code>em</code> for typography.
<code>vmin</code> is good for titles. It shrinks as the viewport gets smaller but grows until one viewport dimension becomes smaller. It stays proportional.
Pro tip: Test these units on different viewports.</p>`;
});
export {
  _0001 as default,
  metadata
};
