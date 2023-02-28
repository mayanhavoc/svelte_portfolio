import { c as create_ssr_component } from "./index.js";
const metadata = {
  "id": "0003",
  "title": "Learning NextJs",
  "date": "2023-02-04",
  "categories": ["Front End", "NextJs"]
};
const _0003 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2 id="${"learning-nextjs"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#learning-nextjs"}"><span class="${"icon icon-link"}"></span></a>Learning NextJS</h2>
<h2 id="${"building-blocks-of-a-web-application"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#building-blocks-of-a-web-application"}"><span class="${"icon icon-link"}"></span></a>Building blocks of a web application</h2>
<ul><li>User interface</li>
<li>Routing</li>
<li>Data fetching</li>
<li>Rendering</li>
<li>Integrations</li>
<li>Infrastructure</li>
<li>Performance</li>
<li>Scalability</li>
<li>Developer experience</li></ul>
<h2 id="${"what-is-nextjs"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#what-is-nextjs"}"><span class="${"icon icon-link"}"></span></a>What is Next.js?</h2>
<p>A framework that provides building blocks to create web applications. Next.js’s framework handles the tooling and configuration for React and provides additional structure, features, and optimizations.</p>
<h2 id="${"imperative-vs-declarative-programming"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#imperative-vs-declarative-programming"}"><span class="${"icon icon-link"}"></span></a>Imperative vs. Declarative programming</h2>
<p><strong>Imperative programming</strong> describes <strong>how</strong> the code should update the user interface.
In <strong>Declarative programming</strong>, you declare <strong>what</strong> you want to show. A declarative approach can speed up the development process.
React is a <strong>declarative</strong> library that helps build user interfaces.</p>
<h3 id="${"declarative-vs-imperative-examples"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#declarative-vs-imperative-examples"}"><span class="${"icon icon-link"}"></span></a>Declarative vs. Imperative Examples</h3>
<h4 id="${"imperative-javascript-code"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#imperative-javascript-code"}"><span class="${"icon icon-link"}"></span></a>Imperative JavaScript code</h4>
<pre class="${"language-javascript"}"><!-- HTML_TAG_START -->${`<code class="language-javascript"><span class="token operator">&lt;</span>script type<span class="token operator">=</span><span class="token string">"text/javascript"</span><span class="token operator">></span>    
    <span class="token comment">// Select the div element with 'app' id</span>
    <span class="token keyword">const</span> app <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'app'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token comment">// Instead of directly manipulating the DOM, use ReactDOM.render()</span>
    <span class="token comment">//To use JSX, you need to add a compiler such as Babel 👆</span>
    ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>h1<span class="token operator">></span>Develop<span class="token punctuation">,</span> Preview<span class="token punctuation">,</span> Ship 🚀 <span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span><span class="token punctuation">,</span> app<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token comment">// Create a new H1 element</span>
    <span class="token keyword">const</span> header <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'h1'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token comment">// Create a new text node for the H1 element</span>
    <span class="token keyword">const</span> headerContent <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createTextNode</span><span class="token punctuation">(</span>
        <span class="token string">'Develop. Preview. Ship 🚀'</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token comment">// Append the text to the H1 element</span>
    header<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>headerContent<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token comment">// Place the H1 element inside the div</span>
    app<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>header<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span></code>`}<!-- HTML_TAG_END --></pre>
