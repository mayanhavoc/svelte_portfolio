import { c as create_ssr_component } from "./index.js";
const metadata = {
  "id": "0019",
  "title": "Plutus minting policy",
  "date": "2022-07-01",
  "categories": ["Plutus", "Cardano"]
};
const _0019 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2 id="${"plutus-minting-policy"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#plutus-minting-policy"}"><span class="${"icon icon-link"}"></span></a>Plutus Minting Policy</h2>
<p>Compiler extensions: boilerplate (ref. DeadlineMinting.hs)</p>
<p>Own imports:
<code>Plutus.Trace.Emulator as Emulator</code> -&gt; needed for emulator trace to work
<code>Wallet.Emulator.Wallet</code> -&gt; needed for emulator trace to work</p>
<ul><li>No Datum needed</li></ul>
<p><code>Scripts.MintingPolicy</code>
<code>Minting</code> is a special type and is a function in the Cardano blockchain.</p>
<p><code>Scripts.wrapMintingPolicy</code> special function for policy validators</p>
<p><code>scriptCurrencySymbol</code> just like <code>scriptAddresses</code> you have the hash of the script address (e.g. when you create a policy) and you use the hash of the native script that represents the policy becomes the policy id. The <code>scriptCurrencySymbol</code> function is how you get that id.</p>
<h2 id="${"the-basic-plutus-contract"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#the-basic-plutus-contract"}"><span class="${"icon icon-link"}"></span></a>The basic plutus contract</h2>
<p>The basic plutus contract is a minimal framework to which you can add code and it compiles when running it in the plutus playground/cabal repl.</p>
<pre class="${"language-haskell"}"><!-- HTML_TAG_START -->${`<code class="language-haskell"><span class="token comment">-- OFF-CHAIN</span>

<span class="token hvariable">mint</span> <span class="token operator">::</span> <span class="token constant">Contract</span> <span class="token hvariable">w</span> <span class="token constant">FreeSchema</span> <span class="token constant">Text</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token hvariable">mint</span> <span class="token operator">=</span> <span class="token builtin">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">type</span> <span class="token constant">FreeSchema</span> <span class="token operator">=</span> <span class="token constant">Endpoint</span> <span class="token string">"mint"</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token hvariable">endpoints</span> <span class="token operator">::</span> <span class="token constant">Contract</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token constant">FreeSchema</span> <span class="token constant">Text</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token hvariable">endpoints</span> <span class="token operator">=</span> <span class="token hvariable">mint</span>
<span class="token comment">-- mint' >> endpoints</span>
<span class="token comment">--   where</span>
<span class="token comment">--       mint' = awaitPromise $ endpoints @"mint" mint</span>

<span class="token hvariable">mkSchemaDefinitions</span> ''<span class="token constant">FreeSchema</span>

<span class="token hvariable">mkKnownCurrencies</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></code>`}<!-- HTML_TAG_END --></pre>
<p><code>mkSchemaDefinitions &#39;&#39;FreeSchema</code> and <code>mkKnownCurrencies []</code> are required by Plutus Playground.</p>
<p>The rest of the code is a generalized contract and schema.</p>
<p>The endpoints output is a <strong>contract monad</strong> (aka <code>Contract w FreeSchema Text ()</code>)</p>
<p><code>singleton</code> is used for <strong>native tokens</strong> or <strong>NFTs</strong>.</p>
<p>Normally in the cardano cli you validate through the signature, there is no actual validation, simply authorization.
In this case, however, we are validating from the transaction execution so, replacing the <strong>authorization</strong> with the <strong>validator</strong>. If the validator ‘validates’ the tx and if it passes, it is published.</p>`;
});
export {
  _0019 as default,
  metadata
};
