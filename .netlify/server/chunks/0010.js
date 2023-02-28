import { c as create_ssr_component } from "./index.js";
const metadata = {
  "id": "0010",
  "title": "Staking, delegación, stake pools y la billetera Eternl",
  "date": "2022-09-29",
  "categories": ["Cardano", "Teaching", "Español", "Cardano sin tecnicismos"]
};
const _0010 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2 id="${"que-es-una-billetera-ligera"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#que-es-una-billetera-ligera"}"><span class="${"icon icon-link"}"></span></a>¿Que es una billetera ligera?**</h2>
<h3 id="${"extensionesmobile-apps"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#extensionesmobile-apps"}"><span class="${"icon icon-link"}"></span></a>Extensiones/mobile apps</h3>
<ul><li>Instalar</li></ul>
<h2 id="${"interface"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#interface"}"><span class="${"icon icon-link"}"></span></a>Interface</h2>
<h3 id="${"inicio"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#inicio"}"><span class="${"icon icon-link"}"></span></a>Inicio</h3>
<ul><li>Información del Epoch</li>
<li>Mainnet/Testnet</li>
<li>Anuncios</li>
<li>FAQ</li>
<li>Preferencias</li></ul>
<h3 id="${"agregar-billetera"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#agregar-billetera"}"><span class="${"icon icon-link"}"></span></a>Agregar billetera</h3>
<h3 id="${"crear-billetera-qué-es-una-billetera-caliente"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#crear-billetera-qué-es-una-billetera-caliente"}"><span class="${"icon icon-link"}"></span></a>Crear billetera (¿Qué es una billetera caliente?)</h3>
<ul><li>Una billetera caliente es aquella en donde sus llaves privadas están en el dispositivo en donde esta la billetera</li>
<li>Respaldo en caso le suceda algo al dispositivo</li>
<li>Contraseña robusta</li>
<li>Recomendación: Billetera hardware</li>
<li>Frase semilla</li>
<li><strong>Ir a manejo de billetera (Restaurar billetera va después)</strong></li></ul>
<h3 id="${"frase-semilla---sebastian-de-individuo-digital"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#frase-semilla---sebastian-de-individuo-digital"}"><span class="${"icon icon-link"}"></span></a>Frase semilla - Sebastian de Individuo Digital</h3>
<ol><li>Resguardar de</li></ol>
<ul><li>Fuego</li>
<li>Agua</li>
<li>Paso del tiempo</li>
<li>Ojos ajenos</li>
<li>Emparejar con hardware ledger<ul><li>Nano S o X</li>
<li>Trezor</li>
<li><a href="${"https://www.youtube.com/watch?v=IGP4RX-DnNQ"}" rel="${"nofollow"}">Conecta al puerto USB y exportamos llave publica</a></li></ul></li></ul>
<h3 id="${"manejo-billetera"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#manejo-billetera"}"><span class="${"icon icon-link"}"></span></a>Manejo billetera</h3>
<h4 id="${"manejo-billetera-sumario"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#manejo-billetera-sumario"}"><span class="${"icon icon-link"}"></span></a>Manejo billetera (Sumario)</h4>
<ul><li><p>Privacidad</p></li>
<li><p>Sincronización</p></li>
<li><p>Resumen</p>
<ul><li>Balance</li>
<li>Ada + rewards</li></ul></li>
<li><p>dApp connector</p>
<ul><li>e.g., para Dex</li></ul></li>
<li><p>Retirar recompensas</p>
<ul><li>No es necesario si no necesitan mover todos los fondos, evitar comisiones</li>
<li>Resumen grafico de recompensas</li></ul></li>
<li><p>Delegación</p>
<ul><li>Época</li>
<li>Pool</li>
<li>Saturation</li>
<li>Pledge</li>
<li>Comisiones</li>
<li>ROS</li></ul></li></ul>
<h4 id="${"manejo-billetera-tokens"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#manejo-billetera-tokens"}"><span class="${"icon icon-link"}"></span></a>Manejo billetera (Tokens)</h4>
<ul><li>Tokens de billetera</li>
<li>PolicyID</li></ul>
<h4 id="${"manejo-billetera-utxo"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#manejo-billetera-utxo"}"><span class="${"icon icon-link"}"></span></a>Manejo billetera (UTxO)</h4>
<ul><li>Resumen de outputs de direccional</li></ul>
<h4 id="${"lista-de-cuentas"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#lista-de-cuentas"}"><span class="${"icon icon-link"}"></span></a>Lista de cuentas</h4>
<ul><li>Delegar a multiples pools desde una sola billetera</li></ul>
<h4 id="${"transacciones"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#transacciones"}"><span class="${"icon icon-link"}"></span></a>Transacciones</h4>
<p><em>Inputs, outputs e ID de transacción</em> - útil para seguimiento</p>
<h4 id="${"envío"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#envío"}"><span class="${"icon icon-link"}"></span></a>Envío</h4>
<ul><li>Facilidad de uso</li></ul>
<h4 id="${"recibir"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#recibir"}"><span class="${"icon icon-link"}"></span></a>Recibir</h4>
<ul><li>Direcciones disponibles</li></ul>
<h4 id="${"staking"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#staking"}"><span class="${"icon icon-link"}"></span></a>Staking</h4>
<ul><li>Pools</li>
<li>Delegación</li>
<li>Información básica<ul><li>Saturacion</li>
<li>Pledge</li>
<li>Comision</li>
<li>Retorno</li></ul></li>
<li>Links<ul><li>Cardanoscan</li>
<li>Social media</li></ul></li></ul>
<h3 id="${"votacion"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#votacion"}"><span class="${"icon icon-link"}"></span></a>Votacion</h3>
<ul><li>Sistema de gobernanza de Cardano</li></ul>
<h3 id="${"configuracion"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#configuracion"}"><span class="${"icon icon-link"}"></span></a>Configuracion</h3>
<ul><li>Nombre de billetera</li>
<li>Grupos de billeteras - util para categorizar billeteras (i.e. Dex, testnet, ledger, etc)</li>
<li>Contraseña de acceso a billetera (diferente a contraseña de firma) - capa extra de proteccion</li>
<li>Icono</li>
<li>Directorio de direcciones - facilita acceso a direccion</li>
<li>Colateral - fondo de la billetera que queda disponible para contratos inteligentes (5 Adas), normalmente lo piden los Dex’s - todas las txs tienen que tener un costo por el problema de <em>Nothing at stake</em></li>
<li>Single address mode<ul><li>Una billetera con una direccion -&gt; sirve para interactuar con otras billeteras como Nami</li>
<li>Fragmentación de tokens<ul><li>Para que los tokens nativos puedan dividirse correctamente como output del UTxO</li></ul></li></ul></li>
<li>Auto-retiro de recompensas</li>
<li>Envio todo<ul><li>Dejar apagado por seguridad</li></ul></li>
<li>Resincronizar billetera</li>
<li>Borrar o <em>un-stake</em></li></ul>`;
});
export {
  _0010 as default,
  metadata
};
