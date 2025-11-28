import http from "./httpService";

export async function getPostBySlug(slug) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/slug/${slug}`);
  const { data } = await res.json();
  const { post } = data || {};

  return post;
}

export async function getPosts(queries, options) {
  const search = queries ? `?${queries}` : "";
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/list${search}`, options);
  const { data } = await res.json();
  const { posts, totalPages } = await data;

  return { posts, totalPages };
}

export async function likePostAPI(postId) {
  return http.post(`/post/like/${postId}`).then(({ data }) => data.data);
}

export async function bookmarkPostAPI(postId) {
  return http.post(`/post/bookmark/${postId}`).then(({ data }) => data.data);
}

export async function createPostAPI(data) {
  return http.post("/post/create", data).then(({ data }) => data.data);
}
