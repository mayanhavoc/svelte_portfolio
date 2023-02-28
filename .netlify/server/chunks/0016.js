import { c as create_ssr_component } from "./index.js";
const metadata = {
  "id": "0016",
  "title": "Plutus Endpoints",
  "date": "2022-09-29",
  "categories": ["Plutus", "Cardano"],
  "sources": [
    "https://www.essentialcardano.io/faq/what-is-a-blockchain",
    "https://en.wikipedia.org/wiki/Cryptocurrency",
    "https://www.essentialcardano.io/faq/what-is-proof-of-stake-pos",
    "https://forum.cardano.org/t/staking-and-delegating-for-beginners-a-step-by-step-guide/36681",
    "https://forum.cardano.org/t/choosing-a-stake-pool-and-delegating-your-ada/38931"
  ]
};
const _0016 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2 id="${"plutus-endpoints"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#plutus-endpoints"}"><span class="${"icon icon-link"}"></span></a>Plutus endpoints</h2>
<p>Off-chain is a parameterized, flexible, programmable transaction construction that goes beyond what you can do in the Cardano CLI.</p>
<h2 id="${"the-give-endpoint"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#the-give-endpoint"}"><span class="${"icon icon-link"}"></span></a>The <code>give</code> endpoint</h2>
<h2 id="${"the-schema"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#the-schema"}"><span class="${"icon icon-link"}"></span></a>The <code>Schema</code></h2>
<ul><li>The datatype <code>Schema</code> is used for modelling the Schema’s structure.</li>
<li>The two functions passed to <code>Schema</code> are the <strong>endpoints</strong>, e.g. <code>grab</code> and <code>give</code>.</li></ul>
<h3 id="${"give"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#give"}"><span class="${"icon icon-link"}"></span></a><code>give</code></h3>
<pre class="${"language-haskell"}"><!-- HTML_TAG_START -->${`<code class="language-haskell"><span class="token hvariable">give</span> <span class="token operator">::</span> <span class="token hvariable">asContractError</span> <span class="token hvariable">e</span> <span class="token operator">=></span> <span class="token constant">Integer</span> <span class="token operator">-></span> <span class="token constant">Contract</span> <span class="token hvariable">w</span> <span class="token hvariable">s</span> <span class="token hvariable">e</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token hvariable">give</span> <span class="token hvariable">amount</span> <span class="token operator">=</span> <span class="token keyword">do</span>
    <span class="token keyword">let</span> <span class="token hvariable">tx</span> <span class="token operator">=</span> <span class="token hvariable">mustPayToOtherScript</span> <span class="token hvariable">valHash</span> <span class="token punctuation">(</span><span class="token constant">Datum</span> <span class="token operator">$</span> <span class="token hvariable">Builtins<span class="token punctuation">.</span>mkI</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">$</span> <span class="token hvariable">Ada<span class="token punctuation">.</span>lovelaceValueOf</span> <span class="token hvariable">amount</span>
    <span class="token hvariable">ledgerTx</span> <span class="token operator">&lt;-</span> <span class="token hvariable">submitTx</span> <span class="token hvariable">tx</span>
    <span class="token hvariable">void</span> <span class="token operator">$</span> <span class="token hvariable">awaitTxConfirmed</span> <span class="token operator">$</span> <span class="token hvariable">getCardanoTxId</span> <span class="token hvariable">ledgerTx</span>
    <span class="token hvariable">logInfo</span> <span class="token operator">@</span><span class="token constant">String</span> <span class="token operator">$</span> <span class="token hvariable">printf</span> <span class="token string">"made a gift of %d lovelace"</span> <span class="token hvariable">amount</span></code>`}<!-- HTML_TAG_END --></pre>
