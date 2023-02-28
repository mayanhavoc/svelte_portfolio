import { c as create_ssr_component } from "./index.js";
const metadata = {
  "id": "0017",
  "title": "Plutus high level types",
  "date": "2022-07-01",
  "categories": ["Plutus", "Cardano"],
  "sources": [
    "https://www.essentialcardano.io/faq/what-is-a-blockchain",
    "https://en.wikipedia.org/wiki/Cryptocurrency",
    "https://www.essentialcardano.io/faq/what-is-proof-of-stake-pos",
    "https://forum.cardano.org/t/staking-and-delegating-for-beginners-a-step-by-step-guide/36681",
    "https://forum.cardano.org/t/choosing-a-stake-pool-and-delegating-your-ada/38931"
  ]
};
const _0017 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2 id="${"plutus-high-level-types"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#plutus-high-level-types"}"><span class="${"icon icon-link"}"></span></a>Plutus High Level Types</h2>
<h2 id="${"on-chain-code"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#on-chain-code"}"><span class="${"icon icon-link"}"></span></a>On-chain Code</h2>
<h3 id="${"library-changes"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#library-changes"}"><span class="${"icon icon-link"}"></span></a>Library changes**</h3>
<ul><li><code>imported qualified Ledger.Scripts as Scripts</code> 🤖 👉  <code>imported qualified Ledger.Typed.Scripts as Scripts</code></li></ul>
<h3 id="${"inlinable-function-changes"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#inlinable-function-changes"}"><span class="${"icon icon-link"}"></span></a>INLINABLE function changes</h3>
<pre class="${"language-haskell"}"><!-- HTML_TAG_START -->${`<code class="language-haskell"><span class="token comment">&#123;-# INLINABLE goodRedeemer #-&#125;</span>
<span class="token hvariable">goodRedeemer</span> <span class="token operator">::</span> <span class="token constant">BuiltinData</span> <span class="token operator">-></span> <span class="token constant">BuiltinData</span> <span class="token operator">-></span> <span class="token constant">BuitinData</span> <span class="token operator">-></span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token hvariable">goodRedeemer</span> <span class="token hvariable">_</span> <span class="token hvariable">redeemer</span> <span class="token hvariable">_</span>
  <span class="token operator">|</span> <span class="token hvariable">redeemer</span> <span class="token operator">==</span> <span class="token hvariable">Builtins<span class="token punctuation">.</span>mkI</span> <span class="token number">42</span>       <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token operator">|</span> <span class="token builtin">otherwise</span>                         <span class="token operator">=</span> <span class="token hvariable">traceError</span> <span class="token string">"Wrong Redeemer!"</span></code>`}<!-- HTML_TAG_END --></pre>
