import Breadcrumbs from "@/ui/Breadcrumbs";
import { notFound } from "next/navigation";
import { getCommentAPI } from "@/services/commentService";
import EditCommentForm from "../../_/EditCommentForm";
import { cookies } from "next/headers";
import setCookieOnReq from "@/utils/setCookieOnReq";

async function EditCommentPage({ params: { id } }) {
  const cookieStore = cookies();
  const options = setCookieOnReq(cookieStore);
  const { comment } = await getCommentAPI(id, options);
  if (!comment) notFound();

  return (
    <div>
      <Breadcrumbs
        breadcrumbs={[
          { label: "پروفایل", href: "/profile" },
          { label: "نظرات", href: "/profile/comments" },
          { label: "ویرایش نظر", href: `/profile/comments/${id}/edit`, active: true },
        ]}
      />
      <EditCommentForm comment={comment} />
    </div>
  );
}

export default EditCommentPage;