<ul><li><p>The <code>Integer</code> is the actual value taken called <code>amount</code> and is passed as an input to the contract as <code>amount</code></p></li>
<li><p>This 👆 is the equivalent of <code>--tx-in + &lt;Quantity&gt;</code> in Cardano CLI.</p></li>
<li><p>The <code>Datum</code> is required, in this case we’re just passing an arbitrary value (<code>Builtins.mkI 0</code>) because the <code>validator</code> doesn’t care about the datum (i.e. <code>alwaysSucceeds _ _ _ = ()</code>, <code>alwaysFails _ _ _ = error ()</code> both ignore the Datum, Redeemer and Script in this case).</p></li>
<li><p><code>valHash</code> is necessary because the <code>mustPayToOtherScript</code> function can reference <strong>any</strong> <code>Script</code> (there is another function called <code>mustPayToThisScript</code> that emulates the behavior of <code>this</code> in Javascript (i.e. self-referencing). In this cases, it is <strong>not</strong> necessary to pass <code>valHash</code>).</p></li>
<li><p>The construction of the transaction, fee calculations, etc happens in this part -&gt; <code>let tx = mustPayToOtherScript valHas (Datum $ Builtins.mkI 0) $ Ada.lovelaceValueOf amount</code></p></li>
<li><p>Then the transaction is submitted -&gt; <code>ledgerTx &lt;- submitTx tx</code></p></li>
<li><p>The <code>void</code> expression (<code>void $ awaitTxConfirmed $ getCardanoTxId ledgerTx</code>) represents the validation of the transaction by the blockchain.</p></li></ul>
<h2 id="${"questions"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#questions"}"><span class="${"icon icon-link"}"></span></a>Questions</h2>
<p>In <code>AnotherGift.hs</code> in the <code>give</code> function. Which one exactly is the Monad?</p>
<h2 id="${"the-grab-endpoint"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#the-grab-endpoint"}"><span class="${"icon icon-link"}"></span></a>The <code>grab</code> endpoint</h2>
<pre class="${"language-haskell"}"><!-- HTML_TAG_START -->${`<code class="language-haskell"><span class="token hvariable">grab</span> <span class="token operator">::</span> <span class="token hvariable">forall</span> <span class="token hvariable">w</span> <span class="token hvariable">s</span> <span class="token hvariable">e</span><span class="token punctuation">.</span> <span class="token constant">AsContractError</span> <span class="token hvariable">e</span> <span class="token operator">=></span> <span class="token constant">Contract</span> <span class="token hvariable">w</span> <span class="token hvariable">s</span> <span class="token hvariable">e</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token hvariable">grab</span> <span class="token operator">=</span> <span class="token keyword">do</span>
    <span class="token hvariable">utxos</span> <span class="token operator">&lt;-</span> <span class="token hvariable">utxosAt</span> <span class="token hvariable">scrAddress</span>
    <span class="token keyword">let</span> <span class="token hvariable">orefs</span>   <span class="token operator">=</span> <span class="token builtin">fst</span> <span class="token operator">&lt;$></span> <span class="token hvariable">Map<span class="token punctuation">.</span>toList</span> <span class="token hvariable">utxos</span>
        <span class="token hvariable">lookups</span> <span class="token operator">=</span> <span class="token hvariable">Constraints<span class="token punctuation">.</span>unspentOutputs</span> <span class="token hvariable">utxos</span>  <span class="token operator">&lt;></span>
                  <span class="token hvariable">Constraints<span class="token punctuation">.</span>otherScript</span> <span class="token hvariable">valudator</span>
        <span class="token hvariable">tx</span> <span class="token operator">::</span> <span class="token constant">TxConstraints</span> <span class="token constant">Void</span> <span class="token constant">Void</span>
        <span class="token hvariable">tx</span>      <span class="token operator">=</span> <span class="token hvariable">mconcat</span> <span class="token punctuation">[</span><span class="token hvariable">mustSpendScriptOutput</span> <span class="token hvariable">oref</span> <span class="token operator">$</span> <span class="token constant">Redeemer</span> <span class="token operator">$</span> <span class="token hvariable">Builtins<span class="token punctuation">.</span>mkI</span> <span class="token number">17</span> <span class="token operator">|</span> <span class="token hvariable">oref</span> <span class="token operator">&lt;-</span> <span class="token hvariable">orefs</span><span class="token punctuation">]</span>
    <span class="token hvariable">ledgerTx</span> <span class="token operator">&lt;-</span> <span class="token hvariable">submitTxConstraintsWith</span> <span class="token operator">@</span><span class="token constant">Void</span> <span class="token hvariable">lookups</span> <span class="token hvariable">tx</span>
    <span class="token hvariable">void</span> <span class="token operator">$</span> <span class="token hvariable">awaitTxConfirmed</span> <span class="token operator">$</span> <span class="token hvariable">getCardanoTxId</span> <span class="token hvariable">ledgerTx</span>
    <span class="token hvariable">logInfo</span> <span class="token operator">@</span><span class="token constant">String</span> <span class="token operator">$</span> <span class="token string">"collected gifts"</span></code>`}<!-- HTML_TAG_END --></pre>