<p>🤖 👇</p>
<pre class="${"language-haskell"}"><!-- HTML_TAG_START -->${`<code class="language-haskell"><span class="token comment">&#123;-# INLINABLE goodRedeemer #-&#125;</span>
<span class="token hvariable">goodRedeemer</span> <span class="token operator">::</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token constant">Integer</span> <span class="token operator">-></span> <span class="token constant">ScriptContext</span> <span class="token operator">-></span> <span class="token constant">Bool</span>
<span class="token hvariable">goodRedeemer</span> <span class="token hvariable">_</span> <span class="token hvariable">redeemer</span> <span class="token hvariable">_</span> <span class="token operator">=</span> <span class="token hvariable">traceIfFalse</span> <span class="token string">"Wrong Redeemer"</span> <span class="token punctuation">(</span><span class="token hvariable">redeemer</span> <span class="token operator">==</span> <span class="token number">42</span><span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>
<ul><li>No longer uses <code>BuiltinData</code> (we are using <strong>high-level</strong> types), so <strong>proper types</strong> need to be defined<ul><li>The <strong>redeemer</strong>, i.e., <code>Integer</code> and<ul><li>The <code>ScriptContext</code><ul><li>Returns <code>()</code> for the datum (we don’t want to consider the type of unit) -&gt; <em>unit is the representation of something that is itself (“the empty tuple, is just an empty tuple”).</em></li></ul></li></ul></li>
<li>The <strong>output</strong> in this case is not <code>()</code>, it’s <code>Bool</code>, <strong>yes</strong> or <strong>no</strong>.</li>
<li>Takes a <strong>redeemer</strong> and<ul><li>The boolean function <code>traceIfFalse</code> will pass the <strong>error</strong> message (i.e, <code>&quot;Wrong Redeemer&quot;</code>) against the <strong>validation</strong> <code>(redeemer == 42)</code></li>
<li>Because the types <em>align</em> (How exactly?), <strong>it no longer needs the <code>BuiltinData</code> auxiliary wrapper function</strong></li></ul></li></ul></li></ul>
<h3 id="${"the-thing-with-the-typed-version"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#the-thing-with-the-typed-version"}"><span class="${"icon icon-link"}"></span></a>The thing with the Typed version</h3>
<p>The high level types (<code>Integer</code>, <code>ScriptContext</code>, <code>Bool</code>) need to be wrapped into low level types, and that requires more boilerplate:</p>
<pre class="${"language-haskell"}"><!-- HTML_TAG_START -->${`<code class="language-haskell"><span class="token comment">&#123;-# INLINABLE goodRedeemer #-&#125;</span>
<span class="token hvariable">goodRedeemer</span> <span class="token operator">::</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token constant">Integer</span> <span class="token operator">-></span> <span class="token constant">ScriptContext</span> <span class="token operator">-></span> <span class="token constant">Bool</span>
<span class="token hvariable">goodRedeemer</span> <span class="token hvariable">_</span> <span class="token hvariable">redeemer</span> <span class="token hvariable">_</span> <span class="token operator">=</span> <span class="token hvariable">traceIfFalse</span> <span class="token string">"Wrong Redeemer"</span> <span class="token punctuation">(</span><span class="token hvariable">redeemer</span> <span class="token operator">==</span> <span class="token number">42</span><span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>
<h3 id="${"data-typed"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#data-typed"}"><span class="${"icon icon-link"}"></span></a>data Typed</h3>
<pre class="${"language-haskell"}"><!-- HTML_TAG_START -->${`<code class="language-haskell"><span class="token keyword">data</span> <span class="token constant">Typed</span>
<span class="token keyword">instance</span><span class="token punctuation">.</span> <span class="token constant">Scripts<span class="token punctuation">.</span>ValidatorTypes</span> <span class="token constant">Typed</span> <span class="token keyword">where</span>
    <span class="token keyword">type</span> <span class="token keyword">instance</span> <span class="token constant">DatumType</span> <span class="token constant">Typed</span>    <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">type</span> <span class="token keyword">instance</span> <span class="token constant">RedeemerType</span> <span class="token constant">Type</span>  <span class="token operator">=</span> <span class="token constant">Integer</span></code>`}<!-- HTML_TAG_END --></pre>
<ul><li><p><code>data Typed</code> -&gt; create instances of validator types</p>
<ul><li>Typed <strong>unit</strong> instance -&gt; <code>type instance DatumType Typed = ()</code></li>
<li>Typed <strong>integer</strong> instance -&gt; <code>type instance RedeemerType Type = Integer</code></li></ul></li>
<li><p>👆 This is required in order to</p>
<ul><li>Use <code>()</code> as a <strong>datum</strong> type -&gt; <code>type instance DatumType Typed = ()</code></li>
<li><code>Integer</code> as a <strong>redeemer</strong> type -&gt; <code>type instance RedeemerType Type = Integer</code></li></ul></li>
<li><p>The <code>ScriptContext</code> represents information about the whole transaction</p>
<ul><li>You can take <strong>time</strong> information from the tx moment of execution (Plutus has tools to work in POSIX time, which is why it’s not necessary to use slot no.s)</li></ul></li>
<li><p>The redeemer now considers the output of the transaction (it is using <strong>high level</strong> types), which is a <code>Bool</code> -&gt; valid/not valid</p></li></ul>
<h3 id="${"typed-validator"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#typed-validator"}"><span class="${"icon icon-link"}"></span></a>Typed Validator</h3>
<pre class="${"language-haskell"}"><!-- HTML_TAG_START -->${`<code class="language-haskell"><span class="token hvariable">typedValidator</span> <span class="token operator">::</span> <span class="token constant">Scripts<span class="token punctuation">.</span>TypedValidator</span> <span class="token constant">Typed</span></code>`}<!-- HTML_TAG_END --></pre>
<ul><li>The validator is of type <code>Scripts.TypedValidator</code> and as a parameter, the <code>Typed</code> data type we just defined:</li></ul>
<pre class="${"language-haskell"}"><!-- HTML_TAG_START -->${`<code class="language-haskell"><span class="token keyword">data</span> <span class="token constant">Typed</span>
<span class="token keyword">instance</span><span class="token punctuation">.</span> <span class="token constant">Scripts<span class="token punctuation">.</span>ValidatorTypes</span> <span class="token constant">Typed</span> <span class="token keyword">where</span>
    <span class="token keyword">type</span> <span class="token keyword">instance</span> <span class="token constant">DatumType</span> <span class="token constant">Typed</span>    <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">type</span> <span class="token keyword">instance</span> <span class="token constant">RedeemerType</span> <span class="token constant">Type</span>  <span class="token operator">=</span> <span class="token constant">Integer</span></code>`}<!-- HTML_TAG_END --></pre>
