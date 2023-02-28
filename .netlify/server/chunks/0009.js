import { c as create_ssr_component } from "./index.js";
const metadata = {
  "id": "0009",
  "title": "Ouroboros, el POS de Cardano",
  "date": "2022-09-29",
  "categories": ["Cardano", "Teaching", "Español", "Cardano sin tecnicismos", "PoS"]
};
const _0009 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2 id="${"cómo-piensa-un-criptógrafo-se-empieza-por-establecer-un-objetivo"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#cómo-piensa-un-criptógrafo-se-empieza-por-establecer-un-objetivo"}"><span class="${"icon icon-link"}"></span></a>¿Cómo piensa un criptógrafo? Se empieza por establecer un objetivo</h2>
<p>Dado el objetivo, ¿Qué recursos están disponibles para las partes que van a usar el protocolo/algoritmo para lograr el objetivo?</p>
<p>Diseñar y describir un modelo de riesgo. Recursos y modelo de riesgo van de la mano. Recursos son cosas que, cuando diseñamos el algoritmo, están disponibles a las partes.</p>
<p>Un modelo de riesgo describe que puede y no puede hacer el adversario</p>
<p>Para diseñar un buen modelo de riesgo, hay que pensar en que exactamente e intentar capturar que va a pasar una vez el algoritmo/protocolo es desplegado al mundo real.</p>
<p>El algoritmo/protocolo es el código que utiliza los recursos para lograr el objetivo dado el modelo de riesgo. Esto es lo que queremos que suceda y el problema ahora es cómo demostrar que así va a ser.</p>
<p>Generalmente, este modelo requiere de suposiciones, cosas que creemos ciertas del mundo real (por ejemplo que ciertos problemas computacionales son difíciles de resolver).</p>
<p>Finalmente, tendremos una prueba de seguridad (<em>mathematical</em> <em>proof</em>) y esa prueba va a aseverar que el algoritmo cumple con los objetivos, dados los recursos y el modelo de riesgo dentro de las suposiciones del modelo. De la prueba se especifica el algoritmo/protocolo y luego implementado.</p>
<h3 id="${"cómo-se-aplica-esta-lógica-al-diseño-de-un-distributed-ledger"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#cómo-se-aplica-esta-lógica-al-diseño-de-un-distributed-ledger"}"><span class="${"icon icon-link"}"></span></a>¿Cómo se aplica esta lógica al diseño de un <em>distributed</em> <em>ledger</em>?</h3>
<p>Persistencia y vivacidad son las dos propiedades básicas de este registro distribuido. Estas dos propiedades se refieren al registro de las transacciones.</p>
<p>La persistencia es una propiedad de seguridad. Nos dice que el registro de transacciones es estable. Esto quiere decir que si se le pregunta a cualquier nodo de la red algo sobre el registro, debería ser igual y esto debe sostenerse en el tiempo, lo que quiere decir que el registro de mañana debe ser una extensión del registro de ayer.</p>
<p>Necesitamos que el registro distribuido sea poblado por transacciones emitidas por nodos que usan la red.</p>
<p>La vivacidad básicamente nos dice que nuevas transacciones están siendo agregadas con frecuencia regular.</p>
<h3 id="${"ahora-hablemos-sobre-recursos-y-el-modelo-de-riesgo"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#ahora-hablemos-sobre-recursos-y-el-modelo-de-riesgo"}"><span class="${"icon icon-link"}"></span></a>Ahora hablemos sobre recursos y el modelo de riesgo</h3>
<p>La arbitrariedad es especialmente importante desde el punto de vista criptográfico. Cada parte debe tener la capacidad de generar aleatoriedad y esta debe ser privada (no es compartida con otros nodos).</p>
<p>Cuando una parte quiera enviar un mensaje, el acceso a la red es facilitado y ese mensaje va a llegar a la otra parte de manera relativamente sincronía.</p>
<p>Para el modelo de riesgo, es importante establecer un límite superior a cuántas partes puede controlar el adversario. Dependiendo del contexto, se ajusta este limite para que encaje el tipo de diseño que queremos hacer</p>
<p>Por ejemplo, en PoW, el limite superior para el adversario es la mayoria simple del poder total de <em>hashing</em> (encriptacion) disponible a la red.</p>
<p>En el caso de PoS, nos gustaría restringir al adversario (limite superior) a la minoria del <em>stake</em> registrado.</p>
<p>En PoW, las partes se comunican entre ellas, resolviendo PoW e intercambiando bloques que van a registrar lo que ellos desean en la base de datos.</p>
<p>En el caso específico de Bitcoin, tenemos el bloque génesis, que es extendido por partes a medida que encuentran PoW. Cada bloque es una PoW y dentro de estos bloques hay <em>N</em> cantidad de transacciones.</p>
<p>En PoS sucede algo similar.</p>
<p>Tenemos una secuencia de bloques, cada una con transacciones pero producir el bloque requiere de prueba de participación o <em>proof-of-stake.</em></p>
<p>Producir un PoW requiere que las partes resuelvan una ecuación criptográfica moderadamente difícil.</p>
<p>Podemos pensar en el protocolo operando como una elección, en determinado momento, una parte es electa para producir el siguiente bloque y el siguiente bloque lo va a producir la parte que sea aleatoriamente selecta de las partes activamente participando en la red.</p>
<p>En el contexto de PoS sucede algo similar.</p>
<p>En PoS, el siguiente bloque es producido por un <em>stakeholder</em> seleccionado aleatoriamente basado en el stake que hay en el blockchain. En ambos casos hay una elección que señala a la parte electa para producir el siguiente bloque.</p>
<p>La naturaleza de la elección, sin embargo, es diferente.</p>
<p>En el caso específico de Bitcoin para PoW y Ouroboros para PoS, tenemos una elección basada en un protocolo criptográfico que crea aleatoriedad y lo guarda en el blockchain.</p>
<p>En ambos casos, la lógica es similar, un proceso electoral que faculta a una de las partes a producir el siguiente bloque.</p>
<p>Esta es la idea central que tipifica como funciona un protocolo blockchain.</p>
<p>Sin embargo, las suposiciones son diferentes con respecto al bloque Génesis…</p>
<h3 id="${"cómo-argumentamos-que-un-protocolo-es-seguro"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#cómo-argumentamos-que-un-protocolo-es-seguro"}"><span class="${"icon icon-link"}"></span></a>¿Cómo argumentamos que un protocolo es seguro?</h3>
<p>En el caso de Bitcoin, la lógica es que en la operación del blockchain coexisten múltiples blockchain. La razón de esto es simplemente que las partes no están coordinadas y no actúan al mismo tiempo, así que <em>forks</em> o bifurcaciones en la cadena son normales. La misma situación sucede en PoS.</p>
<p>En términos de resolver estas bifurcaciones, ambos protocolos siguen la lógica de la cadena más larga. Sin embargo, la definición de ‘más larga’ es levemente diferente entre los dos.</p>
<p>En términos simples, el PoW seguirá la cadena que tiene la mayor dificultad (o más bloques si la dificultad es fija) y en PoS seguirá la mayor cantidad de <em>stake</em> o bloques.</p>
<p>Lo que sucede con PoW es que porque producir un bloque es una tarea relativamente difícil, van a haber momentos en que un bloque es producido por una sola parte, esto es llamado una ‘ronda excepcionalmente exitosa’ o <em>uniquely successful round</em> que es básicamente un periodo de tiempo donde solamente una parte es exitosa.</p>
<p>Algo particular sucede con esas rondas. Si vemos la ejecución del protocolo, lo que sucede es que si tal ronda sucede, el bloque que es producido por la parte honesta será adoptado por el resto de partes honestas, A MENOS, que el adversario actúe y produzca otro bloque que confunda a las partes honestas y la bifurque.</p>
<p>El fundamento de seguridad de Bitcoin se basa en la suposición (matemáticamente demostrada) que la cantidad de rondas excepcionalmente exitosas debe ser mayor que la cantidad de bloques producidos por el adversario. Si se puede asegurar eso, entonces se puede demostrar que el adversario no podría mantener la bifurcación. Esto implica <strong>persistencia</strong> (la inhabilidad del adversario de mantener una bifurcación de la cadena)<strong>.</strong></p>
<p><strong>Tomar en cuenta que estamos hablando de una bifurcación larga, las bifurcaciones cortas sucederán todo el tiempo.</strong></p>
<p>Aunque es tentador usar la misma lógica para PoS, eso no es posible.</p>
<p>Imaginemos que tenemos una bifurcación con partes honestas. Ahora tenemos un adversario quien es elegido para producir el siguiente bloque.</p>
<p>En el caso de Ouroboros, lo que va a suceder es que el adversario, al ser elegido para producir el siguiente bloque, tiene la capacidad de agregarlo a más de una cadena a la vez. Esto arruina el argumento de conteo de bloques de Bitcoin y el problema de ‘Nothing at Stake’ que básicamente significa que no le cuesta casi nada al adversario producir bloques en múltiples bifurcaciones de la cadena.</p>
<h3 id="${"cómo-demostramos-que-ouroboros-es-seguro"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#cómo-demostramos-que-ouroboros-es-seguro"}"><span class="${"icon icon-link"}"></span></a>¿Cómo demostramos que Ouroboros es seguro?</h3>
<p>Existe el potencial de que múltiples bloques y cadenas <strong>coexistan</strong>. Algunos de estos bloques son producidos por el adversario. La razón para esto es que fue elegido en ese momento y se ha tomado la libertad de producir múltiples bloques en la misma posición.</p>
<p>En este momento, si entrara una parte honesta el adversario puede escoger qué cadena servirle (en Ouroboros se asume que el adversario tiene total control sobre la red y puede ordenar mensajes como prefiera).</p>
<p>Si el adversario es capaz de agregar más bloques a una cadena que a otra, sería factible para el adversario entregar la cadena falsa a la parte honesta.</p>
<p>Supongamos que el adversario produce tres bloques más en su cadena. Ahora esa cadena es más apetecible para el usuario honesto (él está usando la simple regla de la cadena más larga). Si esto sucede, representaría una <strong>bifurcación</strong> de la cadena.</p>
<p>Vamos a argumentar que esta situación indeseable sucede con muy baja probabilidad, por lo que el adversario no puede contar con ella.</p>
<p>La manera en que argumentamos esto es tratando de entender las características fundamentales de esa estructura a medida que emergen en la ejecución del protocolo.</p>
<p>Empezamos por identificar cada una de estas bifurcaciones como ‘tiempos’. En este ejemplo, el adversario cuenta con dos tiempos que puede explotar para confundir a la parte honesta.</p>
<p>Esta situación es la que estamos intentando evitar…</p>
<p>Ahora vamos a describir el contexto que esperamos suceda la mayoría del tiempo.</p>
<p>Lo que esperamos que suceda la mayoría del tiempo es lo siguiente.</p>
<p>Si consideramos el inicio de la ejecución del protocolo desde el bloque génesis, podemos observar que hay un solo ‘tiempo’ y el argumento es que cualquier bifurcación que pueda existir de ese tiempo original será muy corta como para que alcance a la cadena más larga (o líder).</p>
<p>Podemos ver que esto es un segmento de ejecución del protocolo que provee la oportunidad a las partes honestas de adoptar (usando la regla de la cadena más larga) al líder de buena fe.</p>
<p>Para poder demostrar esto, tenemos que entender las dinámicas de este segmento de ejecución y cómo se traducen a estos ‘tiempos’.</p>
<p>Lo que observamos es que es posible definir una cantidad denominada ‘alcance’ o <em>reach</em> que especifica, para cualquier segmento de ejecución, que tan adelante puede llegar el adversario (para cada tiempo) con respecto al último bloque producido por una parte honesta.</p>
<p>En este caso, el último bloque es producido por una parte honesta. Si el adversario puede colocar un bloque enfrente del bloque del actor honesto, entonces su ‘alcance’ o <em>reach</em> sería uno (1). Donde en las otras bifurcaciones es negativo.</p>
<p>Podemos ver que el límite mayor al alcance es 1 si puede poner un bloque delante del bloque del bloque líder y otras veces esperamos que vaya  rezagado. Esta es la situación ideal para nosotros en donde únicamente un tiempo tiene un coeficiente negativo y todos los demás negativo.</p>
<p>Hay otro tipo de alcance que le llamamos ‘margen’ o <em>margin</em>. Este es el segundo alcance más grande. Si el margen es negativo, sabemos que estamos seguros porque todos los demás tiempos están demasiado rezagados como para alcanzar al líder. Si el margen es igual o mayor a cero, entonces es posible que uno de los tiempos alcance al líder y eso crearía una bifurcación.</p>
<p>Afortunadamente podemos demostrar que es altamente probable que el margen siempre será negativo.</p>
<p>Argumento probabilístico relacionado en el concepto de <em>random walks o</em> caminatas aleatorias. Este es un área de probabilidad que tiene muchas aplicaciones para protocolos blockchain.</p>
<p>El <em>random walk</em> más simple es el unidimensional. Este inicia desde un punto 0, luego tiramos una moneda que indica si nos movemos hacia adelante o atrás.</p>
<p>Decimos que la posibilidad ‘p’ de ir hacia adelante (igual a <code>p =&lt; ½</code>). Ahora con la probabilidad 1 - p, vamos hacia atrás.</p>
<h3 id="${"preguntas-relevantes"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#preguntas-relevantes"}"><span class="${"icon icon-link"}"></span></a>Preguntas relevantes</h3>
<p>Dada la posición ‘p’ inicial 0, para cierta opción ‘p’, cuál es la probabilidad que te encuentres en otra posición.</p>
<p>Lo que es posible demostrar para un <em>random walk</em> unidimensional, es lo siguiente:</p>
<p>Es posible dividir la región en tres segmentos.</p>
<p>Vamos a dar unos pasos, examinaremos la región en la que estamos y luego vamos a repetirlo y observar en dónde estamos.</p>
<p>Lo que observamos es que el <em>random walk</em> va a tener la tendencia a la <em>izquierda</em>.</p>`;
});
export {
  _0009 as default,
  metadata
};