<p>The <code>grab</code> endpoint:</p>
<ul><li>Takes the <code>utxos</code> from the <code>scrAddress</code></li>
<li>Does something with them, which includes the constraints:</li></ul>
<pre class="${"language-haskell"}"><!-- HTML_TAG_START -->${`<code class="language-haskell">    <span class="token keyword">let</span> <span class="token hvariable">orefs</span>   <span class="token operator">=</span> <span class="token builtin">fst</span> <span class="token operator">&lt;$></span> <span class="token hvariable">Map<span class="token punctuation">.</span>toList</span> <span class="token hvariable">utxos</span>
        <span class="token hvariable">lookups</span> <span class="token operator">=</span> <span class="token hvariable">Constraints<span class="token punctuation">.</span>unspentOutputs</span> <span class="token hvariable">utxos</span>  <span class="token operator">&lt;></span>
                  <span class="token hvariable">Constraints<span class="token punctuation">.</span>otherScript</span> <span class="token hvariable">valudator</span></code>`}<!-- HTML_TAG_END --></pre>
<ul><li>The <code>tx :: TxConstraints Void Void</code> is the paremeters of the tx.</li>
<li>👆 similar to the <code>--tx-out</code> on the Cardano CLI</li>
<li>The parameters are then concatenated and here you need to add a <code>Redeemer $ Builtins.mkI 17</code> because the consumption of a utxo address requires it, in this case it’s a random arbitrary redeemer because our validator does not care about it.</li></ul>
<h2 id="${"question"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#question"}"><span class="${"icon icon-link"}"></span></a>Question</h2>
<ul><li>What library does the data type <code>Constraints</code> come from?</li>
<li>Clarify this line of code from the <code>grab</code> endpoint: <code>tx = mconcat [mustSpendScriptOutput oref $ Redeemer $ Builtins.mkI 17 | oref &lt;- orefs&gt;]</code><ul><li>What exactly does <code>mconcat</code> do? Is it a monad?</li>
<li><code>mustSpendScriptOutput :: forall i o. TxOutRef -&gt; Redeemer -&gt; TxConstraints i o</code></li>
<li>If used <strong>off-chain</strong> it adds <code>utxo</code> and <code>constraint</code> as inputs to the tx. Information about the <code>utxo</code> must be provided in the <code>ScriptLookups</code> with <code>unspentOutputs</code>.<ul><li>The validator must be either provided by <code>unspentOutputs</code> or through <code>otherScript</code>.</li>
<li>The datum must be either provided by <code>unspentOutputs</code> or through <code>otherData</code>.</li>
<li>If used <strong>on-chain</strong>, it verifies that the transaction spends this utxo.</li></ul></li></ul></li></ul>`;
});
export {
  _0016 as default,
  metadata
};
