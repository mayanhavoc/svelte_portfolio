import { c as create_ssr_component } from "./index.js";
const metadata = {
  "id": "0012",
  "title": "Sumario Cardano Sin Tecnicismos",
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
const _0012 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2 id="${"conceptos-importantes"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#conceptos-importantes"}"><span class="${"icon icon-link"}"></span></a>Conceptos importantes</h2>
<ul><li>Web 1, 2 y 3</li>
<li>El <em>tAda</em>  y el <em>testnet</em> de Cardano</li>
<li>Los exploradores de bloque de Cardano</li>
<li><em>Tokens</em> y <em>NFT</em>s</li>
<li>Prueba de Trabajo vs Prueba de Participación</li>
<li>Breve introducción al protocolo Ouroboros de Cardano</li>
<li>Billeteras ligeras vs <em>hardware wallets</em> y sus usos (billeteras calientes/frías)</li>
<li><em>Epochs</em> y <em>slots</em></li>
<li>El <em>stake</em> y el <em>staking</em>/delegaciòn</li>
<li>Los <em>stake pools</em> y los operadores de <em>stake pools</em></li>
<li>Los <em>rewards</em></li></ul>
<h2 id="${"billetera-nami"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#billetera-nami"}"><span class="${"icon icon-link"}"></span></a>Billetera Nami</h2>
<ul><li>Instalar el plugin</li>
<li>Crear una billetera</li>
<li>Mejores prácticas para salvaguardar tu frase semilla</li>
<li>Configurar la billetera Nami para usar el <em>testnet</em> de Cardano</li>
<li>Enviar tAda a tu billetera a través del grifo <em>testnet</em> de Cardano</li>
<li>Enviar tAda a otras billeteras</li></ul>
<h2 id="${"billetera-gamechanger"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#billetera-gamechanger"}"><span class="${"icon icon-link"}"></span></a>Billetera GameChanger</h2>
<ul><li>Importar una billetera utilizando la frase semilla</li>
<li>Acuñar un <em>NFT</em> usando la billetera GameChanger</li>
<li>Acuñar un <em>token</em> utilizando la billetera GameChanger</li>
<li>Importar una billetera en formato solo-lectura</li></ul>
<h2 id="${"billetera-eternl"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#billetera-eternl"}"><span class="${"icon icon-link"}"></span></a>Billetera Eternl</h2>
<ul><li>Delegar a un <em>stake pool</em></li>
<li>Delegar a múltiples <em>stake pools</em> desde una sola dirección</li>
<li>Cómo colectar los <em>rewards</em></li>
<li>Cómo buscar un <em>stake pool</em> y que criterios son importantes tomar en cuenta en el momento de delegar el <em>stake</em><ul><li>ROS</li>
<li>Saturación</li>
<li>Comisión</li>
<li>Pledge</li></ul></li>
<li>Cómo leer la información de los <em>tokens</em> y <em>NFT</em>s y buscarlos en exploradores de bloque<ul><li>PolicyID</li>
<li>Navegar la interface de Eternl<ul><li>Cuenta</li>
<li>Transacciones</li>
<li>Enviar</li>
<li>Recibir</li>
<li>Staking</li>
<li>Configuración</li></ul></li></ul></li></ul>
<h3 id="${"el-modelo-eutxo-de-cardano"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#el-modelo-eutxo-de-cardano"}"><span class="${"icon icon-link"}"></span></a>El modelo eUTxO de Cardano**</h3>
<p>Una de las más importantes innovaciones de Cardano es el uso del modelo UTxO extendido o <strong>eUTxO</strong>.</p>
<p>Las blockchains usan las transacciones como registros para rastrear procedencia y propiedad (de la misma manera que actualmente se ingresan transacciones en un libro contable). Estas transacciones contienen <strong>información</strong> como la procedencia de las monedas, su destino y el cambio.</p>
<h3 id="${"el-modelo-utxo"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#el-modelo-utxo"}"><span class="${"icon icon-link"}"></span></a>El modelo UTxO**</h3>
<p>En el modelo UTxO (<em>Unspent Transaction Output</em> o Producto de Transacción No Gastada) registra el movimiento de transacciones de manera que <strong>cada transacción consume UTxO(s) y agrega nuevos UTxO(s)</strong>.  </p>
<p><strong>La billetera</strong> del usuario <strong>lleva la cuenta de los <em>outputs</em> no gastados</strong> asociados con la dirección de su dueño, y <strong>calcula el balance</strong>. El modelo UTxO se <strong>asemeja al comportamiento de la moneda <img src="${"https://fonts.gstatic.com/s/e/notoemoji/15.0/1fa99/72.png"}" alt="${"🪙"}"> física</strong>.  </p>
<p><strong>¿Cómo se asemeja a la moneda física?</strong><br>
Cuando pago algo que vale 25 con un billete de 50 <img src="${"https://fonts.gstatic.com/s/e/notoemoji/15.0/1f4b5/72.png"}" alt="${"💵"}">, no puedo partir el billete a la mitad y pretender que la otra persona lo acepte como pago.  </p>
<p>Ese billete será “consumido” y en vez de él se crearán <strong>cuatro</strong> <em>outputs</em>:  </p>
<ul><li>Un billete de 20 de vuelta a <strong>mí</strong></li>
<li>Un billete de 5 de vuelta a <strong>mí</strong></li>
<li>Un billete de 20 como <strong>pago</strong></li>
<li>Un billete de 5 como <strong>pago</strong></li></ul>
<p>Para un total de <strong>50</strong></p>
<p>Sin entrar en detalles, este modelo ofrece numerosas ventajas sobre el tradicional modelo contable de créditos y débitos que utilizan otros protocolos como Ethereum.</p>
<h3 id="${"en-resumen"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#en-resumen"}"><span class="${"icon icon-link"}"></span></a>EN RESUMEN</h3>
<ul><li><p>Un UTxO es el <strong>producto</strong> de una transacción <strong>previa</strong> la cual puede ser gastada en el futuro.</p></li>
<li><p>Las cadenas basadas en UTxOs <strong>no tienen cuentas.</strong> En vez, las monedas - <em>coins</em> son guardadas como listas de UTxOs. Las transacciones son creadas consumiendo UTxOs y produciendo nuevas en su lugar.  </p></li>
<li><p>El <strong>balance</strong> es la suma de todos lo UTxOs controlados por una dirección</p></li></ul>
<hr>
<h3 id="${"el-modelo-de-cuentas"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#el-modelo-de-cuentas"}"><span class="${"icon icon-link"}"></span></a>El modelo de cuentas**</h3>
<p>Los blockchains que utilizan este modelo utilizan cuentas (las cuales pueden ser controladas por una llave privada o por un <em>smart contract</em>) para guardar el balance <img src="${"https://fonts.gstatic.com/s/e/notoemoji/15.0/2696_fe0f/72.png"}" alt="${"⚖️"}"> de monedas.  </p>
<p>En este modelo, los activos son representados como balances dentro de las cuentas de los usuarios y todos los balances son guardados para formar un balance global <img src="${"https://fonts.gstatic.com/s/e/notoemoji/15.0/1f30e/72.png"}" alt="${"🌎"}">  de las cuentas, almacenado en cada nodo y actualizado con cada transacción.  </p>
<p>El modelo de cuentas es el actualmente utilizado por el sistema financiero tradicional <img src="${"https://fonts.gstatic.com/s/e/notoemoji/15.0/1f3e6/72.png"}" alt="${"🏦"}">.</p>
<p>La diferencia más importante entre el modelo <strong>UTxO</strong> y el <strong>modelo de cuentas</strong> es la inhabilidad de fraccionar el balance.</p>
<hr>
<h3 id="${"el-modelo-eutxo"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#el-modelo-eutxo"}"><span class="${"icon icon-link"}"></span></a>El modelo eUTxO</h3>
<p>En el protocolo de Cardano, el concepto de <em>inputs</em> y <em>outputs</em> es importante para entender como funcionan las transacciones y como se relaciona con el modelo UTxO.  </p>
<p>En el modelo eUTxO podemos pensar en una transacción como <strong>una acción que “desbloquea” <em>outputs</em> previos y crea nuevos<br></strong></p>
<h3 id="${"eloutputde-la-transacción"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#eloutputde-la-transacción"}"><span class="${"icon icon-link"}"></span></a>El <em>output</em> de la transacción**</h3>
<p>El <strong>output de la transacción incluye</strong> una <strong>dirección</strong> (podemos pensar en ella como un candado <img src="${"https://fonts.gstatic.com/s/e/notoemoji/15.0/1f512/72.png"}" alt="${"🔒"}">) y un <strong>valor <img src="${"https://fonts.gstatic.com/s/e/notoemoji/15.0/1f4b0/72.png"}" alt="${"💰"}"></strong> . Siguiendo esta analogía, la <strong>firma <img src="${"https://fonts.gstatic.com/s/e/notoemoji/15.0/270d_fe0f/72.png"}" alt="${"✍️"}"></strong>  que pertence a esta dirección es la <strong>llave <img src="${"https://fonts.gstatic.com/s/e/notoemoji/15.0/1f511/72.png"}" alt="${"🔑"}"></strong>  que desbloquea el <strong>output.</strong></p>
<p>Una vez desbloqueado ese <strong>output,</strong> puede ser <em>consumido</em> como <strong>input</strong> en una nueva transacción.  </p>
<p>De esa manera, transacciones nuevas consumen <strong>outputs</strong> de transacciones previas y producen nuevos outputs para ser consumidos en futuras transacciones.  </p>
<p>Como hablamos anteriormente, cada UTxO puede ser gastado únicamente una vez y en su totalidad (no puede ser fragmentado). Cada output puede ser gastado por un solo input.</p>
<h3 id="${"elinputde-la-transacción"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#elinputde-la-transacción"}"><span class="${"icon icon-link"}"></span></a>El <em>input</em> de la transacción**</h3>
<p>El <strong>input</strong> de una transacción en Cardano <strong>es el output de una previa transacción</strong>.  </p>
<p>Los inputs de transacciones incluyen: un puntero → y una <strong>firma encriptada</strong> <img src="${"https://fonts.gstatic.com/s/e/notoemoji/15.0/270d_fe0f/72.png"}" alt="${"✍️"}"> <img src="${"https://fonts.gstatic.com/s/e/notoemoji/15.0/1f441/72.png"}" alt="${"👁"}"> que actúa como la <strong>llave</strong> <img src="${"https://fonts.gstatic.com/s/e/notoemoji/15.0/1f511/72.png"}" alt="${"🔑"}"> para abrir el <strong>candado</strong> <img src="${"https://fonts.gstatic.com/s/e/notoemoji/15.0/1f512/72.png"}" alt="${"🔒"}"> (que dijimos era la <strong>dirección</strong>).</p>
<p>El puntero → del <strong>input</strong> indica el <strong>output de la transacción anterior</strong> y la llave abre el candado. Cuando un <strong>output</strong> es desbloqueado por un <strong>input</strong> la blockchain lo marca como “gastado”.</p>
<p>Los nuevos <strong>outputs</strong> generados apuntarán a nuevos inputs, etc.</p>
<h3 id="${"y-la-e"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#y-la-e"}"><span class="${"icon icon-link"}"></span></a>¿Y la “e”?</h3>
<p>La “e” se refiere al término <em>extended</em> o extendido. Esto alude al hecho que, a diferencia del modelo UTxO de Bitcoin, el modelo de Cardano (eUTxO) cuenta con capacidad de programabilidad completa o <em>Turing complete</em>. En términos generales indica un sistema con la capacidad de razonar sobre data y encontrar soluciones a problemas.</p>
<hr>
<h2 id="${"manos-a-la-obra"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#manos-a-la-obra"}"><span class="${"icon icon-link"}"></span></a>Manos a la obra</h2>
<h3 id="${"el-tx-builder-de-cardano"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#el-tx-builder-de-cardano"}"><span class="${"icon icon-link"}"></span></a>El <em>Tx Builder</em> de Cardano</h3>
<p>El <em>TxBuilder</em> nos permite agregar múltiples <em>outputs</em> a una transacción y escoger que utxos gastar, también incluye soporte para metadata.</p>
<p>La metadata es data sobre data. De esta manera podemos agregar informacion textual a nuestras transacciones ( de la misma manera en que llenaríamos la línea de referencia en un cheque).</p>
<h3 id="${"inputs"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#inputs"}"><span class="${"icon icon-link"}"></span></a>Inputs</h3>
<p>Aquí seleccionamos los UTxOs que vamos a incluir en nuestra transacción.</p>
<ul><li>Los UTxOs que escojamos deben cubrir/incluir<ul><li>El costo de la transacción</li>
<li>El valor de Ada que deseamos enviar</li>
<li>Los <em>tokens/NFTs</em> que deseemos enviar</li></ul></li></ul>
<p>Regresando a la analogía, si los UTxOs fueran billetes escogeríamos los billetes que cubrieran, como mínimo el monto adeudado.</p>
<h3 id="${"outputs"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#outputs"}"><span class="${"icon icon-link"}"></span></a>Outputs</h3>
<p>La interface para escoger los <em>outputs</em> es mucho más familiar y fácil de usar.</p>
<ol><li>Determinar la dirección a enviar el Ada</li>
<li>Determinar la cantidad de fondos que se desea enviar (recordar que hay un mínimo de 1 Ada por transacción y debe cubrir la comisión en caso sea mayor a 1 Ada)</li>
<li>Agregar los <em>tokens</em> y <em>NFTs</em> que se desea enviar</li>
<li>Construir la transacción</li></ol>
<p><strong>Collect UTxOs</strong> - esta función sirve para ordenar tu billetera. En vez de tener múltiples UTxOs de outputs, el <em>TxBuilder</em> construye la transacción de manera que se consolide en uno solo. Esto te permite tener tu billetera bien organizada.</p>
<p><strong>Token Fragmentation</strong> - tener muchos <em>tokens</em> y <em>NFT</em>s en un solo UTxO se vuelve convertir en un limitante y eventualmente te impida enviar transacciones porque tu UTxO sobrepasar el limite de capacidad activos que se pueden enviar.</p>
<p><strong>Advanced UTxO Management</strong> - Eternl se ocupa del manejo de tus UTxOs. Esto quiere decir que crea más outputs o divide outputs muy grandes, por ejemplo. Esto hace más fácil la paralelización de transacciones más adelante.</p>`;
});
export {
  _0012 as default,
  metadata
};
