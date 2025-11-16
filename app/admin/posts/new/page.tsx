import BlogPostEditor from "../[id]/page";

export default function NewBlogPost() {
  return <BlogPostEditor params={Promise.resolve({ id: "new" })} />;
}

