const __variableDynamicImportRuntimeHelper = (glob, path) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, new Error("Unknown variable dynamic import: " + path)));
  });
};
async function load({ params }) {
  try {
    const post = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../0001.md": () => import("../../../../chunks/0001.js"), "../0002.md": () => import("../../../../chunks/0002.js"), "../0003.md": () => import("../../../../chunks/0003.js"), "../0004.md": () => import("../../../../chunks/0004.js"), "../0005.md": () => import("../../../../chunks/0005.js"), "../0006.md": () => import("../../../../chunks/0006.js"), "../0007.md": () => import("../../../../chunks/0007.js"), "../0008.md": () => import("../../../../chunks/0008.js"), "../0009.md": () => import("../../../../chunks/0009.js"), "../0010.md": () => import("../../../../chunks/0010.js"), "../0011.md": () => import("../../../../chunks/0011.js"), "../0012.md": () => import("../../../../chunks/0012.js"), "../0013.md": () => import("../../../../chunks/0013.js"), "../0014.md": () => import("../../../../chunks/0014.js"), "../0015.md": () => import("../../../../chunks/0015.js"), "../0016.md": () => import("../../../../chunks/0016.js"), "../0017.md": () => import("../../../../chunks/0017.js"), "../0018.md": () => import("../../../../chunks/0018.js"), "../0019.md": () => import("../../../../chunks/0019.js"), "../0020.md": () => import("../../../../chunks/0020.js"), "../0021.md": () => import("../../../../chunks/0021.js"), "../0022.md": () => import("../../../../chunks/0022.js") }), `../${params.slug}.md`);
    const { title, date, categories } = post.metadata;
    const Content = post.default;
    return {
      Content,
      title,
      date,
      categories
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
}
export {
  load
};
