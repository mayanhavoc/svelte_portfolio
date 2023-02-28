import { c as create_ssr_component } from "./index.js";
const metadata = {
  "id": "0013",
  "title": "Nix",
  "date": "2022-09-06",
  "categories": ["Backend", "Nix", "Cardano"],
  "sources": [
    "https://nix.dev/tutorials/ad-hoc-developer-environments",
    "https://github.com/brainrake/nixos-tutorial/blob/master/cheatsheet.md",
    "https://nixos.wiki/wiki/Cheatsheet"
  ]
};
const _0013 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2 id="${"nix-notes"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#nix-notes"}"><span class="${"icon icon-link"}"></span></a>Nix Notes</h2>
<h3 id="${"nix-basic-commands-overview"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#nix-basic-commands-overview"}"><span class="${"icon icon-link"}"></span></a>Nix basic commands overview</h3>
<p>Installing a package</p>
<pre class="${"language-bash"}"><!-- HTML_TAG_START -->${`<code class="language-bash">$ nix-env <span class="token parameter variable">-i</span> <span class="token function">git</span>
installing <span class="token string">'git-1.9.3'</span>

$ <span class="token function">git</span> <span class="token parameter variable">--version</span>
<span class="token function">git</span> version <span class="token number">1.9</span>.3</code>`}<!-- HTML_TAG_END --></pre>
<p>Install custom package (nix expression) without installing it to a profile</p>
<pre class="${"language-bash"}"><!-- HTML_TAG_START -->${`<code class="language-bash">nix-build ./path-to-file.nix</code>`}<!-- HTML_TAG_END --></pre>
<p>Removing a package from a profile</p>
<pre class="${"language-bash"}"><!-- HTML_TAG_START -->${`<code class="language-bash">nix-env <span class="token parameter variable">-e</span> package.name</code>`}<!-- HTML_TAG_END --></pre>
<p>Garbage collector</p>
<pre class="${"language-bash"}"><!-- HTML_TAG_START -->${`<code class="language-bash">nix-env --delete-generations 10d
nix-collect-garbage</code>`}<!-- HTML_TAG_END --></pre>
<h2 id="${"nix-main-advantages"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#nix-main-advantages"}"><span class="${"icon icon-link"}"></span></a>Nix main advantages</h2>
<ul><li>Atomic upgrades</li>
<li>Rollbacks</li>
<li>Reproducibility</li></ul>
<h2 id="${"quick-overview"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#quick-overview"}"><span class="${"icon icon-link"}"></span></a>Quick Overview</h2>
<h3 id="${"nix-package-manager"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#nix-package-manager"}"><span class="${"icon icon-link"}"></span></a>Nix package manager</h3>
<p>Installing a package via nix</p>
<pre class="${"language-bash"}"><!-- HTML_TAG_START -->${`<code class="language-bash">$ nix-env <span class="token parameter variable">-i</span> <span class="token function">git</span>
installing <span class="token string">'git-1.9.3'</span>

$ <span class="token function">git</span> <span class="token parameter variable">--version</span>
<span class="token function">git</span> version <span class="token number">1.9</span>.3</code>`}<!-- HTML_TAG_END --></pre>
<p>This example installs Git and its dependencies and makes it available to the user.</p>
<p><strong>What sets Nix apart from other package managers is the way that is stores packages.</strong></p>
<pre class="${"language-bash"}"><!-- HTML_TAG_START -->${`<code class="language-bash">$ readlink <span class="token parameter variable">-f</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">which</span> <span class="token function">git</span><span class="token variable">)</span></span>
/nix/store/hn79nsyhnlwqyspwqsbmgzacny35hn3w-git-1.9.3/bin/git
<span class="token comment"># 👆 Packages don't live in shared directories like /usr/bin or /usr/lib</span></code>`}<!-- HTML_TAG_END --></pre>
<p>In Nix, each package has its own directory underneath the Nix store (/nix/store).
The characters <code>hn79nsyhnlwqyspwqsbmgzacny35hn3w</code> in the /nix/store represent the cryptographic hash of the inputs used to build the package. This includes source code, packages, build script and dependencies (e.g., a C compiler and external libraries).</p>
<h3 id="${"how-does-nix-work"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#how-does-nix-work"}"><span class="${"icon icon-link"}"></span></a>How does Nix work?</h3>
<p>Whenever you install, upgrade or uninstall a package via <code>nix-env</code>, Nix builds a tree of symbolic links (called a <em>user environment</em>) pointing to the installed packages. The current user environment is available through the $PATH environment variable. Whenver a nix package is installed, upgraded, uninstalled, nix will download and build the dependencies and build a <strong>new</strong> user environment. This new version will not affect the current user’s original environment in any way.</p>
<p>All nix does once everything is installed, is update the symlink <code>/nix/var/nix/profiles/default</code> to point at a new user environment.</p>
<p><img src="${"https://imgopt.infoq.com/fit-in/1200x2400/filters:quality(80)/filters:no_upscale()/articles/configuration-management-with-nix/en/resources/fig3large.jpg"}" alt="${"Figure 1 "}"></p>
<p>In the same way, removing a package from a profile (<code>nix-env -e package-name</code>) will build a new symlink tree from which the symlinks to the specified package have been removed. <strong>Removing a package from a profile doesn’t cause it to be deleted from the disk, since the user may want to roll back at some point.</strong></p>
<p>Whenever the uses wishes to free up the storage space from packages no longer used, nix allows for packages to be <em>garbage-collected</em>. This works by deleting any path in the Nix store which is not reachable from a “root”. Roots include the symlinks in /nix/var/nix/profiles but also any open files (to prevent active programs from being garbage collected). This requires telling Nix that you don’t need to roll back any more, e.g.:</p>
<pre class="${"language-bash"}"><!-- HTML_TAG_START -->${`<code class="language-bash"><span class="token comment"># 👇 tell Nix you don't want to roll back to any profile version older than 10 days </span>
$ nix-env --delete-generations 10d
<span class="token comment"># 👇 actual deletion command</span>
$ nix-collect-garbage</code>`}<!-- HTML_TAG_END --></pre>
<h3 id="${"building-packages"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#building-packages"}"><span class="${"icon icon-link"}"></span></a>Building packages</h3>
<p><em>Nix expressions</em> are purely functional programming language that tell Nix how to build packages, e.g.:</p>
<pre class="${"language-bash"}"><!-- HTML_TAG_START -->${`<code class="language-bash">with <span class="token function">import</span> <span class="token operator">&lt;</span>nixpkgs<span class="token operator">></span> <span class="token punctuation">&#123;</span> <span class="token punctuation">&#125;</span><span class="token punctuation">;</span>

<span class="token comment"># 👇 high-level abstraction that provides standard Unix dependencies such as GCC and Make</span>
stdenv.mkDerivation <span class="token punctuation">&#123;</span>
    <span class="token comment"># 👇 inputs to the build</span>
  name <span class="token operator">=</span> <span class="token string">"nano-2.3.2"</span><span class="token punctuation">;</span>

  <span class="token comment"># The source code tarball, downloaded into some place in the Nix store.</span>
  src <span class="token operator">=</span> fetchurl <span class="token punctuation">&#123;</span>
    url <span class="token operator">=</span> ftp://ftp.gnu.org/pub/gnu/nano/nano-2.3.2.tar.gz<span class="token punctuation">;</span>
    sha256 <span class="token operator">=</span> <span class="token string">"1s3b21h5p7r8xafw0gahswj16ai6k2vnjhmd15b491hl0x494c7z"</span><span class="token punctuation">&#125;</span><span class="token punctuation">;</span>

  <span class="token comment"># The dependencies, referring to variables in &lt;nixpkgs>.</span>
  buildInputs <span class="token operator">=</span> <span class="token punctuation">[</span> ncurses gettext <span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token comment"># Build script, this is actually unnecessary as mkDerivation assumes standard Autoconf-style packages by default</span>
  buildCommand <span class="token operator">=</span>
    <span class="token string">''</span>
      <span class="token function">tar</span> xf <span class="token variable">$src</span>
      <span class="token builtin class-name">cd</span> nano-*
      ./configure <span class="token parameter variable">--prefix</span><span class="token operator">=</span><span class="token variable">$out</span>
      <span class="token function">make</span>
      <span class="token function">make</span> install<span class="token punctuation">&#125;</span><span class="token punctuation">;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>You can install such a package via nix-env -i nano, but you can also build it without installing it into a profile:</p>
<pre class="${"language-bash"}"><!-- HTML_TAG_START -->${`<code class="language-bash">nix-build ./nano.nix</code>`}<!-- HTML_TAG_END --></pre>
<pre class="${"language-bash"}"><!-- HTML_TAG_START -->${`<code class="language-bash">/nix/store/22y58w45fskjz6k7xyryx9s6ri22j2bq-nano-2.3.2</code>`}<!-- HTML_TAG_END --></pre>
<p>This will create a symlink <code>./result</code> pointing to the result of the nix expression in the Nix store, you can test the package by running <code>./result/bin/package-name</code>.</p>
<h2 id="${"ad-hoc-developer-environments"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#ad-hoc-developer-environments"}"><span class="${"icon icon-link"}"></span></a>Ad hoc developer environments</h2>
<p>What is a shell environment?
An environment that gives you access to exact versions of packages specified by Nix.</p>
<h3 id="${"searching-package-attribute-names"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#searching-package-attribute-names"}"><span class="${"icon icon-link"}"></span></a>Searching package attribute names</h3>
<p>Anything that’s in the <a href="${"https://search.nixos.org/packages"}" rel="${"nofollow"}">official package list</a> can become part of the shell environment.</p>
<p>To search a package:</p>
<pre class="${"language-bash"}"><!-- HTML_TAG_START -->${`<code class="language-bash">$ nix-env <span class="token parameter variable">-qaP</span> <span class="token function">git</span>
<span class="token comment"># 👇 attribute name     👇 package name</span>
gitAndTools.gitFull     git-2.25.0
gitMinimal              git-2.25.0</code>`}<!-- HTML_TAG_END --></pre>
<p>(continues …)</p>
<h2 id="${"anatomy-of-a-nix-expression"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#anatomy-of-a-nix-expression"}"><span class="${"icon icon-link"}"></span></a>Anatomy of a nix expression</h2>
<pre class="${"language-bash"}"><!-- HTML_TAG_START -->${`<code class="language-bash"><span class="token punctuation">&#123;</span> pkgs ? <span class="token function">import</span> <span class="token operator">&lt;</span>nixpkgs<span class="token operator">></span> <span class="token punctuation">&#123;</span> <span class="token punctuation">&#125;</span> <span class="token punctuation">&#125;</span>:

pkgs.stdenv.mkDerivation <span class="token punctuation">&#123;</span>
  pname <span class="token operator">=</span> <span class="token string">"gruvbox-css"</span><span class="token punctuation">;</span>
  version <span class="token operator">=</span> <span class="token string">"latest"</span><span class="token punctuation">;</span>
  src <span class="token operator">=</span> ./.<span class="token punctuation">;</span>
  phases <span class="token operator">=</span> <span class="token string">"installPhase"</span><span class="token punctuation">;</span>
  installPhase <span class="token operator">=</span> <span class="token string">''</span>
    <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token variable">$out</span>
    <span class="token function">cp</span> <span class="token parameter variable">-rf</span> <span class="token variable">$src</span>/gruvbox.css <span class="token variable">$out</span>/gruvbox.css
  <span class="token string">''</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>This creates a package named <code>gruvbox-css</code> with the version <code>latest</code>.</p>
<p>Line by line breakdown</p>`;
});
export {
  _0013 as default,
  metadata
};
