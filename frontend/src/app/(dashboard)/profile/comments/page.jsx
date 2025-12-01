import Breadcrumbs from "@/ui/Breadcrumbs";
import { Suspense } from "react";
import Spinner from "@/ui/Spinner";

import queryString from "query-string";
import { getAllCommentsAPI } from "@/services/commentService";
import { CommentsTable } from "../posts/_/components/CommentsTable";

let breadcrumbs = [];
breadcrumbs.push({ label: "پروفایل", href: "/profile" });
breadcrumbs.push({ label: "نظرات", href: "/profile/comments", active: true });

async function CommentsPage({ searchParams }) {
  const query = queryString.stringify(searchParams);
  const { comments, commentsCount } = await getAllCommentsAPI();
  return (
    <div>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-secondary-700 mb-12 items-center">
        <h1 className="font-bold text-xl">لیست نظرات</h1>
      </div>
      <Suspense fallback={<Spinner />}>
        <CommentsTable comments={comments} />
      </Suspense>
    </div>
  );
}

export default CommentsPage;