<ul><li><p><code>Typed</code> data type <strong>implies</strong></p>
<ul><li>The <code>DatumType</code> and</li>
<li>The <code>RedeemerType</code></li></ul></li>
<li><p>We are 💉 (injecting)</p>
<ul><li>The Datum’s and Redeemer’s types</li>
<li><code>Scripts.mkTypedValidator</code> which exposes the compiler extension <code>@Typed</code> which allows the (💉)injection of types</li></ul></li></ul>
<pre class="${"language-haskell"}"><!-- HTML_TAG_START -->${`<code class="language-haskell"><span class="token hvariable">typedValidator</span> <span class="token operator">::</span> <span class="token constant">Scripts<span class="token punctuation">.</span>TypedValidator</span> <span class="token constant">Typed</span>
<span class="token hvariable">typedValidator</span> <span class="token operator">=</span> <span class="token hvariable">Scripts<span class="token punctuation">.</span>mkTypedValidator</span> <span class="token operator">@</span><span class="token constant">Typed</span></code>`}<!-- HTML_TAG_END --></pre>
<ul><li>Splice two things in<ul><li>The compile of the on-chain redeemer <code>$$(PlutusTx.compile [|| goodRedeemer ||])</code>.</li>
<li>The wrapper for the compiler (because it is a high level type, it needs to be wrapped/mapped to low level types)<ul><li>Using the <code>wrap</code> auxiliary function</li>
<li><code>$$(PlutusTx.compile [|| wrap ||])</code></li>
<li>This happens with the help of an auxiliary function</li>
<li><code>wrap = Scripts.wrapValidator @() @Integer</code></li></ul></li></ul></li></ul>
<pre class="${"language-haskell"}"><!-- HTML_TAG_START -->${`<code class="language-haskell"><span class="token comment">&#123;-# INLINABLE goodRedeemer #-&#125;</span>
<span class="token hvariable">goodRedeemer</span> <span class="token operator">::</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token constant">Integer</span> <span class="token operator">-></span> <span class="token constant">ScriptContext</span> <span class="token operator">-></span> <span class="token constant">Bool</span>
<span class="token hvariable">goodRedeemer</span> <span class="token hvariable">_</span> <span class="token hvariable">redeemer</span> <span class="token hvariable">_</span> <span class="token operator">=</span> <span class="token hvariable">traceIfFalse</span> <span class="token string">"Wrong Redeemer"</span> <span class="token punctuation">(</span><span class="token hvariable">redeemer</span> <span class="token operator">==</span> <span class="token number">42</span><span class="token punctuation">)</span>

<span class="token keyword">data</span> <span class="token constant">Typed</span>
<span class="token keyword">instance</span><span class="token punctuation">.</span> <span class="token constant">Scripts<span class="token punctuation">.</span>ValidatorTypes</span> <span class="token constant">Typed</span> <span class="token keyword">where</span>
    <span class="token keyword">type</span> <span class="token keyword">instance</span> <span class="token constant">DatumType</span> <span class="token constant">Typed</span>    <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">type</span> <span class="token keyword">instance</span> <span class="token constant">RedeemerType</span> <span class="token constant">Typed</span>  <span class="token operator">=</span> <span class="token constant">Integer</span>

<span class="token hvariable">typedValidator</span> <span class="token operator">::</span> <span class="token constant">Scripts<span class="token punctuation">.</span>TypedValidator</span> <span class="token constant">Typed</span>
<span class="token hvariable">typedValidator</span> <span class="token operator">=</span> <span class="token hvariable">Scripts<span class="token punctuation">.</span>mkTypedValidator</span> <span class="token operator">@</span><span class="token constant">Typed</span>
  <span class="token operator">$$</span><span class="token punctuation">(</span><span class="token hvariable">PlutusTx<span class="token punctuation">.</span>compile</span> <span class="token punctuation">[</span><span class="token operator">||</span> <span class="token hvariable">goodRedeemer</span> <span class="token operator">||</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token operator">$$</span><span class="token punctuation">(</span><span class="token hvariable">PlutusTx<span class="token punctuation">.</span>compile</span> <span class="token punctuation">[</span><span class="token operator">||</span> <span class="token hvariable">wrap</span> <span class="token operator">||</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">where</span>
  <span class="token hvariable">wrap</span> <span class="token operator">=</span> <span class="token hvariable">Scripts<span class="token punctuation">.</span>wrapValidator</span> <span class="token operator">@</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">@</span><span class="token constant">Integer</span></code>`}<!-- HTML_TAG_END --></pre>
