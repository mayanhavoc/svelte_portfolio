import { c as create_ssr_component } from "./index.js";
const metadata = {
  "id": "0014",
  "title": "The Shell",
  "date": "2022-09-29",
  "categories": ["Backend", "Bash"],
  "sources": [
    "https://www.essentialcardano.io/faq/what-is-a-blockchain",
    "https://en.wikipedia.org/wiki/Cryptocurrency",
    "https://www.essentialcardano.io/faq/what-is-proof-of-stake-pos",
    "https://forum.cardano.org/t/staking-and-delegating-for-beginners-a-step-by-step-guide/36681",
    "https://forum.cardano.org/t/choosing-a-stake-pool-and-delegating-your-ada/38931"
  ]
};
const _0014 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2 id="${"environment-variables"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#environment-variables"}"><span class="${"icon icon-link"}"></span></a>Environment variables</h2>
<p>A shell has a way to search where programs are stored. They do this through environment variables.
BASH is really a programming language, this means it can do while loops, conditions, functions, etc.</p>
<p>Environment variables are set whenever you start your shell, you don’t need to set them every time you start the shell.</p>
<h3 id="${"the-path-variable"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#the-path-variable"}"><span class="${"icon icon-link"}"></span></a>The <code>$PATH</code> variable</h3>
<p>The $PATH variable shows all of the paths on the machine that the shell will search for programs.</p>
<p>If we want to run the path that the program runs, we can use the command <code>which</code> followed by the program name, e.g. :</p>
<pre class="${"language-bash"}"><!-- HTML_TAG_START -->${`<code class="language-bash">$ <span class="token function">which</span> <span class="token builtin class-name">echo</span>
/usr/bin/echo</code>`}<!-- HTML_TAG_END --></pre>
<p><strong>On Linux and Mac everything lives under the root directory, so every absolute path starts with a slash (<code>/</code>)</strong></p>
<p>On Windows, there is one root for every partition, i.e. <code>C:/</code>, <code>D:/</code></p>
<p><strong>Absolute paths</strong> are paths that fully determine the location of a file.
<strong>Relative paths</strong> are relative to your current position.</p>
<p>The way to figure out your location is the command <code>pwd</code> (print working directory)</p>
<p>The tilde <code>~</code> character will <strong>ALWAYS</strong> bring you to the HOME directory.
The command <code>cd -</code> will move you back one folder.
The command <code>--help</code> can be used with a program name (i.e.<code>ls</code>) to provide information about the program.</p>
<h2 id="${"file-permissions"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#file-permissions"}"><span class="${"icon icon-link"}"></span></a>File permissions</h2>
<p><code>drwxr-xr-x</code></p>
<p><code>d</code> - directory
<code>rwxr-xr-x</code> - permissions
first three characters - <code>rwx</code> - owner permissions
second three characters - <code>-xr</code> - permissions for the group that owns this file
third group of characters - <code>x</code> - permissions for others
<code>-</code> - no permission</p>
<h3 id="${"for-files"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#for-files"}"><span class="${"icon icon-link"}"></span></a>For files</h3>
<ul><li><code>r</code> - read contents</li>
<li><code>w</code> - write save, update</li>
<li><code>x</code> - execute</li>
<li><code>-</code> - no permission</li></ul>
<h3 id="${"for-directories"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#for-directories"}"><span class="${"icon icon-link"}"></span></a>For directories</h3>
<ul><li><code>r</code> - are you allowed to list directory contents</li>
<li><code>w</code> - are you allowed to rename, create files for that directory (notice that this means that if you have write <code>w</code> permissions on a file but you don’t have <code>w</code> permissions on its <strong>directory</strong>, you will not be able to delete the file, you will only be able to empty its contents).</li>
<li><code>x</code> - are you allowed to enter this directory. To <code>cd</code> into a directory, you must have the execute <code>x</code> permission on <strong>ALL</strong> parent directories of that directory, and the directory itself.</li></ul>
<h2 id="${"streams"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#streams"}"><span class="${"icon icon-link"}"></span></a>Streams</h2>
<p>Where much of the power of the shell comes through is when we can combine programs together and make them interact with files.
We can do this through the notion of <em>streams</em>.
Every program by defaul has two primary streams:</p>
<ul><li>an input stream - the keyboard, the terminal</li>
<li>an output stream - when the program prints something, it will print to that screen, in the case of the terminal, the output is printed to the terminal</li></ul>
<p>The shell gives you a way to re-wire strings, or change where the input or output of a program are pointed.
The simplest way to do this is with angle bracets:</p>
<pre class="${"language-bash"}"><!-- HTML_TAG_START -->${`<code class="language-bash"><span class="token comment"># rewire the input of this program to be the contents of this file</span>
$ <span class="token operator">></span> <span class="token function">file</span>
<span class="token comment"># rewire the output of this program to be the contents of this file</span>
$ <span class="token operator">&lt;</span> <span class="token function">file</span></code>`}<!-- HTML_TAG_END --></pre>
<p>For example</p>
<pre class="${"language-bash"}"><!-- HTML_TAG_START -->${`<code class="language-bash"><span class="token builtin class-name">echo</span> hello <span class="token operator">></span> hello.txt</code>`}<!-- HTML_TAG_END --></pre>
<p>Output</p>
<pre class="${"language-bash"}"><!-- HTML_TAG_START -->${`<code class="language-bash">$ <span class="token function">cat</span> hello.txt
hello</code>`}<!-- HTML_TAG_END --></pre>
<pre class="${"language-bash"}"><!-- HTML_TAG_START -->${`<code class="language-bash">$ <span class="token function">cat</span> <span class="token operator">&lt;</span> hello.txt
hello</code>`}<!-- HTML_TAG_END --></pre>
<pre class="${"language-bash"}"><!-- HTML_TAG_START -->${`<code class="language-bash">$ <span class="token function">cat</span> <span class="token operator">&lt;</span>hello.txt <span class="token operator">></span> hello2.txt
$ <span class="token function">cat</span> hello2.txt
hello</code>`}<!-- HTML_TAG_END --></pre>
<p><code>&gt;&gt;</code> - append (instead of overwrite)</p>
<pre class="${"language-bash"}"><!-- HTML_TAG_START -->${`<code class="language-bash">$ <span class="token function">cat</span> <span class="token operator">&lt;</span> hello.txt <span class="token operator">>></span> hello2.txt
$ <span class="token function">cat</span> hello2.txt
hello
hello</code>`}<!-- HTML_TAG_END --></pre>
<h2 id="${"the-pipe--character"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#the-pipe--character"}"><span class="${"icon icon-link"}"></span></a>The pipe <code>|</code> character</h2>
<p>Take the <strong>output of the program to the left</strong> and <em>make it the input of the program on the right</em>.
e.g.,</p>
<pre class="${"language-bash"}"><!-- HTML_TAG_START -->${`<code class="language-bash">$ <span class="token function">ls</span> <span class="token parameter variable">-l</span> / <span class="token operator">|</span> <span class="token function">tail</span> <span class="token parameter variable">-n1</span> <span class="token operator">></span> ls.txt
$ <span class="token function">cat</span> ls.txt
drwxr-xr-x  <span class="token number">1</span>   root    root    <span class="token number">116</span> Jan <span class="token number">13</span>  <span class="token number">10</span>:57   var</code>`}<!-- HTML_TAG_END --></pre>
<p>The <code>tail</code> command prints the last <code>n</code> lines of its inputs, <code>-n1</code> or <code>--lines1</code> tells the program to print the <strong>last line</strong>.</p>
<h2 id="${"the-root-user"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#the-root-user"}"><span class="${"icon icon-link"}"></span></a>The root user</h2>
<p>Super user, can do whatever it wants.</p>
<p><code>#</code> - The pound symbol means “run this as root”
<code>$</code> - Indicates you are not running as root
<code>sudo su</code> - run the command as root - the <code>su</code> command gives you a shell as the super user</p>
<p><code>tee</code> - the <code>tee</code> command takes its input and writes it to a file and <em>also</em> to the output. This is convenient for example, if you have a log file which you want to store for later, but also see it on the screen.</p>`;
});
export {
  _0014 as default,
  metadata
};
