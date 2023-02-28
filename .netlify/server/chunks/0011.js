import { c as create_ssr_component } from "./index.js";
const metadata = {
  "id": "0011",
  "title": "Delegación, SPOs, tokens y NFTs",
  "date": "2022-09-29",
  "categories": ["Cardano", "Teaching", "Español", "Cardano sin tecnicismos"],
  "sources": [
    "https://docs.google.com/presentation/d/1MIxWSkRin9jYYIEJiH1z26rDHoDermQsQ7d4-lJ5K00/edit#slide=id.p",
    "https://medium.com/coinmonks/indepth-overview-of-cardano-85845b6bf829",
    "https://www.stakingrewards.com/earn/cardano/",
    "https://cardano.org/stake-pool-operation#what-is-staking",
    "https://www.youtube.com/watch?v=Ultfv_OCS1M",
    "https://www.figment.io/resources/cardano-ada-tokenomics",
    "https://medium.com/coinmonks/indepth-overview-of-cardano-85845b6bf829",
    "https://cardano.org/stake-pool-operation#what-is-staking"
  ]
};
const _0011 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2 id="${"conceptos"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#conceptos"}"><span class="${"icon icon-link"}"></span></a>Conceptos</h2>
<h3 id="${"por-qué-delegar"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#por-qué-delegar"}"><span class="${"icon icon-link"}"></span></a>¿Por qué delegar?</h3>
<p>En cualquier red decentralizada segura, los nodos (computadoras) están conectados unos a otros formando una red y necesitan estar en constante comunicación para llegar a consenso.</p>
<p>En el caso del protocolo de prueba de participación, la delegación resuelve dos problemas cruciales:</p>
<h4 id="${"decentralización"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#decentralización"}"><span class="${"icon icon-link"}"></span></a>Decentralización</h4>
<p>Para que esta red de nodos (computadoras) formen una red estable, debe tener redundancia.
Esto quiere decir que, no importando cuántos o en que momento salgan o entren nodos a la red, la comunicación debe mantenerse ininterrumpida. Mientras más grande sea el número de nodos activamente participando en la red, más robusta será.</p>
<p>El monto de Ada delegado a un <em>stake pool</em> es la principal manera en que el protocolo Ouroboros decide a que <em>pool</em> agregará el siguiente bloque y recibir una recompensa monetaria por ello. Estas recompensas son compartidas con todos los que han delegado su <em>stake</em> allí.</p>
<p>Entonces, al delegar a un <em>stake pool</em>, aumentamos la posibilidad que se le asigne un bloque y por lo tanto su rentabilidad.</p>
<p>La delegación es un incentivo, si todos delegamos al mismo <em>stake pool</em>, entonces se centralizará el poder de voto y tendríamos un sistema similar al que tenemos actualmente.</p>
<h4 id="${"compensar-por-inflación"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#compensar-por-inflación"}"><span class="${"icon icon-link"}"></span></a>Compensar por inflación</h4>
<ul><li>Expansión monetaria a 0.3% por época<sub>1</sub> o <em>Epoch</em></li>
<li>No hay <em>unbounding period</em><sub>2</sub></li>
<li>Total de tokens en circulación - 33.5 billones</li>
<li>Suministro máximo de Ada - 45 billones</li>
<li>Tasa estimada de retorno anual - 5% a 6%</li></ul>
<small><sup>1</sup>Una época consiste de 432,000 *slots* (5 días). En promedio, se espera que un bloque sea nominado para su producción cada 20 segundos, para un total de 21,600 nominaciones por época.</small>
<small><sup>2</sup> &#39;Unbounding period&#39; se refiere al período de tiempo durante el cual el stake queda bloqueado antes de recibir recompensas</small>
<p>A pesar que Cardano fue lanzado en 2017, no fue hasta después del <em>Shelley hard fork</em> que las recompensas de <em>staking</em> empezaron a ser fondeadas por la reserva<sub>3</sub>. La tasa de reducción de esta reserva - referida como expansión monetaria - actualmente busca una tasa de reducción del 0.3% por época (5 días).</p>
<small><sup>3</sup> La reserva se refiere a el 24.4% (equivalente a ₳11.0 B) que no fue incluída en el ICO con el fin de ser distribuidas con el tiempo</small>
<p>![[Pasted image 20221124102828.png]]</p>
<small>Img 1. Distribución inicial de Ada</small>
<p>![[Pasted image 20221124102932.png]]</p>
<small>Img 2. Distribución de Ada actual</small>
<p>![[Pasted image 20221124103015.png]]</p>
<small>Img 3. Expansión monetaria y Tesorería</small>
<p>Esta tasa de reducción da un período de 4 a 5 años para reducir la reserva en un 50%.</p>
<p>Si tomamos en cuenta esta “tasa de inflación del 0.3%” y la variabilidad en el ROS del <em>stake pool</em> (el retorno por <em>stake pool</em> varía, pero en promedio va a estar alrededor del 4%), podemos ver como diversificar nuestra alocación del stake nos puede ayudar a compensar por esa reducción en valor.</p>
<p>Por último…</p>
<h4 id="${"recompensas"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#recompensas"}"><span class="${"icon icon-link"}"></span></a>Recompensas</h4>
<p>Hay dos maneras de obtener recompensas en la red Cardano, delegando Ada a un <em>stake pool</em> u operar un <em>stake pool</em>.</p>
<hr>
<h3 id="${"sobre-los-stake-pools"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#sobre-los-stake-pools"}"><span class="${"icon icon-link"}"></span></a>Sobre los <em>stake pools</em></h3>
<h4 id="${"el-pledge"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#el-pledge"}"><span class="${"icon icon-link"}"></span></a>El <em>pledge</em></h4>
<p>No es obligatorio. Los <em>stake pools</em> eligen hacer un <em>pledge</em> para atraer más delegación. Esto es porque mientras más grande sea el <em>pledge</em>, mayores las recompensas<sub>4</sub>.</p>
<small><sup>4</sup> El parametro a0 del protocolo define la influencia del *pledge* en la recompensa del *pool*</small>
<h4 id="${"el-parámetro-de-saturación-k"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#el-parámetro-de-saturación-k"}"><span class="${"icon icon-link"}"></span></a>El parámetro de saturación <em>K</em></h4>
<p>Hablamos brevemente de esto en el taller anterior. Saturación es un término utilizado para indicar que alguna <em>stake pool</em> tiene más <em>stake</em> delegado del ideal para la red según el parámetro <em>K</em> que indica el número de <em>stake pools</em> deseado. Una vez un <em>pool</em> llega a su punto de saturación, sus recompensas empezarán a disminuir.</p>
<p>El mecanismo de saturación fue diseñado para prevenir centralización.</p>
<h4 id="${"ejemplos"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#ejemplos"}"><span class="${"icon icon-link"}"></span></a>Ejemplos</h4>
<p><a href="${"https://www.youtube.com/watch?v=wF0adviOgSs"}" rel="${"nofollow"}">Woodland pools</a>
<a href="${"https://gimbalabs.com/"}" rel="${"nofollow"}">Gimbalabs</a>
<a href="${"https://www.cardanistas.io/"}" rel="${"nofollow"}">Cardanistas</a>
<a href="${"https://riverpool-crypto.com/"}" rel="${"nofollow"}">River pool</a></p>
<h4 id="${"stake-pools-hispanos"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#stake-pools-hispanos"}"><span class="${"icon icon-link"}"></span></a>Stake pools hispanos</h4>
<p>Listado de stake pools hispanos y latinoamericanos
<a href="${"https://adafolio.com/portfolio/c6834582-199c-11eb-903e-0242ac140002"}" rel="${"nofollow"}">Cardano Hispano - Latino</a>
<a href="${"https://twitter.com/i/lists/1590477228155944960?s=20"}" rel="${"nofollow"}">Lista de pools en Twitter</a></p>
<h5 id="${"stake-pools-hispanos-cercanos-a-nuestro-corazón-️"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#stake-pools-hispanos-cercanos-a-nuestro-corazón-️"}"><span class="${"icon icon-link"}"></span></a>Stake pools hispanos cercanos a nuestro corazón ❤️</h5>
<table><thead><tr><th>Nombre</th>
<th>Ticker</th>
<th>Twittter</th>
<th>Pagina web</th></tr></thead>
<tbody><tr><td>Chile Stake Po’</td>
<td>CHIL</td>
<td>@ChileStakepo</td>
<td><a href="${"https://chilestakepo.cl/wp/"}" rel="${"nofollow"}">Chile Stake Po’</a></td></tr>
<tr><td>Latino Staking Pool</td>
<td>LATIN</td>
<td>@LATINOPool</td>
<td><a href="${"https://cardanolatino.com/cardanoespa%C3%B1ol/Latino-Staking-Pool/"}" rel="${"nofollow"}">Latino Staking Pool</a></td></tr></tbody></table>
<hr>
<h2 id="${"instrucciones"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#instrucciones"}"><span class="${"icon icon-link"}"></span></a>Instrucciones</h2>
<h3 id="${"cuenta--account---nami--preprod--cardano-"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#cuenta--account---nami--preprod--cardano-"}"><span class="${"icon icon-link"}"></span></a>Cuenta | <em>Account</em> -&gt; Nami [ preProd | cardano ]</h3>
<ul><li>Balance + rewards = Fondos<ul><li>👁 Total disponible vs total bloqueado (¿comprometido?) 👁</li>
<li>El valor bloqueado es el valor implicito del token (el token tiene un costo implicito que es su costo de transacción)</li></ul></li></ul>
<h3 id="${"staking---nami--preprod--cardano-"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#staking---nami--preprod--cardano-"}"><span class="${"icon icon-link"}"></span></a><em>Staking</em> -&gt; Nami [ preProd | cardano ]</h3>
<ul><li><p>Rewards</p>
<ul><li>Reward history</li></ul></li>
<li><p>Cambiar la delegación</p>
<ul><li>Staking &gt; escoger <em>pool</em> &gt; <em>Delegate</em> &gt; Confirmar</li>
<li>Delegar a más de un pool desde una sola billetera</li></ul></li>
<li><p>Transacciones</p>
<ul><li>Balance de la cuenta</li>
<li>Depósito (evitar ataques <em>Nothing at stake</em>)</li>
<li>Fee (costo de la transacción)</li>
<li>Dirección de pago vs. dirección de <em>stake</em> &gt; <strong>Eternl’s Franken Address Generator</strong><ul><li>“Una dirección ‘base’ de Cardano consiste de dos partes:<ul><li>Una parte de pago que controla quien puedes gastar los fondos de la dirección y</li>
<li>una parte de <em>stake</em> que controla a cuál <em>stake pool</em> se están delegando los fondos (si es que se están delegando).”</li></ul></li>
<li>El Franken Address Generator combina la parte de pago de una dirección con la parte de <em>stake</em> de otra.  </li></ul></li></ul></li></ul>
<h3 id="${"tokens-y-nfts-en-eternl---eternl--mainnet--micochango-"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#tokens-y-nfts-en-eternl---eternl--mainnet--micochango-"}"><span class="${"icon icon-link"}"></span></a><em>Tokens</em> y <em>NFT</em>s en Eternl -&gt; Eternl [ mainnet | micochango ]</h3>
<ul><li>Token list<ul><li><em>Tokens</em> y <em>NFT</em>s<ul><li>Especificaciones<ul><li>Policy ID: Un <em>Policy ID</em> identifica la política de acuñamiento del <em>token</em>.</li></ul></li>
<li><em>NFT</em>s y Eternl <a href="${"https://www.jpg.store/asset/123da5e4ef337161779c6729d2acd765f7a33a833b2a21a063ef65a55369636b43697479333437"}" rel="${"nofollow"}">NFT - Lucas - jpg.store</a></li></ul></li></ul></li></ul>
<p>Un paréntesis…</p>
<hr>
<h4 id="${"qué-es-una-política-de-acuñamiento-o-minting-policy"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#qué-es-una-política-de-acuñamiento-o-minting-policy"}"><span class="${"icon icon-link"}"></span></a>¿Qué es una Política de acuñamiento o <em>Minting policy</em>?</h4>
<p>Un set de reglas que gobiernan el acuñamiento y la quema de activos dentro del alcance de dicha política. Especifica las condiciones dentro de las cuales se pueden crear/destruir.</p>
<p>Por ejemplo, puedo especificar quien tiene control sobre el suministro del activo a través de su acuñamiento y quema/destrucción.</p>
<p>Las políticas de acuñamiento son definidas por el creador del <em>token</em> y/o <em>NFT</em>.</p>
<p>Por ejemplo, el creador del NFT puede requerir que únicamente ella esté autorizada a crear/acuñar un <em>token</em>.</p>
<hr>
<p>Demo - revisar un Policy ID en un explorador de bloque
<a href="${"https://cardanoscan.io/tokenPolicy/d436d9f6b754582f798fe33f4bed12133d47493f78b944b9cc55fd18"}" rel="${"nofollow"}">Cardano Summit NFT - Policy ID</a></p>
<p>Demo - comprar un <em>NFT</em> en el mainnet
<a href="${"https://www.jpg.store/collection/hoskycashgrab"}" rel="${"nofollow"}">HOSKY C(ash grab)NFT</a></p>`;
});
export {
  _0011 as default,
  metadata
};
