import PostsTable from "../posts/_/components/PostsTable";

function LatestPosts() {
  return <PostsTable query="sort=latest&limit=5" />;
}

export default LatestPosts;
