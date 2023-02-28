import { c as create_ssr_component } from "./index.js";
const metadata = {
  "id": "0004",
  "title": "Colt Steele's Mastering TypeScript",
  "date": "2023-02-04",
  "categories": ["TypeScript", "Back end"]
};
const _0004 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2 id="${"colt-steeles-mastering-typescript"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#colt-steeles-mastering-typescript"}"><span class="${"icon icon-link"}"></span></a>Colt Steele’s Mastering TypeScript</h2>
<h2 id="${"type-annotations"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#type-annotations"}"><span class="${"icon icon-link"}"></span></a>Type annotations</h2>
<h2 id="${"exercises"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#exercises"}"><span class="${"icon icon-link"}"></span></a>Exercises</h2>
<p>We declare the type of a variable using <strong>type annotation</strong>. To create a type annotation, after the variable, introduce a colon <code>:</code> and then add the type.</p>
<pre class="${"language-typescript"}"><!-- HTML_TAG_START -->${`<code class="language-typescript"><span class="token keyword">const</span> myVar<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">'String var'</span></code>`}<!-- HTML_TAG_END --></pre>
<p>The general syntax of a type annotation looks something like this:</p>
<pre class="${"language-typescript"}"><!-- HTML_TAG_START -->${`<code class="language-typescript">    <span class="token keyword">let</span> myVar<span class="token operator">:</span> type <span class="token operator">=</span> value
    <span class="token comment">// The type 👆 goes on the LEFT of the = sign</span></code>`}<!-- HTML_TAG_END --></pre>
<h3 id="${"primitive-types"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#primitive-types"}"><span class="${"icon icon-link"}"></span></a>Primitive Types</h3>
<ul><li>Number</li>
<li>Null</li>
<li>Any</li>
<li>String</li>
<li>Undefined</li>
<li>Never</li>
<li>Boolean</li>
<li>Void</li>
<li>Unknown</li></ul>
<h3 id="${"object-types"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#object-types"}"><span class="${"icon icon-link"}"></span></a>Object Types</h3>
<ul><li>Object</li>
<li>Tuple</li>
<li>Array</li>
<li>Enum</li>
<li>Function</li>
<li>etc</li></ul>
<h2 id="${"compiling-typescript"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#compiling-typescript"}"><span class="${"icon icon-link"}"></span></a>Compiling TypeScript</h2>
<p>In the terminal:</p>
<pre class="${"language-bash"}"><!-- HTML_TAG_START -->${`<code class="language-bash">tsc path/to/file.ts</code>`}<!-- HTML_TAG_END --></pre>
<p>You get back:
The file is in .js format.
Feedback in the terminal.</p>
<h2 id="${"type-inference"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#type-inference"}"><span class="${"icon icon-link"}"></span></a>Type Inference</h2>
<p>TypeScript’s compiler can infer types from certain values. As a result, TypeScript remembers a values’ type even if it’s not annotated, and it will enforce that type going forward.</p>
<pre class="${"language-typescript"}"><!-- HTML_TAG_START -->${`<code class="language-typescript"><span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">27</span><span class="token punctuation">;</span>
<span class="token comment">// 👆 We create a variable 'x' with a value, no type annotation</span>
x <span class="token operator">=</span> <span class="token string">'Twenty-seven'</span><span class="token punctuation">;</span>
<span class="token comment">// 👆 This will result in an error. TypeScript will 'infer' that it's a number and enforce it.</span></code>`}<!-- HTML_TAG_END --></pre>
<h2 id="${"the-any-type"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#the-any-type"}"><span class="${"icon icon-link"}"></span></a>The Any Type</h2>
<p>A type unique to TypeScript, it’s a ‘catch all’ that turns off type checking.</p>
<h3 id="${"pro-tip"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#pro-tip"}"><span class="${"icon icon-link"}"></span></a>Pro-tip</h3>
<p>Avoid using the <code>any</code> type as it defeats the purpose of using TypeScript altogether.</p>
<h2 id="${"delayed-initialization-and-implicit-any"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#delayed-initialization-and-implicit-any"}"><span class="${"icon icon-link"}"></span></a>Delayed initialization and implicit Any</h2>
<p>There is one situation where <strong>Type annotation</strong> is desired: when you declare a variable <strong>separate</strong> from when it’s initialized.</p>
<pre class="${"language-typescript"}"><!-- HTML_TAG_START -->${`<code class="language-typescript"><span class="token keyword">let</span> foundMovie<span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> movie <span class="token keyword">of</span> movies<span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>movie <span class="token operator">===</span> <span class="token string">"Amadeus"</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
        foundMovie <span class="token operator">=</span> <span class="token string">"Amadeus"</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>If we hover over the <code>foundMovie</code> variable, the compiler will recommend we use a more specific type than <code>any</code>.</p>
<p>To avoid this, we can tell the compiler what the type of our variable will be when it’s eventually assigned a value.</p>
<pre class="${"language-typescript"}"><!-- HTML_TAG_START -->${`<code class="language-typescript"><span class="token keyword">let</span> foundMovie<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> movie <span class="token keyword">of</span> movies<span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>movie <span class="token operator">===</span> <span class="token string">"Amadeus"</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
        foundMovie <span class="token operator">=</span> <span class="token string">"Amadeus"</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<h2 id="${"function-parameter-types"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#function-parameter-types"}"><span class="${"icon icon-link"}"></span></a>Function parameter types</h2>
<p>We can specify the type of function parameters in the function definition.
<strong>Typing parameters is just like typing variables.</strong></p>`;
});
export {
  _0004 as default,
  metadata
};
