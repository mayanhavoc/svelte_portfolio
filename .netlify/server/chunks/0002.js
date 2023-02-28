import { c as create_ssr_component } from "./index.js";
const metadata = {
  "id": "0002",
  "title": "CSS units: em's and rem's",
  "date": "2023-02-04",
  "categories": ["Front End", "CSS"],
  "sources": [
    "https://www.youtube.com/watch?v=_-aDOAMmDHI&feature=youtu.be",
    "https://codepen.io/kevinpowell/pen/RKdjXe"
  ]
};
const _0002 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2 id="${"ems-and-rems"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#ems-and-rems"}"><span class="${"icon icon-link"}"></span></a>em’s and rem’s</h2>
<h2 id="${"core-concept"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#core-concept"}"><span class="${"icon icon-link"}"></span></a>Core concept</h2>
<p>When using <code>em</code>’s to set <strong>font size</strong>, it’s set <strong>relative to the parent element’s font size</strong>.
When using <code>em</code>’s for <strong>spacing attributes (margin, padding)</strong>, it’s set <strong>relative to that element’s font size</strong>.</p>
<h2 id="${"em"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#em"}"><span class="${"icon icon-link"}"></span></a><code>em</code></h2>
<p>Font sizes in <code>em</code>’s are set <strong>relative to the parent element’s font size</strong>.
One <code>em</code> equals the parent’s font size, often defaulting to 16px. With no parent font size, it defaults to the <code>body</code>’s font size (16px).</p>
<p><code>em</code> uses <strong>compounding</strong>, meaning font sizes compound going down the DOM tree.</p>
<p>For example, a grid parent element with <code>font-size: 2em</code> and a child element with <code>font-size: 2em</code> will have a child font size of <code>4em</code> <strong>because it’s 2 times the parent’s font size</strong>.</p>
<h2 id="${"rem"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#rem"}"><span class="${"icon icon-link"}"></span></a><code>rem</code></h2>
<p>According to MDN, <code>rem</code> exists to fix <code>em</code>’s <strong>compounding</strong> problem. <code>rem</code> means <strong>root em</strong> and is relative to the <code>html</code> element’s font size (or <code>::root</code>), not the <code>body</code>. This makes <code>rem</code>’s more consistent.</p>
<h2 id="${"using-ems-and-rems-for-spacing"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#using-ems-and-rems-for-spacing"}"><span class="${"icon icon-link"}"></span></a>Using <code>em</code>’s and <code>rem</code>’s for spacing</h2>
<p>For <code>margin</code>, <code>padding</code>, or other properties besides font size, <code>em</code>’s look at the <strong>element’s own font size</strong> instead of the parent element.</p>
<pre class="${"language-css"}"><!-- HTML_TAG_START -->${`<code class="language-css">    <span class="token selector">h1</span> <span class="token punctuation">&#123;</span>
        <span class="token property">font-size</span><span class="token punctuation">:</span> 2.5em<span class="token punctuation">;</span>
        <span class="token comment">/* 👆 margin relative to its own font size, not its parent */</span>
        <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>
</code>`}<!-- HTML_TAG_END --></pre>
<p>However, <code>rem</code> always looks at the <strong>root font size</strong> and is more consistent.</p>
<h3 id="${"pro-tip"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#pro-tip"}"><span class="${"icon icon-link"}"></span></a>Pro tip</h3>
<p>Use <code>rem</code> for font sizes to avoid compounding issues.</p>
<h2 id="${"when-are-ems-most-useful"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#when-are-ems-most-useful"}"><span class="${"icon icon-link"}"></span></a>When are <code>em</code>’s most useful?</h2>
<p><code>em</code>’s are useful for buttons. Setting <code>padding</code>, <code>margin</code>, etc. on a button with <code>em</code>’s lets you easily adjust these properties by changing the <strong>font size</strong>.</p>
<pre class="${"language-css"}"><!-- HTML_TAG_START -->${`<code class="language-css"><span class="token selector">.btn</span> <span class="token punctuation">&#123;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 1em 3em<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
<span class="token selector">.btn--small</span> <span class="token punctuation">&#123;</span>
    <span class="token comment">/* 👇 Uses font size to adjust .btn--small's padding relative to .btn's (0.5 of 1 and 3 em) */</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 0.5em<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
</code>`}<!-- HTML_TAG_END --></pre>
<p>Using <code>em</code>’s often makes designs more adaptable. However, use <code>rem</code> to keep spacing consistent (equal left and right spacing).</p>
<h2 id="${"ems-and-media-queries"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#ems-and-media-queries"}"><span class="${"icon icon-link"}"></span></a><code>em</code>’s and media queries</h2>
<p>Adjusting the font size with media queries makes designs more adaptable to screen sizes.</p>
<pre class="${"language-css"}"><!-- HTML_TAG_START -->${`<code class="language-css"><span class="token selector">html</span> <span class="token punctuation">&#123;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 700px<span class="token punctuation">)</span></span> <span class="token punctuation">&#123;</span>
    <span class="token selector">html</span> <span class="token punctuation">&#123;</span>
        <span class="token property">font-size</span><span class="token punctuation">:</span> 25px<span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>
</code>`}<!-- HTML_TAG_END --></pre>`;
});
export {
  _0002 as default,
  metadata
};