<ul><li>Aux function 👆              👆 inject datum <code>@()</code> and redeemer <code>@Integer</code> data types</li></ul>
<h3 id="${"typed-validator-script"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#typed-validator-script"}"><span class="${"icon icon-link"}"></span></a>Typed Validator Script</h3>
<pre class="${"language-haskell"}"><!-- HTML_TAG_START -->${`<code class="language-haskell"><span class="token hvariable">validator</span> <span class="token operator">::</span> <span class="token constant">Validator</span>
<span class="token hvariable">validator</span> <span class="token operator">=</span> <span class="token hvariable">mkValidatorScript</span> <span class="token hvariable">typedValidator</span></code>`}<!-- HTML_TAG_END --></pre>
<ul><li>The <code>mkValidatorScript</code> changes to <code>Scripts.validatorScript</code> which takes a <code>Typed</code> validator (<code>typedValidator</code>) as <strong>input</strong></li></ul>
<h3 id="${"typed-hash-validator"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#typed-hash-validator"}"><span class="${"icon icon-link"}"></span></a>Typed Hash Validator</h3>
<pre class="${"language-haskell"}"><!-- HTML_TAG_START -->${`<code class="language-haskell"><span class="token hvariable">valHash</span> <span class="token operator">::</span> <span class="token constant">Ledger<span class="token punctuation">.</span>ValidatorHash</span>
<span class="token hvariable">valHash</span> <span class="token operator">=</span> <span class="token hvariable">Scripts<span class="token punctuation">.</span>validatorHash</span> <span class="token hvariable">typedValidator</span></code>`}<!-- HTML_TAG_END --></pre>
<ul><li>The <code>valHash</code> also takes a <code>Typed</code> validator (<code>typedValidator</code>) as <strong>input</strong>
and now the <code>scrAddress</code> function can take the <code>validator</code> we have defined:</li>
<li>This validator (<code>validator = mkValidatorScript typedValidator</code>) evaluates to <code>validator {&lt;script&gt;}</code> <strong>but</strong><ul><li>It includes extra data: <code>$$(PlutusTx.compile [|| wrap ||])</code> (which is very expensive)</li></ul></li></ul>
<h2 id="${"off-chain-code"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#off-chain-code"}"><span class="${"icon icon-link"}"></span></a>Off-chain Code</h2>
<h3 id="${"changes-to-the-give-function"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#changes-to-the-give-function"}"><span class="${"icon icon-link"}"></span></a>Changes to the <code>give</code> function</h3>
<ul><li>👇 The <code>give</code> function from our previous contract</li></ul>
<pre class="${"language-haskell"}"><!-- HTML_TAG_START -->${`<code class="language-haskell"><span class="token hvariable">give</span> <span class="token operator">::</span> <span class="token constant">AsContractError</span> <span class="token hvariable">e</span> <span class="token operator">=></span> <span class="token constant">Integer</span> <span class="token operator">-></span> <span class="token constant">Contract</span> <span class="token hvariable">w</span> <span class="token hvariable">s</span> <span class="token hvariable">e</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token hvariable">give</span> <span class="token hvariable">amount</span> <span class="token operator">=</span> <span class="token keyword">do</span>
    <span class="token keyword">let</span> <span class="token hvariable">tx</span> <span class="token operator">=</span> <span class="token hvariable">mustPayToOtherScript</span> <span class="token hvariable">valHash</span> <span class="token punctuation">(</span><span class="token constant">Datum</span> <span class="token operator">$</span> <span class="token hvariable">Builtins<span class="token punctuation">.</span>mkI</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">$</span> <span class="token hvariable">Ada<span class="token punctuation">.</span>lovelaceValueOf</span> <span class="token hvariable">amount</span>      
    <span class="token hvariable">ledgerTx</span> <span class="token operator">&lt;-</span> <span class="token hvariable">submitTx</span> <span class="token hvariable">tx</span>                                                                          
    <span class="token hvariable">void</span> <span class="token operator">$</span> <span class="token hvariable">awaitTxConfirmed</span> <span class="token operator">$</span> <span class="token hvariable">getCardanoTxId</span> <span class="token hvariable">ledgerTx</span>                                                
    <span class="token hvariable">logInfo</span> <span class="token operator">@</span><span class="token constant">String</span> <span class="token operator">$</span> <span class="token hvariable">printf</span> <span class="token string">"made a gift of %d lovelace"</span> <span class="token hvariable">amount</span>                                     </code>`}<!-- HTML_TAG_END --></pre>
