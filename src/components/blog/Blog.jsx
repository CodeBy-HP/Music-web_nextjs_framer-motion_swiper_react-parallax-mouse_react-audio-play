import SectionHeader from "../SectionHeader";
import PostList from "./PostList";

const getPosts = async () => {
  const res = await fetch("http://localhost:4000/posts");
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  return res.json(); // This correctly returns the parsed JSON data
};

const Blog = async () => {
  const posts = await getPosts(); // Fetch the posts

  return (
    <section className="section" id="blog">
      <div className="container mx-auto">
        <SectionHeader pretitle="Our Blog" title="Latest news" />
        {/* Post list */}
        <PostList posts={posts} />
      </div>
    </section>
  );
};

export default Blog;
