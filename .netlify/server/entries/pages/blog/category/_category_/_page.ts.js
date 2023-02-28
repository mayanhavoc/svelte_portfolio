const load = async ({ fetch, params }) => {
  try {
    const { category } = params;
    const response = await fetch(`/api/posts`);
    const allPosts = await response.json();
    const posts = allPosts.filter((post) => post.meta.categories.includes(category));
    return {
      category,
      posts
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
};
export {
  load
};