<h4 id="${"declarative-react-code"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#declarative-react-code"}"><span class="${"icon icon-link"}"></span></a>Declarative React code</h4>
<pre class="${"language-jsx"}"><!-- HTML_TAG_START -->${`<code class="language-jsx"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/jsx<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    &lt;!-- Select the div element with 'app' id -->
    
    const app = document.getElementById('app');
    
    &lt;!-- Instead of directly manipulating the DOM, use ReactDOM.render()
    To use JSX, you need to add a compiler such as Babel 👆 -->
    ReactDOM.render(&lt;h1>Develop. Preview. Ship. 🚀&lt;/h1>, app);
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></code>`}<!-- HTML_TAG_END --></pre>
<h2 id="${"react-core-concepts"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#react-core-concepts"}"><span class="${"icon icon-link"}"></span></a>React core concepts</h2>
<h3 id="${"components"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#components"}"><span class="${"icon icon-link"}"></span></a>Components</h3>
<p>Components are self-contained, reusable code snippets. In addition, the modularity allows the code to be more maintainable.</p>
<p>A component is a function that returns UI elements.</p>
<h4 id="${"component-trees"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#component-trees"}"><span class="${"icon icon-link"}"></span></a>Component trees</h4>
<p>You can nest React components to form component trees.</p>
<h3 id="${"props"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#props"}"><span class="${"icon icon-link"}"></span></a>Props</h3>
<h4 id="${"displaying-data-with-props"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#displaying-data-with-props"}"><span class="${"icon icon-link"}"></span></a>Displaying data with props</h4>
<p>Regular HTML elements have attributes that you can use to pass pieces of information that change the behavior of those elements.
In the same way, you can pass pieces of information as properties to React components. These are called <code>props</code>. Components accept custom arguments they use to change their behavior or what they render to the screen.
<strong>NOTE</strong>: In React, data flows <strong>down</strong> the component tree (i.e., <em>one-way data flow</em>). The state can be passed from parent to child components as <strong>props</strong>.</p>
<pre class="${"language-jsx"}"><!-- HTML_TAG_START -->${`<code class="language-jsx"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/jsx<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">

    &#123;/* Declarative React code */&#125;
    &#123;/* Select the div element with 'app' id */&#125;
    
    const app = document.getElementById('app');
    
    &#123;/* Instead of directly manipulating the DOM, use ReactDOM.render()
    To use JSX, you need to add a compiler such as Babel 👆 */&#125;
    
    &#123;/* Pass a custom 'title' prop to the Header component */&#125;
    
    &#123;*/ function HomePage() &#123;
        return &lt;div>
            // Nested component 👆 👇
            &lt;Header title="React ❤️" />
        &lt;/div>;
    &#125; */&#125;
    
    &#123;/* A 'header' component */&#125;
    &#123;/* Components need to start CAPITALIZED (to distinguish from HTML) */&#125;
    &#123;/* The child component can accept props as its first function parameter */&#125;
    
    &#123;/* function Header(props) &#123;
        console.log(props) 
        return (&lt;h1>Develop. Preview. Ship. 🚀&lt;/h1>)
    &#125; */&#125;
    &#123;/* Props are objects, which means you can destructure them */&#125;
    
    function Header(&#123; title &#125;) &#123;
        console.log(title)
        
        return &lt;h1>title&lt;/h1>
    &#125;
    
    &#123;/* HomePage is now the top-level component so that we can pass it to the renderer instead of the Header*/&#125;
    
    &#123;/* ReactDOM.render(&lt;HomePage/>, app) */&#125;
    
    &#123;/* To add the header, add it as an argument to the render */&#125;
    &#123;/* Add components using regular HTML tags */&#125;
    &#123;/* ReactDOM.render(&lt;Header />, app) */&#125;
    &#123;/* */&#125;
    &#123;/* ReactDOM.render(&lt;h1>Develop. Preview. Ship. 🚀&lt;/h1>, app); */&#125;
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></code>`}<!-- HTML_TAG_END --></pre>
<h4 id="${"using-variables-in-jsx"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#using-variables-in-jsx"}"><span class="${"icon icon-link"}"></span></a>Using variables in JSX</h4>
<ol><li>An <strong>object property</strong> with dot notation.</li></ol>
<pre class="${"language-jsx"}"><!-- HTML_TAG_START -->${`<code class="language-jsx"><span class="token keyword">function</span> <span class="token function">Header</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span><span class="token punctuation">&#123;</span>props<span class="token punctuation">.</span>title<span class="token punctuation">&#125;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<ol><li>A <strong>template literal</strong></li></ol>
<pre class="${"language-jsx"}"><!-- HTML_TAG_START -->${`<code class="language-jsx"><span class="token keyword">function</span> <span class="token function">Header</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">&#123;</span> title <span class="token punctuation">&#125;</span></span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span><span class="token punctuation">&#123;</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Cool </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>title<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">&#125;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<ol><li>The <strong>returned value of a function</strong></li></ol>
<pre class="${"language-jsx"}"><!-- HTML_TAG_START -->${`<code class="language-jsx"><span class="token keyword">function</span> <span class="token function">createTitle</span><span class="token punctuation">(</span><span class="token parameter">title</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>title<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        <span class="token keyword">return</span> title<span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span> <span class="token keyword">else</span> <span class="token punctuation">&#123;</span>
        <span class="token keyword">return</span> <span class="token string">'Default title'</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">function</span> <span class="token function">Header</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">&#123;</span>title<span class="token punctuation">&#125;</span></span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span><span class="token punctuation">&#123;</span><span class="token function">createTitle</span><span class="token punctuation">(</span>title<span class="token punctuation">)</span><span class="token punctuation">&#125;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<ol><li><strong>Ternary operators</strong></li></ol>
<pre class="${"language-jsx"}"><!-- HTML_TAG_START -->${`<code class="language-jsx"><span class="token keyword">function</span> <span class="token function">Header</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">&#123;</span> title <span class="token punctuation">&#125;</span></span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span><span class="token punctuation">&#123;</span>title <span class="token operator">?</span> title <span class="token operator">:</span> <span class="token string">'Default Title'</span><span class="token punctuation">&#125;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>👆 With this ternary operator, you can pass any string to your title prop, or not pass one at all since it accounts for that scenario.
You can reuse this component by changing the title.</p>
<pre class="${"language-jsx"}"><!-- HTML_TAG_START -->${`<code class="language-jsx"><span class="token keyword">function</span> <span class="token function">HomePage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Header</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>React ❤️<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Header</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>A new title<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<h4 id="${"iterating-through-lists"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#iterating-through-lists"}"><span class="${"icon icon-link"}"></span></a>Iterating through lists</h4>
<p>You can use array methods to manipulate your data and generate UI elements identical in style but with different information.</p>
<p>We are adding an array of names to the <code>HomePage</code> component.</p>
<p>React needs something to identify items in an array uniquely so it knows which elements to update in the DOM. </p>
<pre class="${"language-jsx"}"><!-- HTML_TAG_START -->${`<code class="language-jsx"><span class="token keyword">function</span> <span class="token function">HomePage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
    <span class="token keyword">const</span> names <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'Ada Lovelace'</span><span class="token punctuation">,</span> <span class="token string">'Grace Hopper'</span><span class="token punctuation">,</span> <span class="token string">'Margaret Hamilton'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Header</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Develop. Preview. Ship 🚀<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span><span class="token plain-text">
                </span><span class="token punctuation">&#123;</span>names<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">&#123;</span>name<span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token punctuation">&#123;</span>name<span class="token punctuation">&#125;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
                <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<h3 id="${"state"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#state"}"><span class="${"icon icon-link"}"></span></a>State</h3>
<pre class="${"language-jsx"}"><!-- HTML_TAG_START -->${`<code class="language-jsx"><span class="token keyword">function</span> <span class="token function">HomePage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
    <span class="token keyword">const</span> names <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'Ada Lovelace'</span><span class="token punctuation">,</span> <span class="token string">'Grace Hopper'</span><span class="token punctuation">,</span> <span class="token string">'Margaret Hamilton'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>`;
});
export {
  _0003 as default,
  metadata
};
