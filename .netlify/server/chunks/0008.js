import { c as create_ssr_component } from "./index.js";
const metadata = {
  "id": "0008",
  "title": "Conceptos básico de blockchain 2",
  "date": "2022-09-29",
  "categories": ["Cardano", "Teaching", "Español", "Cardano sin tecnicismos"],
  "sources": [
    "https://www.essentialcardano.io/faq/what-is-a-blockchain",
    "https://en.wikipedia.org/wiki/Cryptocurrency",
    "https://www.essentialcardano.io/faq/what-is-proof-of-stake-pos",
    "https://forum.cardano.org/t/staking-and-delegating-for-beginners-a-step-by-step-guide/36681",
    "https://forum.cardano.org/t/choosing-a-stake-pool-and-delegating-your-ada/38931"
  ]
};
const _0008 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2 id="${"qué-es-un-blockchain"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#qué-es-un-blockchain"}"><span class="${"icon icon-link"}"></span></a>¿Qué es un <em>blockchain</em>?</h2>
<p>Una pista a su significado es que también es conocido como <em>distributed ledger</em> que se traduce a ‘registro distribuido’ (libro mayor distribuido para ser más precisos). En otras palabras, es una base de datos distribuida.  </p>
<p>En un <em>blockchain</em>, nodos (computadoras de usuarios como tú conectados a la red) verifican la validez de una determinada transacción por medio de un mecanismo de consenso (por eso les llaman <em>consensus protocols</em> o protocolos de consenso).</p>
<p>Las transacciones validadas por los nodos son agrupadas y guardadas en bloques (de allí la palabra <em>blockchain</em> que se traduce a cadena de bloques) que luego son agregados a la cadena en períodos de tiempo llamados ‘ranuras’ (o <em>slots</em> en inglés).</p>
<p>Una vez los nodos validan un bloque, se convierte en permanente, inmutable y visible a todos. Estas características le dan transparencia al sistema y confianza entre los usuarios.</p>
<p>Las ventajas de un sistema decentralizado son:</p>
<table><thead><tr><th>Decentralizado</th>
<th>Centralizado (Tradicional)</th></tr></thead>
<tbody><tr><td>Tú tienes control de tus fondos</td>
<td>Una entidad o institución (generalmente un banco) controla tus fondos y actividad financiera.</td></tr>
<tr><td>Eres anónimo</td>
<td>Tu banco sabe quien eres y si vas a otro banco van a requerir que te identifiques</td></tr>
<tr><td>Más seguro</td>
<td>Una base de datos centralizada significa un solo punto de ataque. Esto hace a los sistemas centralizados inherentemente inseguros en comparación con un sistema decentralizado</td></tr>
<tr><td>Redundancia</td>
<td>El argumento anterior aplica. Una caída de los servidores (como la que dejo a billones de personas sin acceso a Facebook, Instagram, Whatsapp, etc) puede significar enormes pérdidas</td></tr>
<tr><td>Costo de operaciones accesible y disponible globalmenete</td>
<td>Tarifas altas, procesos complejos para enviar fondos entre países y las transacciones requiren la aprobación de entidades centralizadas</td></tr></tbody></table>
<p>*es importante entender que cuando usamos conceptos como ‘bloques’ no nos referimos  a un concepto físico pero a la estructura de la data - la data incluída en las transacciones - que va a ser ingresada en el registro</p>
<p>Este artículo es una traducción al espańol del artículo <a href="${"https://www.essentialcardano.io/faq/what-is-a-blockchain"}" rel="${"nofollow"}">What is a blockchain? - olga.hryniuk@iohk.io</a></p>
<hr>
<h2 id="${"qué-es-una-criptomoneda"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#qué-es-una-criptomoneda"}"><span class="${"icon icon-link"}"></span></a>¿Qué es una criptomoneda?</h2>
<p>Una criptomoneda es un activo digital diseñado para ser el medio de intercambio por bienes y servicios (exactamente como la moneda actual) en una red decentralizada de computadoras. Se le suele llamar ‘cripto’.</p>
<p>Por medio de criptografía y el mecanismo de consenso, una red decentralizada puede verificar transacciones, eliminando la necesidad de intermediarios como bancos para la transferencia de fondos entre dos entidades.</p>
<hr>
<h2 id="${"qué-es-un-mecanismo-de-consenso"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#qué-es-un-mecanismo-de-consenso"}"><span class="${"icon icon-link"}"></span></a>¿Qué es un mecanismo de consenso?</h2>
<p>Un mecanismo de consenso es un mecanismo a prueba de fallos* utilizado tanto en sistemas de cómputo como blockchain para llegar a un acuerdo en un punto de data o un estado de la red.</p>
<p>En un sistema basado en blockchain, el algoritmo de consenso controla los parámetros que gobiernan la red. Puedes pensar en el mecanismo de consenso como la Constitución de tu protocolo (o red), establece las reglas básicas a las que todos los participantes de la red deben adherirse y en particular el proceso a través del cual se llega a una decisión por mayoría.</p>
<p>![[Pasted image 20221108120538.png]]</p>
<p>Las decisiones que los participantes de la red deben tomar son decidir que bloque se valida, que cadena de bloques se adopta y determinar el estado de la red en cualquier momento. </p>
<p>*Los fallos más usuales en sistemas de bases de datos decentralizadas son el problema del consumo doble, el ataque del 51%  y lo que se denomina el problema de los generales bizantinos.</p>
<h3 id="${"qué-es-el-protocolo-de-prueba-de-participación-o-proof-of-stake"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#qué-es-el-protocolo-de-prueba-de-participación-o-proof-of-stake"}"><span class="${"icon icon-link"}"></span></a>¿Qué es el protocolo de Prueba de Participación o <em>Proof of Stake</em>?</h3>
<p>En los protocolos de Prueba de Participación o <em>Proof of Stake</em>, son los operadores de <em>stake pools</em> los que validan transacciones. Los <em>slot leaders</em> (el <em>slot leader</em> es el operador de <em>stake pool</em> electo para validar transacciones) son seleccionados en base a su participación en la red (la cantidad de Ada que les ha sido delegado).</p>
<p>Las ventajas de un protocolo basado en prueba de participación (en comparación con un protocolo basado en Prueba de Trabajo) son:</p>
<ul><li>Protocolos de seguridad rigurosos incorporados al protocolo PoS (<em>Proof of Stake</em>)</li>
<li>Reducción de centralización - el riesgo de centralización se reduce por medio de parámetros del protocolo diseñados para eliminar la acumulación de poder</li>
<li>Eficiencia energética - La cantidad de energía asi como <em>hardware</em> que se requiere para correr el <em>blockchain</em> son significativamente menores.</li>
<li>Costo-eficiencia - Los protocolos de Prueba de Participación son más costo eficientes que los protocolos basados en Prueba de Trabajo.</li></ul>
<h4 id="${"qué-es-un-stake-pool"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#qué-es-un-stake-pool"}"><span class="${"icon icon-link"}"></span></a>¿Qué es un <em>stake pool</em>?</h4>
<p>Un <em>stake pool</em> es un nodo estable (un computador capaz de correr el nodo de cardano con conexión al internet estable y sin interrupción). Estos nodos se enfocan en el mantenimiento de la red y guardan la participación combinada de varios participantes de la red que no necesariamente desean operar un nodo.</p>
<p>Los operadores de <em>stake pools</em> son responsables de procesar nuevas transacciones y producir nuevos bloques para el <em>blockchain</em>.</p>
<h4 id="${"el-staking-y-la-delegación"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#el-staking-y-la-delegación"}"><span class="${"icon icon-link"}"></span></a>El <em>staking</em> y la delegación</h4>
<p>Tu <em>stake</em> es tu participación en la red (representada en la cantidad de Ada de la que eres dueño). El hecho de tener Ada (otra opción sería vender tu Ada por otra criptomoneda o por moneda FIAT l cual resta liquidez y reduce el valor) fortalece la red y ayuda a su manutención.</p>
<p>Si tienes la capacidad técnica puedes incluso crear tu propio <em>stake pool</em> y correrlo para ayudar a verificar transacciones, crear bloques y obtener una recompensa.</p>
<p>Sin embargo, muchas personas interesadas en utilizar la red de Cardano no les interesa correr un nodo. Esto no quiere decir que no puedes participar de las recompensas que generan los <em>stake pools</em>.</p>
<p>Al delegar tu Ada a un <em>stake pool</em>, compartes de sus recompensas. Cabe notar que únicamente se <strong>delega</strong> la participación, esto quiere decir que tu Ada nunca deja tu billetera y eres libre de gastar tus fondos aún estando delegados a un <em>stake pool</em>.</p>
<p>Fuentes
<a href="${"https://www.essentialcardano.io/article/your-cardano-onboarding-guide"}" rel="${"nofollow"}">Your Cardano onboarding guide - Olga Hryniuk</a>
<a href="${"https://www.essentialcardano.io/faq/what-is-proof-of-stake-pos"}" rel="${"nofollow"}">What is <em>Proof-of-Stake (Pos)</em></a>
<a href="${"https://forum.cardano.org/t/staking-and-delegating-for-beginners-a-step-by-step-guide/36681"}" rel="${"nofollow"}">Staking and delegating for beginners—A step-by-step guide - @ElliotHill</a>
<a href="${"https://forum.cardano.org/t/choosing-a-stake-pool-and-delegating-your-ada/38931"}" rel="${"nofollow"}">Choosing a stake pool and delegating your Ada - @ElliotHill</a></p>`;
});
export {
  _0008 as default,
  metadata
};
