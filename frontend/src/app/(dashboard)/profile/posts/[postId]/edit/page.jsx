import Breadcrumbs from "@/ui/Breadcrumbs";
import CreatePostForm from "../../create/_/CreatePostForm";
import { getPostById } from "@/services/postServices";
import { notFound } from "next/navigation";

async function EditPage({ params: { postId } }) {
  const { post } = await getPostById(postId);
  console.log(post);
  if (!post) notFound();

  return (
    <div>
      <Breadcrumbs
        breadcrumbs={[
          { label: "پروفایل", href: "/profile" },
          { label: "پست ها", href: "/profile/posts" },
          { label: "ویرایش پست", href: `/profile/posts/${postId}/edit`, active: true },
        ]}
      />
      <CreatePostForm />
    </div>
  );
}

export default EditPage;
