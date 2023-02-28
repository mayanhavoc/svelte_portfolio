import { c as create_ssr_component } from "./index.js";
const metadata = {
  "id": "0022",
  "title": "Plutus vesting contract",
  "date": "2022-07-01",
  "categories": ["Plutus", "Cardano"]
};
const _0022 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2 id="${"plutus-vesting-contract"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#plutus-vesting-contract"}"><span class="${"icon icon-link"}"></span></a>Plutus Vesting Contract</h2>
<p>In the eUTxO model, when you are making a tx, the eUTxO contains a datum and when eutxos are handled on a script, the datum becomes like a password.
The eutxo saves the datum hash and you need to provide the real datum data for the eutxo.
FOr consumption of a utxo under a script address, you need to pass two things:</p>
<ul><li>The validation, a validator or validators that succeeds</li>
<li>The appropriate datum.
So, the eUTxO stores the <strong>hash</strong> of the datum and the real data from the datum needs to be passed in to perform the authentication.</li></ul>
<h2 id="${"on-chain-code"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#on-chain-code"}"><span class="${"icon icon-link"}"></span></a>On-chain code</h2>
<ul><li>The contract is going to ignore the redeemer and use the datum.</li>
<li>The contract will work like this:<ul><li>Take eutxos (value)</li>
<li>Lock it to a smart contract<ul><li>Two conditions to consider:<ul><li>The right account requesting the funds</li>
<li>The deadline must be met</li></ul></li></ul></li></ul></li></ul>
<h2 id="${"datum"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#datum"}"><span class="${"icon icon-link"}"></span></a>Datum</h2>
<ul><li><code>data VestingDatum</code> uses bracket notation to pass the two values: <code>beneficiary :: PaymentPubKeyHash</code> and <code>deadline :: POSIXTime</code></li>
<li><code>beneficiary :: PaymentPubKeyHash</code> - we need to get the hash of the public key of “somebody”. this means that this “somebody” must have signed the transaction, which is where we get the pubkeyhash with their payment signing key.</li>
<li><code>deadline :: POSIXTime</code> - POSIXTime is a Unix standard that counts time in miliseconds.</li>
<li>we inject the <code>VestingDatum</code> type into the context with <code>PlutusTx.unstableMakeIsData</code></li></ul>
<h2 id="${"validator"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#validator"}"><span class="${"icon icon-link"}"></span></a>Validator</h2>
<h3 id="${"type-signature"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#type-signature"}"><span class="${"icon icon-link"}"></span></a>Type signature</h3>
<ul><li>Pass the datum data type <code>VestingDatum</code></li>
<li>Ignore the redeemer</li>
<li>Pass the script context</li>
<li>Answer bool</li></ul>
<h3 id="${"runction-expression"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#runction-expression"}"><span class="${"icon icon-link"}"></span></a>Runction expression</h3>
<ul><li>Vesting validator takes the datum <code>dat</code>, unit <code>()</code> and script context <code>ctx</code></li>
<li>Using <code>traceIfFalse</code> we define the message for <code>false</code> and call it with <code>signedByBeneficiary</code> and <code>traceIfFalse</code> <code>&quot;Deadline not reached&quot;</code> and call it with <code>deadlineReached</code><ul><li>You can do a lot of traceIfFalse with different validations depending on the use case</li>
<li>In this case, we are implying two<ul><li>The beneficiary must have signed the tx</li>
<li>The deadline has to have been reached <strong>and passed</strong></li></ul></li></ul></li></ul>
<h3 id="${"before-we-move-on-a-slight-problem-with-the-deadline"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#before-we-move-on-a-slight-problem-with-the-deadline"}"><span class="${"icon icon-link"}"></span></a>Before we move on, a slight problem with the deadline</h3>
<ul><li>The tx doesn’t have a specific time, but a <strong>range</strong></li>
<li>This <strong>range</strong> of the tx needs to be <strong>after</strong> the deadline, middle positions don’t work, all ranges must be after the deadline</li></ul>
<h3 id="${"script-context"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#script-context"}"><span class="${"icon icon-link"}"></span></a>Script context</h3>
<ul><li>The script context is a wrapper for two types<ul><li>A <code>TxInfo</code> -&gt; which has information about<ul><li>tx inputs</li>
<li>tx outputs</li>
<li>fees paid by the tx</li>
<li>value minted by the tx</li>
<li>digests of certs included in the tx</li>
<li>withdrawals</li>
<li>valid range for the tx<ul><li>a POSIX time range is an <code>Interval</code> of <code>POSIXTime</code>s<ul><li>an <code>Interval of POSIXTime</code>s is a wrapper of a <code>LowerBound</code> and <code>UpperBound</code> of type <code>a</code>, in this case type <code>POSIX</code> time.
POSIX time represents an integer
<code>newtype POSIXTime</code></li>
<li>Constructors<ul><li><code>POSIXTime</code></li>
<li><code>getPOSIXTime :: Integer</code><ul><li>signatures provided with the tx attested that they all signed the tx</li>
<li><code>txInfoSignatories :: [PubKeyHash]</code> -&gt; it has the key hashes of any of the signers of the transaction</li></ul></li></ul></li>
<li>the datum and the hash of the datum <code>txInfoData :: [(DatumHash, Datum)]</code></li>
<li>hash of the pending transaction (excluding witnesses)</li>
<li>tx id -&gt; <code>txInfoId :: TxId</code></li></ul></li></ul></li>
<li>A <code>ScriptPurpose</code> -&gt; payment<ul><li>Minting</li>
<li>Spending</li>
<li>Rewarding</li>
<li>Certifying</li></ul></li></ul></li></ul></li></ul>
<h3 id="${"where"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#where"}"><span class="${"icon icon-link"}"></span></a><code>where</code></h3>
<ul><li><code>TxInfo</code> is comparable to the POSIXTime in the <code>deadline</code> value of <code>VestingDatum</code>.</li>
<li>This means we can extract the <code>POSIX</code> time range from it.<ul><li>We create a function <code>info</code> that has type <code>TxInfo</code></li>
<li><code>info</code> is going to use the notation auxiliary function <code>scriptContextTxInfo</code> to take the <code>ctx</code> and extract <code>TxInfo</code> into <code>info</code></li></ul></li>
<li>Next we create the <code>signedByBeneficiary</code> function which has type <code>Bool</code><ul><li>A simple function which can be curried to a single type and evaluate<ul><li>The auxiliary function <code>txSignedBy :: TxInfo -&gt; PubKeyHash -&gt; Bool</code> takes a <code>TxInfo</code> and a <code>PubKeyHash</code> and returns a <code>Bool</code><ul><li>In other words, is this pubkeyhash in this txinfo? yes or no</li></ul></li></ul></li></ul></li>
<li><strong>However</strong>, the actual signature is not in <code>PubKeyHash</code> on the vesting datum<ul><li>It is wrapped with the <code>PaymentPubKeyHash</code><ul><li>We need to unwrap it:<ul><li><code>info $ unPaymentPubKeyHash $ beneficiary dat</code> and pass the payment pub key hash that can be taken from the datum</li>
<li><code>unPaymentPubKeyHash</code> from the <a href="${"https://playground.plutus.iohkdev.io/doc/haddock/plutus-ledger/html/Ledger-Address.html"}" rel="${"nofollow"}">Ledger.Address</a><ul><li>it’s one of the <strong>Constructors</strong> of <code>PaymentPubKeyHash</code></li>
<li>has type signature <code>unPaymentPubKeyHash :: PubKeyHash</code></li></ul></li></ul></li></ul></li></ul></li>
<li>All of this is happening on-chain and only using the datum -&gt; <code>dat</code> and the script context <code>info</code>, not taking anything from the outside world for the redeemer</li>
<li><code>deadlineReached</code> has type <code>Bool</code><ul><li>There are auxiliary functions for the <code>POSIX time</code><ul><li><code>contains</code> extracts the deadline from the datum -&gt; <code>contains (from $ deadline dat)</code></li>
<li><code>info</code> is passed to <code>txInfoValidRange</code> from <code>txInfo</code></li>
<li>The expression <code>deadlineReached = contains (from $ deadline dat) $ txInfoValidRange info</code><ul><li>checks that the range of the <code>deadline</code> in the <code>datum</code> is <strong>contained</strong> within the ‘valid range’ (<code>txInfoValidRange</code>) taken from the script context <code>info</code><ul><li>the range of the deadline is from <code>Lower bound</code> to infinite</li></ul></li></ul></li></ul></li></ul></li></ul>
<h2 id="${"off-chain-code"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#off-chain-code"}"><span class="${"icon icon-link"}"></span></a>Off-chain code</h2>
<p>Notice how we don’t need to inject any code. In the off-chain section, we are free to use plain Haskell.</p>
<h3 id="${"give-endpoint-custom-data-type-giveparams"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#give-endpoint-custom-data-type-giveparams"}"><span class="${"icon icon-link"}"></span></a><code>give</code> endpoint custom data type <code>GiveParams</code></h3>
<ul><li>The off-chain code needs to provide the <strong>datum</strong></li>
<li>The <code>GiveParams</code> custom data type is from the <code>give</code> endpoint</li>
<li>The data <code>GiveParams</code> need to be defined<ul><li>We use bracket notation to pass the parameters:<ul><li><code>gpBeneficiary</code> that has type <code>!PaymentPubKeyHash</code></li>
<li><code>gpDeadline</code> which has type <code>!POSIXTime</code></li>
<li><code>gpAmount</code> which has type <code>!Integer</code> -&gt; The amount of the give is not in the validator</li></ul></li></ul></li></ul>
<h3 id="${"vesting-schema"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#vesting-schema"}"><span class="${"icon icon-link"}"></span></a>Vesting Schema</h3>
<ul><li>The <code>grab</code> endpoint doesn’t need a redeemer so we just pass unit</li>
<li>The <code>give</code> endpoint takes the <code>GiveParams</code></li></ul>
<h3 id="${"the-flow-of-information-in-a-eutxo-transaction"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#the-flow-of-information-in-a-eutxo-transaction"}"><span class="${"icon icon-link"}"></span></a>The flow of information in a eUTxO transaction</h3>
<ul><li>When using the <code>give</code> endpoint, we are sending a eUTxO to the contract<ul><li>Those eUTxO’s need to have datums<ul><li>In this example, this datum should include<ul><li>Who is the beneficiary</li>
<li>What is the deadline</li></ul></li></ul></li></ul></li></ul>
<h3 id="${"the-give-endpoint"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#the-give-endpoint"}"><span class="${"icon icon-link"}"></span></a>The <code>give</code> endpoint</h3>
<ul><li>The data type will include the <code>GiveParams</code></li>
<li>The function takes <code>gp</code> and uses <code>do</code> notation to<ul><li>let <code>dat</code> be a <code>VestingDatum</code> (defined above) data type<ul><li>use bracket notation to<ul><li>pull the <code>beneficiary</code> from <code>gp</code> (aka <code>GiveParams</code>) -&gt; <code>gpBeneficiary gp</code></li>
<li>pull the <code>deadline</code> from <code>gpDeadline gp</code></li></ul></li>
<li>Next we create the <code>tx</code><ul><li>In this case, we are passing the amount from <code>gp</code> the amount inside the <code>Integer</code> inside <code>gpAmount</code><ul><li><code>gpAmount gp</code> pass the value to <code>Ada.lovelaceValueOf</code></li>
<li><code>tx = Constraints.mustPayToTheScript dat $ Ada.lovelaceValueOf $ gpAmount gp</code>
datum  👆  | ----------- 👆 amount ----------- |</li></ul></li></ul></li></ul></li></ul></li></ul>
<h3 id="${"the-grab-endpoint"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#the-grab-endpoint"}"><span class="${"icon icon-link"}"></span></a>The <code>grab</code> endpoint</h3>
<ul><li>The  <code>grab</code> endpoint verifies if the right eUTxO with the right dates is passing</li>
<li><code>grab</code> uses <code>do</code> notation to<ul><li>grab <code>now</code> from <code>currentTime</code><ul><li><code>pkh</code> (pub key hash) is taken from <code>ownPaymentPubKeyHash</code><ul><li>This verifies that the wallet calling the contract is the one given the pkh.</li>
<li>This calls the contract and ask it to give the value<ul><li>The contract then validates if<ul><li>it is the pubkey of the beneficiary of the eutxo</li>
<li>is the deadline of that eutxo compliant</li></ul></li></ul></li></ul></li>
<li>Then <code>Map.filter(isSuitable pkh now) $</code> and run that function on the <code>utxosAt scrAddress</code></li>
<li>Use <code>if</code> <code>else</code> <code>then</code><ul><li><code>if</code> there are no suitable utxos, <code>then</code> logs no gifts available<ul><li><code>else</code> confirm the transaction and log a message saying the gift has been collected</li></ul></li></ul></li>
<li>Now we define the <code>isSuitable</code> function (an off-chain validator)</li>
<li>Takes the pkh, a posixtime and the chain index tx out (basically the index of the utxo)</li></ul></li></ul></li></ul>
<p>The off-chain validation can be corrupted, it is the on-chain validation that guarantees. Sort of like front end and back end validation in web development.</p>`;
});
export {
  _0022 as default,
  metadata
};