<ul><li>👇 The <strong>typed</strong> version of the same <code>give</code> contract</li></ul>
<pre class="${"language-haskell"}"><!-- HTML_TAG_START -->${`<code class="language-haskell"><span class="token hvariable">give</span> <span class="token operator">::</span> <span class="token constant">AsContractError</span> <span class="token hvariable">e</span> <span class="token operator">=></span> <span class="token constant">Integer</span> <span class="token operator">-></span> <span class="token constant">Contract</span> <span class="token hvariable">w</span> <span class="token hvariable">s</span> <span class="token hvariable">e</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token hvariable">give</span> <span class="token hvariable">amount</span> <span class="token operator">=</span> <span class="token keyword">do</span>
    <span class="token keyword">let</span> <span class="token hvariable">tx</span> <span class="token operator">=</span> <span class="token hvariable">mustPayToTheScript</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">$</span> <span class="token hvariable">Ada<span class="token punctuation">.</span>lovelaceValueOf</span> <span class="token hvariable">amount</span>               
    <span class="token hvariable">ledgerTx</span> <span class="token operator">&lt;-</span> <span class="token hvariable">submitTxConstraints</span> <span class="token hvariable">typedValidator</span> <span class="token hvariable">tx</span>                         
    <span class="token hvariable">void</span> <span class="token operator">$</span> <span class="token hvariable">awaitTxConfirmed</span> <span class="token operator">$</span> <span class="token hvariable">getCardanoTxId</span> <span class="token hvariable">ledgerTx</span>                         
    <span class="token hvariable">logInfo</span> <span class="token operator">@</span><span class="token constant">String</span> <span class="token operator">$</span> <span class="token hvariable">printf</span> <span class="token string">"made a gift of %d lovelace"</span> <span class="token hvariable">amount</span>              </code>`}<!-- HTML_TAG_END --></pre>
<ul><li><code>mustPayToOtherSCript</code> changes to <code>mustPayToTheScript</code><ul><li><code>mustPayToTheScript</code> <strong>doesn’t</strong> need the <code>valHash</code>, it is <strong>inferring</strong> it from itself.</li></ul></li>
<li>since the <strong>Datum</strong> is <code>()</code>, we don’t need  <code>(Datum $ Builtins.mkI 0)</code>, we can itself provide <code>()</code></li>
<li>This <code>give</code> function is using <strong>high level</strong> types<ul><li>This means the <strong>validator</strong> is a <strong>typedValidator</strong></li>
<li>Just like we needed to specify the types for the <code>goodRedeemer</code> function, we specify our <code>typedValidator</code> and then pass <code>tx</code></li>
<li><code>submitTx</code> changes to <code>submitTxConstraints typedValidator</code></li>
<li>The constraints are in relation to the <strong>injected data types</strong></li></ul></li></ul>`;
});
export {
  _0017 as default,
  metadata
};
