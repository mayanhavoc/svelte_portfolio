import { json } from "@sveltejs/kit";
const fetchMarkdownPosts = async () => {
  try {
    const allPostFiles = /* @__PURE__ */ Object.assign({ "/src/routes/blog/0001.md": () => import("../../../../chunks/0001.js"), "/src/routes/blog/0002.md": () => import("../../../../chunks/0002.js"), "/src/routes/blog/0003.md": () => import("../../../../chunks/0003.js"), "/src/routes/blog/0004.md": () => import("../../../../chunks/0004.js"), "/src/routes/blog/0005.md": () => import("../../../../chunks/0005.js"), "/src/routes/blog/0006.md": () => import("../../../../chunks/0006.js"), "/src/routes/blog/0007.md": () => import("../../../../chunks/0007.js"), "/src/routes/blog/0008.md": () => import("../../../../chunks/0008.js"), "/src/routes/blog/0009.md": () => import("../../../../chunks/0009.js"), "/src/routes/blog/0010.md": () => import("../../../../chunks/0010.js"), "/src/routes/blog/0011.md": () => import("../../../../chunks/0011.js"), "/src/routes/blog/0012.md": () => import("../../../../chunks/0012.js"), "/src/routes/blog/0013.md": () => import("../../../../chunks/0013.js"), "/src/routes/blog/0014.md": () => import("../../../../chunks/0014.js"), "/src/routes/blog/0015.md": () => import("../../../../chunks/0015.js"), "/src/routes/blog/0016.md": () => import("../../../../chunks/0016.js"), "/src/routes/blog/0017.md": () => import("../../../../chunks/0017.js"), "/src/routes/blog/0018.md": () => import("../../../../chunks/0018.js"), "/src/routes/blog/0019.md": () => import("../../../../chunks/0019.js"), "/src/routes/blog/0020.md": () => import("../../../../chunks/0020.js"), "/src/routes/blog/0021.md": () => import("../../../../chunks/0021.js"), "/src/routes/blog/0022.md": () => import("../../../../chunks/0022.js") });
    const iterablePostFiles = Object.entries(allPostFiles);
    const allPosts = await Promise.all(
      iterablePostFiles.map(async ([path, resolver]) => {
        try {
          const resolved = await resolver();
          const { metadata } = typeof resolved === "function" ? await resolved() : resolved;
          const postPath = path.slice(11, -3);
          return {
            // add a type assertion to `metadata` to convert it to `PostMetadata` so that it matches the type defined in `Post`
            meta: metadata,
            path: postPath
          };
        } catch (error) {
          console.error(error);
          throw error;
        }
      })
    );
    return allPosts;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
const GET = async () => {
  try {
    const allPosts = await fetchMarkdownPosts();
    const sortedPosts = allPosts.sort((a, b) => {
      return new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime();
    });
    return json(sortedPosts);
  } catch (error) {
    console.error(error);
    throw error;
  }
};
export {
  GET
};
