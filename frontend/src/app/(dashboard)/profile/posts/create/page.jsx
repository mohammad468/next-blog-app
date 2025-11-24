import Breadcrumbs from "@/ui/Breadcrumbs";

let breadcrumbs = [];
breadcrumbs.push({ label: "پروفایل", href: "/profile" });
breadcrumbs.push({ label: "پست ها", href: "/profile/posts" });
breadcrumbs.push({ label: "ایجاد پست", href: "/profile/posts/create" });

function Page() {
  return (
    <div>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
    </div>
  );
}

export default Page;
