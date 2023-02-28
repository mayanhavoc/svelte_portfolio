import { c as create_ssr_component } from "./index.js";
const metadata = {
  "id": "0018",
  "title": "Plutus",
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
const _0018 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2 id="${"plutus-ledger-api-0100"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#plutus-ledger-api-0100"}"><span class="${"icon icon-link"}"></span></a>plutus-ledger-api-0.1.0.0</h2>
<h3 id="${"plutusv1ledgerapi"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#plutusv1ledgerapi"}"><span class="${"icon icon-link"}"></span></a>Plutus.V1.Ledger.Api</h3>
<p><a href="${"https://playground.plutus.iohkdev.io/doc/haddock/plutus-ledger-api/html/Plutus-V1-Ledger-Api.html"}" rel="${"nofollow"}">Plutus V1 interface to the Plutus ledger for the Cardano ledger</a></p>
<ol><li>Scripts</li></ol>
<ul><li><p>type <code>SerializedScript = ShortByteString</code>
Scripts to the ledger are serialised bytestrings.</p></li>
<li><p>data <code>Script</code>. A script on the chain</p></li>
<li><p><code>fromCompiledCode :: CompiledCode a -&gt; Script</code>
Turn a <code>CompiledCode</code> (usually produced by <code>compile</code>) into a <code>Script</code> for use with this package.</p></li></ul>
<ol start="${"2"}"><li>Validating scripts</li></ol>
<ul><li><code>validateScript :: SerializedScript -&gt; Bool</code>.
Check if a <code>Script</code> is “valid”. At the moment this just means “deserialises correctly”, which implies that it is (almost certainly) an encoded script and cannot be interpreted as some other kind of encoded data.</li></ul>
<ol start="${"3"}"><li>Running scripts</li></ol>
<ul><li><code>evaluateScriptRestricting</code><ul><li><code>:: VerboseMode</code> , whether to produce log output</li>
<li><code>-&gt; CostModelParams</code>, the cost model to use</li>
<li><code>-&gt; ExBudget</code>, the resource budget which must not be exceeded during evaluation</li>
<li><code>-&gt; SerializedScript</code>, the script to evaluate</li>
<li><code>-&gt; [Data]</code>, the arguments to the script</li>
<li><code>-&gt; (LogOutput, Either EvaluationError ExBudget)</code></li></ul></li></ul>
<p>Evaluates a script, with a cost model and a budget that restricts how many resources it can use according to the cost model. Also returns the budget that was actually used.</p>
<p>Can be used to calculate budgets for scripts, but even in this case you must give a limit to guard against scripts that run for a long time or loop.</p>
<ul><li><code>evaluateScriptCounting</code><ul><li><code>:: VerboseMode</code></li>
<li><code>-&gt; CostModelParams</code></li>
<li><code>-&gt; SerializedScript</code></li>
<li><code>-&gt; [Data]</code></li>
<li><code>(LogOutput, Either EvaluationError ExBudget)</code></li></ul></li></ul>
<p>Evaluates a script, returning the minimum budget that the script would need to evaluate successfully.</p>
<p>This will take as long as the script takes, if you need to limit the execution time of the script also, you can use <code>evaluateScriptRestricting</code>, which also returns the used budget.</p>
<ol><li>Costing-related types</li></ol>
<ul><li><p>data <code>ExBudget</code></p></li>
<li><p>newtype <code>ExCPU</code>, Counts CPU units in picoseconds: maximum value for SatInt is 2^63 ps, or appproximately 106 days.</p></li>
<li><p>newtype <code>ExMemory</code>, Counts size in machine words.</p></li>
<li><p>data <code>SatInt</code></p></li>
<li><p><strong>Cost model</strong></p>
<ul><li><code>validateCostModelParams :: CostModelParams -&gt; Bool</code></li>
<li><code>defaultCostModelParams :: Maybe CostModelParams</code>, the default cost model data. This is exposed to the ledger, so let’s not confuse anybody by mentioning the CEK machine<ul><li>type <code>CostModelParams = Map Text Integer</code></li></ul></li></ul></li></ul>
<ol><li>Context types</li></ol>
<ul><li>data <code>ScriptContext</code></li>
<li>data <code>ScriptPurpose</code>, purpose of the script that is currently running</li></ul>
<p><strong>Supporting types used in the context types</strong>
<strong>ByteStrings</strong></p>
<ul><li>data <code>BuiltinByteString</code>, an opaque type representing Plutus Core ByteStrings</li>
<li><code>toBuiltin :: ToBuiltin a arep =&gt; a -&gt; arep</code></li>
<li><code>fromBuiltin :: FromBuiltin arep a =&gt; arep -&gt; a</code></li></ul>
<h3 id="${"bytes"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#bytes"}"><span class="${"icon icon-link"}"></span></a>Bytes</h3>
<ul><li>newtype <code>LedgerBytes</code></li>
<li><code>fromBytes :: ByteString -&gt; LedgerBytes</code></li></ul>
<h3 id="${"certificates"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#certificates"}"><span class="${"icon icon-link"}"></span></a>Certificates</h3>
<ul><li>data <code>DCert</code>, a representation of the ledger DCert. Some information is digested, and not included</li></ul>
<h3 id="${"credentials"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#credentials"}"><span class="${"icon icon-link"}"></span></a>Credentials</h3>
<ul><li>data <code>StakingCredential</code>, staking credential used to assign rewards</li>
<li>data <code>Credential</code></li></ul>
<h3 id="${"value"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#value"}"><span class="${"icon icon-link"}"></span></a>Value</h3>
<ul><li><p>newtype <code>Value</code>
Operations on currencies are usually implemented pointwise. That is, we apply the operation to the quantities for each currency in turn. So when we add two <code>Values</code> the resulting <code>Value</code> has, for each currency, the sum of the quantities of that <strong>particular</strong> currency in the argument <code>Value</code>. The effect of this is that the currencies in the <code>Value</code> are “independent”, and are operated on separately.</p>
<p>Whenever we need to get the quantity of a currency in a <code>Value</code> where there is no explicit quantity of that currency in the <code>Value</code>, then the quantity is taken to be zero.</p></li>
<li><p>newtype <code>TokenName</code>, ByteString of a name of a token, shown as UTF-8 string when possible</p></li>
<li><p><code>singleton :: CurrencySymbol -&gt; TokenName -&gt; Integer -&gt; Value</code>, make a <code>Value</code> containing only the given quantity of the given currency.</p></li>
<li><p><code>unionWith :: (Integer -&gt; Integer -&gt; Integer) -&gt; Value -&gt; Value -&gt; Value</code></p></li>
<li><p><code>adaSymbol :: CurrencySymbol</code>, the <code>CurrencySymbol</code> of the Ada currency.</p></li>
<li><p><code>adaToken :: TokenName</code>, the <code>TokenName</code> of the Ada currency.</p></li></ul>
<h3 id="${"time"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#time"}"><span class="${"icon icon-link"}"></span></a>Time</h3>
<ul><li>newtype <code>POSIXTime</code>, POSIX time is measured as the number of milliseconds since 1970-01-01T00:00:00Z</li>
<li>type <code>POSIXTimeRange = Interval POSIXTime</code>, an <code>Interval</code> of <code>POSIXTimes</code></li></ul>
<h3 id="${"types-for-representing-transactions"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#types-for-representing-transactions"}"><span class="${"icon icon-link"}"></span></a>Types for representing transactions</h3>
<ul><li>data <code>Address</code>, address with two kinds of credentials, normal and staking.</li>
<li>data <code>TxInfo</code>, a pending transaction. This is the view as seen by validator scripts, so some details are stripped out.</li>
<li>data <code>TxOut</code>, A transaction output, consisting of a target address, a value, and optionally a datum hash</li>
<li>data <code>TxOutRef</code>, a reference to a transaction output. This is a pair of a transaction reference, and an index indicating which of the outputs of that transaction we are referring to.</li>
<li>data <code>TxInInfo</code>, an input of a pending transaction.</li></ul>
<h3 id="${"intervals"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#intervals"}"><span class="${"icon icon-link"}"></span></a>Intervals</h3>
<ul><li>data <code>Interval a</code><ul><li>An interval of <code>a</code>s</li>
<li>The interval may be either closed or open at either end, meaning that the endpoints may or may not be included in the interval</li>
<li>The interval can also be unbounded on either side</li>
<li>data <code>Extended a</code>, a set extended with a positive and negative infinity</li>
<li>type <code>Closure = Bool</code>, whether a bound is inclusive or not</li>
<li>data <code>UpperBound a</code>, the upper bound of an interval</li>
<li>data <code>LowerBound a</code>, the lower bound of an interval</li>
<li><code>always :: Interval a</code>, an <code>Interval</code> that covers every slot</li>
<li><code>from :: a -&gt; Interval a</code>, from <code>a</code> is an <code>Interval</code> that includes all values that are greater than or equal to <code>a</code>.</li>
<li><code>to :: a -&gt; Interval a</code>, <code>to</code> <code>a</code> is an <code>Interval</code> that includes all values that are smaller than or equal to <code>a</code></li>
<li><code>lowerBound :: a -&gt; LowerBound a</code></li>
<li><code>upperBound :: a -&gt; UpperBound a</code></li>
<li><code>strictLowerBound :: a -&gt; LowerBound a</code></li>
<li><code>strictUpperBound :: a -&gt; UpperBound a</code></li></ul></li></ul>
<h3 id="${"newtypes-for-scriptdatum-types-and-hash-types"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#newtypes-for-scriptdatum-types-and-hash-types"}"><span class="${"icon icon-link"}"></span></a>Newtypes for script/datum types and hash types</h3>
<ul><li>newtype <code>Validator</code>, <code>Validator</code> is a wrapper around <code>Scripts</code> which are used as validators in transaction outputs.</li>
<li><code>mkValidatorScript :: CompiledCode (BuiltinData -&gt; BuiltinData -&gt; BuiltinData -&gt; ()) -&gt; Validator</code></li>
<li><code>unValidatorScript :: Validator -&gt; Script</code></li>
<li>newtype <code>ValidatorHash</code>, <code>Script</code> runtime representation of a Digest SHA256.</li>
<li>newtype <code>MintingPolicy</code>, <code>MintingPolicy</code> is a wrapper around <code>Scripts</code> which are used as validators for minting constraints.</li>
<li><code>mkMintingPolicyScript :: CompiledCode (BuiltinData -&gt; BuiltinData -&gt; ()) -&gt; MintingPolicy</code></li>
<li><code>unMintingPolicyScript :: MintingPolicy -&gt; Script</code></li>
<li>newtype <code>MintingPolicyHash</code>, <code>Script</code> runtime representation of a Digest SHA256.</li>
<li>newtype <code>StakeValidator</code>, <code>StakeValidator</code> is a wrapper around <code>Scripts</code> which are used as validators for withdrawals and stake address certificates.</li>
<li><code>mkStakeValidatorScript :: CompiledCode (BuiltinData -&gt; BuiltinData -&gt; ()) -&gt; StakeValidator</code></li>
<li><code>unStakeValidatorScript :: StakeValidator -&gt; Script</code></li>
<li><code>newtype StakeValidatorHash</code>, <code>Script</code> runtime representation of a Digest SHA256.</li>
<li>newtype <code>Redeemer</code>, <code>Redeemer</code> is a wrapper around Data values that are used as redeemers in transaction inputs.</li>
<li>newtype <code>RedeemerHash</code></li>
<li>newtype <code>Datum</code>, <code>Datum</code> is a wrapper around Data values which are used as data in transaction outputs.</li>
<li>newtype <code>DatumHash</code></li></ul>
<ol><li>Data</li></ol>
<ul><li><p>data <code>Data</code>, a generic “data” type. The main constructor <code>Constr</code> represents a datatype value in sum-of-products form: <code>Constr i args</code> represents a use of the <code>i</code>th constructor along with its arguments. The other constructors are various primitives.</p></li>
<li><p>newtype <code>BuiltinData</code>, a type corresponding to the Plutus Core builtin equivalent of <code>Data</code>. The point of this type is to be an opaque equivalent of <code>Data</code>, so as to ensure that it is only used in ways that the compiler can handle.
As such, you should use this type in your <strong>on-chain code</strong>, and in any data structures that you want to be representable on-chain.
For <strong>off-chain</strong> usage, there are conversion functions <code>builtinDataToData</code> and <code>dataToBuiltinData</code>, but note that these will not work on-chain.</p></li>
<li><p>class <code>ToData a</code> where, a typeclass for types that can be converted to and from <code>BuiltinData</code>.</p></li></ul>
<p><strong>Methods</strong></p>
<ul><li><p><code>toBuiltinData :: a -&gt; BuiltinData</code>, convert a value to <code>BuiltinData</code>.</p></li>
<li><p>class <code>FromData a</code> where</p></li></ul>
<p><strong>Methods</strong></p>
<ul><li><p><code>fromBuiltinData :: BuiltinData -&gt; Maybe a</code>, convert a value from <code>BuiltinData</code>, returning <code>Nothing</code> if this fails.</p></li>
<li><p>class <code>UnsafeFromData</code> a where</p></li></ul>
<p><strong>Methods</strong></p>
<ul><li><p><code>unsafeFromBuiltinData :: BuiltinData -&gt; a</code>, convert a value from <code>BuiltinData</code>, calling <code>error</code> if this fails. This is typically much faster than <code>fromBuiltinData</code>
When implementing this function, make sure to call <code>unsafeFromBuiltinData</code> rather than <code>fromBuiltinData</code> when converting substructures.</p></li>
<li><p><code>toData :: ToData a =&gt; a -&gt; Data</code>, convert a value to <code>Data</code></p></li>
<li><p><code>fromData :: FromData a =&gt; Data -&gt; M aybe a</code>, convert a value from <code>Data</code>, returning <code>Nothing</code> if this fails</p></li>
<li><p><code>dataToBuiltinData :: Data -&gt; BuiltinData</code>, convert a <code>Data</code> into a <code>BuiltinData</code>. <strong>Only works off-chain</strong></p></li>
<li><p><code>builtinDataToData :: BuiltinData -&gt; Data</code>, convert a <code>BuiltinData</code> into a <code>Data</code>. <strong>Only works off-chain</strong></p></li></ul>
<ol start="${"7"}"><li>Errors</li></ol>
<ul><li>data <code>EvaluationError</code>, errors that can be thrown when evaluating a Plutus script</li></ul>
<h3 id="${"plutusv2ledgerapi"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#plutusv2ledgerapi"}"><span class="${"icon icon-link"}"></span></a>Plutus.V2.Ledger.Api</h3>
<p><a href="${"https://playground.plutus.iohkdev.io/doc/haddock/plutus-ledger-api/html/Plutus-V2-Ledger-Api.html"}" rel="${"nofollow"}">Plutus V2 interface to the Plutus ledger for the Cardano ledger</a></p>
<ol><li>Scripts</li>
<li>Validating scripts</li>
<li>Running scripts</li>
<li>Costing-related types</li>
<li>Context types<ul><li>Plutus V2 adds <code>Association maps</code> to the <code>Supporting types used in the context types category</code> of <code>Context types</code></li></ul></li>
<li>Data</li>
<li>Errors</li></ol>
<h2 id="${"plutus-tx-0100"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#plutus-tx-0100"}"><span class="${"icon icon-link"}"></span></a>plutus-tx-0.1.0.0</h2>
<h3 id="${"plutustxbase"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#plutustxbase"}"><span class="${"icon icon-link"}"></span></a>PlutusTx.Base</h3>
<p><a href="${"https://playground.plutus.iohkdev.io/doc/haddock/plutus-tx/html/PlutusTx-Base.html"}" rel="${"nofollow"}">Plutus Tx basic functions</a></p>
<table><thead><tr><th>Type signature</th>
<th>Description</th></tr></thead>
<tbody><tr><td><code>fst :: (a,b) -&gt; a</code></td>
<td>Plutus Tx version of <code>fst</code> extracts the first component of a pair</td></tr>
<tr><td><code>snd :: (a,b) -&gt; b</code></td>
<td>Plutus Tx version of <code>snd</code> extracts the second component of a pair</td></tr>
<tr><td><code>curry :: ((a,b) -&gt; c) -&gt; a -&gt; b -&gt; c</code></td>
<td></td></tr>
<tr><td><code>uncurry :: (a -&gt; b -&gt; c) -&gt; (a, b) -&gt; c</code></td>
<td></td></tr>
<tr><td><code>($) :: (a -&gt; b) -&gt; a -&gt; b</code></td>
<td>Plutus Tx version of <code>Data.Function.($)</code> which is an application operator. It has a low, right-associative binding precedence, so it sometimes allows avoiding parentheses, i.e. <code>f $ g $ h x = f(g(h x))</code></td></tr>
<tr><td><code>flip :: (a -&gt; b -&gt; c) -&gt; b -&gt; a -&gt; c</code></td>
<td>Plutus Tx version of <code>flip</code></td></tr>
<tr><td><code>until :: (a -&gt; Bool) -&gt; (a -&gt; a) -&gt; a -&gt; a</code></td>
<td>Plutus Tx version of <code>until</code></td></tr>
<tr><td><code>(.) :: (b -&gt; c) -&gt; (a -&gt; b) -&gt; a -&gt; c</code></td>
<td>Plutus Tx version of <code>Prelude.(.)</code></td></tr>
<tr><td><code>const :: a -&gt; b -&gt; a</code></td>
<td>-&gt; Plutus Tx version of <code>const</code></td></tr>
<tr><td><code>id :: a -&gt; a</code></td>
<td>Plutus Tx version of <code>id</code></td></tr></tbody></table>
<h2 id="${"playground-common-0100"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#playground-common-0100"}"><span class="${"icon icon-link"}"></span></a>playground-common-0.1.0.0</h2>
<h3 id="${"playgroundtypes"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#playgroundtypes"}"><span class="${"icon icon-link"}"></span></a>Playground.Types</h3>
<p><a href="${"https://playground.plutus.iohkdev.io/doc/haddock/playground-common/html/Playground-Types.html"}" rel="${"nofollow"}">Playground.Types</a></p>
<ol><li>data <code>KnownCurrency</code></li>
<li><code>adaCurrency :: KnownCurrency</code></li>
<li>data <code>PayToWalletParams</code></li>
<li>data <code>SimulatorWallet</code></li>
<li>data <code>ContractCall a</code></li>
<li>type <code>SimulatorAction = ContractCall (Fix FormArgumentF)</code></li>
<li>type <code>Expression = ContractCall Value</code></li>
<li>data <code>Simulation</code></li>
<li>data <code>Evaluation</code></li>
<li><code>pubKeys :: Evaluation -&gt; [PaymentPubKeyHash]</code></li>
<li>data <code>EvaluationResult</code></li>
<li>data <code>CompilationResult</code></li>
<li>data <code>ContractDemo</code></li>
<li>data <code>FunctionSChema a</code></li>
<li>data <code>PlaygroundError</code></li></ol>
<h2 id="${"plutus-ledger-constraints-0100"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#plutus-ledger-constraints-0100"}"><span class="${"icon icon-link"}"></span></a>plutus-ledger-constraints-0.1.0.0</h2>
<h3 id="${"ledgerconstraints"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#ledgerconstraints"}"><span class="${"icon icon-link"}"></span></a>Ledger.Constraints</h3>
<p><a href="${"https://playground.plutus.iohkdev.io/doc/haddock/plutus-ledger-constraints/html/Ledger-Constraints.html"}" rel="${"nofollow"}">Ledger Constraints</a>
This module defines <code>TxConstraints</code>, a list of constraints on transactions.
A <code>TxConstraints</code> value can be used both to</p>
<ul><li>generate a transactions that satisfies the constraints (off-chain using <code>mkTx</code>) and</li>
<li>check whether a given pending transaction meets the constraints (on-chain using <code>checkScriptContext</code>)</li></ul>
<ol><li>data <code>TxConstraints i o</code></li>
<li>data <code>TxConstraint</code></li>
<li>data <code>ScriptInputConstraint a</code></li>
<li>data <code>ScriptOutputConstraint a</code></li></ol>
<h4 id="${"defining-constraints"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#defining-constraints"}"><span class="${"icon icon-link"}"></span></a>Defining constraints</h4>
<ol><li><code>mustPayToTheScript :: forall i o. ToData o =&gt; o -&gt; Value -&gt; TxConstraints i o</code></li></ol>
<ul><li><code>mustPayToTheScript d v</code> locks the value <code>v</code> with a script alongside a datum <code>d</code>.</li>
<li>If used <strong>off-chain</strong>, creates a script output with <code>d</code> and <code>v</code> and adds <code>d</code> in the transaction’s datum witness set. <ul><li>The script address is derived from the typed validator that is provided in the <code>ScriptLookups</code> with <code>typedValidatorLookups</code></li></ul></li>
<li>If used <strong>on-chain</strong>, the constraint verifies that <code>d</code> is part of the datum witness set and that the new script transaction output with <code>d</code> and <code>v</code> is part of the transaction’s outputs.</li></ul>
<ol start="${"2"}"><li><code>mustPayToPubKey :: forall i o. PaymentPubKeyHash -&gt; Value -&gt; TxConstraints i o</code></li></ol>
<ul><li><code>mustPayToPubKey pkh v</code> is the same as <code>mustPayWithDatumToPubKeyAddress</code>, but without any staking key hash and datum.</li></ul>
<ol start="${"3"}"><li><code>mustPayToPubKeyAddress :: forall i o. PaymentPubKeyHash -&gt; StakePubKeyHash -&gt; Value -&gt; TxConstraints i o</code></li></ol>
<ul><li><code>mustPayToPubKeyAddress pkh skh v</code> is the same as <code>mustPayWithDatumToPubKeyAddress</code>, but without any datum.</li></ul>
<ol start="${"4"}"><li><code>mustPayWithDatumToPubKey :: forall i o. PaymentPubKeyHash -&gt; Datum -&gt; Value -&gt; TxConstraints i o</code></li></ol>
<ul><li>mustPayWithDatumToPubKey pkh d v is the same as mustPayWithDatumToPubKeyAddress, but without the staking key hash.</li></ul>
<ol start="${"5"}"><li><code>mustPayWithDatumToPubKeyAddress :: forall i o. PaymentPubKeyHash -&gt; StakePubKeyHash -&gt; Datum -&gt; Value -&gt; TxConstraints i o</code></li></ol>
<ul><li><code>mustPayWithDatumToPubKeyAddress pkh skh d v</code> locks a transaction output with a public key address.</li>
<li>If used <strong>off-chain</strong>, it creates a public key output with <code>pkh</code>, <code>skh</code>, <code>d</code> and <code>v</code> and maybe adds <code>d</code> in the transaction’s datum witness set. </li>
<li>If used <strong>on-chain</strong>, it verifies that <code>d</code> is part of the datum witness set and that the public key transaction output with <code>pkh</code>, <code>skh</code>, <code>d</code> and <code>v</code> is part of the transaction’s outputs.</li></ul>
<ol start="${"6"}"><li><code>mustMintCurrency :: forall i o. MintingPolicyHash -&gt; TokenName -&gt; Integer -&gt; TxConstraints i o</code></li></ol>
<ul><li>Same as <code>mustMintCurrentWithRedeemer</code>, but sets the redeemer to the unit redeemer.</li></ul>
<ol start="${"7"}"><li><code>mustMintCurrencyWithRedeemer :: forall i o. MintingPolicyHash -&gt; Redeemer -&gt; TokenName -&gt; Integer -&gt; TxConstraints i o</code></li></ol>
<ul><li><p><code>mustMintCurrencyWithRedeemer mph r tn a</code> creates the given amount <code>a</code> of the currency specified with <code>mph</code>, <code>r</code> and <code>tn</code>.</p></li>
<li><p>If used <strong>off-chain</strong>, it mints a currency using <code>mph</code>, <code>r</code>, <code>tn</code> and <code>a</code>, adds <code>mph</code> in the transaction’s minting policy witness set and adds <code>r</code> in the transaction’s redeemer witness set. The minting policy must be provided in the <code>ScriptLookups</code> with <code>typedValidatorLookups</code> or <code>mintingPolicy</code>.</p></li>
<li><p>If used in <strong>on-chain</strong>, it verifies that the minted currency’s <code>mph</code>, <code>tn</code> and <code>a</code> is part of the transaction’s minting information.</p></li></ul>
<ol start="${"8"}"><li><code>mustMintValue :: forall i o. Value -&gt; TxConstraints i o</code></li></ol>
<ul><li>Same as <code>mustMintValueWithRedeemer</code>, but sets the redeemer to the unit redeemer.</li></ul>
<ol start="${"9"}"><li><code>mustMintValueWithRedeemer :: forall i o. Redeemer -&gt; Value -&gt; TxConstraints i o</code></li></ol>
<ul><li><p>Same as <code>mustMintCurrentWithRedeemer</code>, but uses the minting policy hash, token name and amount provided by <code>Value</code>.</p></li>
<li><p>Note that we can derive the <code>MintingPolicyHash</code> from the <code>Value</code>’s currency symbol.</p></li></ul>
<ol start="${"10"}"><li><code>mustSpendAtLeast :: forall i o. Value -&gt; TxConstraints i o</code></li></ol>
<ul><li><code>mustSpendAtLeast v</code> requires the sum of the transaction’s inputs value to be at least <code>v</code>.</li>
<li>If used <strong>off-chain</strong>, it adds the missing input value with an additional public key output using the public key hash provided in the <code>ScriptLookups</code> with <code>ownPaymentPubKeyHash</code> and optionnaly <code>ownStakePubKeyHash</code>.</li>
<li>If used <strong>on-chain</strong>, it verifies that the sum of the transaction’s inputs value to be at least <code>v</code>.</li></ul>
<ol start="${"11"}"><li><code>mustSpendPubKeyOutput :: forall i o. TxOutRef -&gt; TxConstraints i o</code></li></ol>
<ul><li><code>mustSpendPubKeyOutput utxo</code> must spend the given unspent transaction public key output.</li>
<li>If used <strong>off-chain</strong>, it adds <code>utxo</code> as an input to the transaction. Information about this <code>utxo</code> must be provided in the <code>ScriptLookups</code> with <code>unspentOutputs</code>.</li>
<li>If used <strong>on-chain</strong>, this constraint verifies that the transaction spends this utxo.</li></ul>
<ol start="${"12"}"><li><code>mustSpendScriptOutput :: forall i o. TxOutRef -&gt; Redeemer -&gt; TxConstraints i o</code></li></ol>
<ul><li><code>mustSpendScriptOutput utxo red</code> must spend the given unspent transaction script output.</li>
<li>If used <strong>off-chain</strong>, it adds <code>utxo</code> and <code>red</code> as an input to the transaction.<ul><li>Information about this <code>utxo</code> must be provided in the <code>ScriptLookups</code> with <code>unspentOutputs</code>.</li>
<li>The validator must be either provided by <code>unspentOutputs</code> or through <code>otherScript</code>.</li>
<li>The datum must be either provided by <code>unspentOutputs</code> or through <code>otherData</code>.</li></ul></li>
<li>If used <strong>on-chain</strong>, it verifies that the transaction spends this <code>utxo</code>.</li></ul>
<ol start="${"13"}"><li><code>mustValidateIn :: forall i o. POSIXTimeRange -&gt; TxConstraints i o</code></li></ol>
<ul><li><code>mustValidateIn r</code> requires the transaction’s validity time range to be contained in <code>r</code>.</li>
<li>If used <strong>off-chain</strong>, it sets the transaction’s validity time range to <code>r</code>.</li>
<li>If used <strong>on-chain</strong>, it verifies that the time range <code>r</code> is entirely contained in the transaction’s validity time range.</li></ul>
<ol start="${"14"}"><li><code>mustBeSignedBy :: forall i o. PaymentPubKeyHash -&gt; TxConstraints i o</code></li></ol>
<ul><li><code>mustBeSignedBy pk</code> requires the transaction to be signed by the public key <code>pk</code>.</li>
<li>If used in <strong>off-chain</strong>, this constraint adds <code>pk</code> in the transaction’s public key witness set.</li>
<li>If used in <strong>on-chain</strong>, this constraint verifies that <code>pk</code> is part of the transaction’s public key witness set.</li></ul>
<ol start="${"15"}"><li><code>mustProduceAtLeast :: forall i o. Value -&gt; TxConstraints i o</code></li></ol>
<ul><li><code>mustProduceAtLeast v</code> requires the sum of the transaction’s outputs value to be at least <code>v</code>.</li>
<li>If used <strong>off-chain</strong>, this constraint adds the missing output value with an additionnal public key output using the public key hash provided in the <code>ScriptLookups</code> with <code>ownPaymentPubKeyHash</code> and optionnaly <code>ownStakePubKeyHash</code>.</li>
<li>If used in <strong>on-chain</strong>, this constraint verifies that the sum of the transaction’s outputs value to be at least <code>v</code>.</li></ul>
<ol start="${"16"}"><li><code>mustIncludeDatum :: forall i o. Datum -&gt; TxConstraints i o</code></li></ol>
<ul><li><code>mustIncludeDatum d</code> requires the transaction to include the datum <code>d</code>.</li>
<li>If used in <strong>off-chain</strong>, this constraint adds <code>d</code> in the transaction’s datum witness set alongside it’s hash (which is computed automatically).</li>
<li>If used in <strong>on-chain</strong>, this constraint verifies that <code>d</code> is part of the transaction’s datum witness set.</li></ul>
<ol start="${"17"}"><li><code>mustPayToOtherScript :: forall i o. ValidatorHash -&gt; Datum -&gt; Value -&gt; TxConstraints i o</code></li></ol>
<ul><li><code>mustPayToOtherScript vh d v</code> locks the value <code>v</code> with the given script hash <code>vh</code> alonside a datum <code>d</code>.</li>
<li>If used <strong>off-chain</strong>, it creates a script output with <code>vh</code>, <code>d</code> and <code>v</code> and adds <code>d</code> in the transaction’s datum witness set.</li>
<li>If used <strong>on-chain</strong>, this constraint verifies that <code>d</code> is part of the datum witness set and that the script transaction output with <code>vh</code>, <code>d</code> and <code>v</code> is part of the transaction’s outputs.</li></ul>
<ol start="${"18"}"><li><code>mustHashDatum :: DatumHash -&gt; Datum -&gt; TxConstraints i o</code></li></ol>
<ul><li><code>mustHashDatum dh d</code> requires the transaction to include the datum hash <code>dh</code> and actual datum <code>d</code>.</li>
<li>If used in <strong>off-chain</strong>, this constraint adds <code>dh</code> and <code>d</code> in the transaction’s datum witness set.</li>
<li>If used in <strong>on-chain</strong>, this constraint verifies that <code>dh</code> and <code>d</code> are part of the transaction’s datum witness set.</li></ul>
<ol start="${"19"}"><li><code>mustSatisfyAnyOf :: forall i o. [TxConstraints i o] -&gt; TxConstraints i o</code></li></ol>
<h4 id="${"queries-on-constraints"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#queries-on-constraints"}"><span class="${"icon icon-link"}"></span></a>Queries on constraints</h4>
<ol><li><code>modifiesUtxoSet :: forall i o. TxConstraints i o -&gt; Bool</code></li></ol>
<ul><li>Check whether every transaction that satisfies the constraints has to modify the UTXO set.</li></ul>
<ol start="${"2"}"><li><code>isSatisfiable :: forall i o. TxConstraints i o -&gt; Bool</code></li></ol>
<ul><li>Are the constraints satisfiable?</li></ul>
<h4 id="${"on-chain-validation"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#on-chain-validation"}"><span class="${"icon icon-link"}"></span></a>On-chain validation</h4>
<p><code>checkScriptContext :: forall i o. ToData o =&gt; TxConstraints i o -&gt; ScriptContext -&gt; Bool</code></p>
<ul><li>Does the <code>ScriptContext</code> satisfy the constraints?</li></ul>
<h4 id="${"off-chain-transaction-generation"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#off-chain-transaction-generation"}"><span class="${"icon icon-link"}"></span></a>Off-chain transaction generation</h4>
<ol><li><code>data UnbalancedTx</code></li></ol>
<ul><li>An unbalanced transaction. It needs to be balanced and signed before it can be submitted to the ledger.</li></ul>
<ol><li><p>data <code>MkTxError</code></p></li>
<li><p><code>mkTx :: (FromData (DatumType a), ToData (DatumType a), ToData (RedeemerType a)) =&gt; ScriptLookups a -&gt; TxConstraints (RedeemerType a) (DatumType a) -&gt; Either MkTxError UnbalancedTx</code></p></li></ol>
<ul><li>Turn a <code>TxConstraints</code> value into an unbalanced transaction that satisfies the constraints. To use this in a contract, see <code>submitTxConstraints</code> and related functions.</li></ul>
<ol start="${"3"}"><li><code>adjustUnbalancedTx :: UnbalancedTx -&gt; UnbalancedTx</code></li></ol>
<ul><li>Each transaction output should contain a minimum amount of Ada (this is a restriction on the real Cardano network).</li></ul>
<h4 id="${"combining-multiple-typed-scripts-into-one-transaction"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#combining-multiple-typed-scripts-into-one-transaction"}"><span class="${"icon icon-link"}"></span></a>Combining multiple typed scripts into one transaction</h4>
<ol><li>data <code>SomeLookupsAndConstraints</code> where </li></ol>
<ul><li>Some typed <code>TxConstraints</code> and the <code>ScriptLookups</code> needed to turn them into an <code>UnbalancedTx</code>.</li>
<li><code>SomeLookupsAndConstraints :: forall a. (FromData (DatumType a), ToData (DatumType a), ToData (RedeemerType a)) =&gt; ScriptLookups a -&gt; TxConstraints (RedeemerType a) (DatumType a) -&gt; SomeLookupsAndConstraints</code></li></ul>
<ol start="${"2"}"><li><code>mkSomeTx :: [SomeLookupsAndConstraints] -&gt; Either MkTxError UnbalancedTx</code></li></ol>
<ul><li>Given a list of SomeLookupsAndConstraints describing the constraints for several scripts, build a single transaction that runs all the scripts.</li></ul>
<h4 id="${"lookups"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#lookups"}"><span class="${"icon icon-link"}"></span></a>Lookups</h4>
<ol><li><p>data <code>ScriptLookups a</code></p></li>
<li><p><code>typedValidatorLookups :: TypedValidator a -&gt; ScriptLookups a</code></p></li></ol>
<ul><li>A script lookups value with a script instance. For convenience this also includes the minting policy script that forwards all checks to the instance’s validator.</li>
<li>If called multiple times, only the first typed validator is kept:<ul><li><code>typedValidatorLookups tv1 &lt;&gt; typedValidatorLookups tv2 &lt;&gt; ... == typedValidatorLookups tv1</code></li></ul></li></ul>
<ol><li><code>unspentOutputs :: Map TxOutRef ChainIndexTxOut -&gt; ScriptLookups a</code></li></ol>
<ul><li>A script lookups value that uses the map of unspent outputs to resolve input constraints.</li></ul>
<ol start="${"4"}"><li><code>mintingPolicy :: MintingPolicy -&gt; ScriptLookups a</code></li></ol>
<ul><li>A script lookups value with a minting policy script.</li></ul>
<ol start="${"5"}"><li><code>otherScript :: Validator -&gt; ScriptLookups a</code></li></ol>
<ul><li>A script lookups value with a validator script.</li></ul>
<ol start="${"6"}"><li><code>otherData :: Datum -&gt; ScriptLookups a</code></li></ol>
<ul><li>A script lookups value with a datum.</li></ul>
<ol start="${"7"}"><li><code>paymentPubKey :: PaymentPubKey -&gt; ScriptLookups a</code></li></ol>
<ul><li>A script lookup value with a payment public key</li></ul>
<ol start="${"8"}"><li><code>ownPaymentPubKeyHash :: PaymentPubKeyHash -&gt; ScriptLookups a</code></li></ol>
<ul><li>A script lookups value with a payment public key hash.</li>
<li>If called multiple times, only the payment public key hash is kept:</li></ul>
<pre class="${"language-haskell"}"><!-- HTML_TAG_START -->${`<code class="language-haskell"><span class="token hvariable">ownPaymentPubKeyHash</span> <span class="token hvariable">pkh1</span> <span class="token operator">&lt;></span> <span class="token hvariable">ownPaymentPubKeyHash</span> <span class="token hvariable">pkh2</span> <span class="token operator">&lt;></span> <span class="token operator">...</span>
<span class="token operator">==</span> <span class="token hvariable">ownPaymentPubKeyHash</span> <span class="token hvariable">pkh1</span></code>`}<!-- HTML_TAG_END --></pre>
<ol><li><code>ownStakePubKeyHash :: StakePubKeyHash -&gt; ScriptLookups a</code></li></ol>
<ul><li>A script lookups value with a stake public key hash.</li>
<li>If called multiple times, only the stake public key hash is kept:</li></ul>
<pre class="${"language-haskell"}"><!-- HTML_TAG_START -->${`<code class="language-haskell">    <span class="token hvariable">ownStakePubKeyHash</span> <span class="token hvariable">skh1</span> <span class="token operator">&lt;></span> <span class="token hvariable">ownPaymentPubKeyHash</span> <span class="token hvariable">pkh2</span> <span class="token operator">&lt;></span> <span class="token operator">...</span>
    <span class="token operator">==</span> <span class="token hvariable">ownStakePubKeyHash</span> <span class="token hvariable">skh1</span></code>`}<!-- HTML_TAG_END --></pre>`;
});
export {
  _0018 as default,
  metadata
};
