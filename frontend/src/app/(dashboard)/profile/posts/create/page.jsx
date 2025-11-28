import Breadcrumbs from "@/ui/Breadcrumbs";
import CreatePostForm from "./_/CreatePostForm";

let breadcrumbs = [];
breadcrumbs.push({ label: "پروفایل", href: "/profile" });
breadcrumbs.push({ label: "پست ها", href: "/profile/posts" });
breadcrumbs.push({ label: "ایجاد پست", href: "/profile/posts/create", active: true });

function Page() {
  return (
    <div>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <CreatePostForm />
    </div>
  );
}

export default Page;
