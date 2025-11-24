import { Suspense } from "react";

import CardWrapper from "./_components/CardWrapper";
import Fallback from "@/ui/Fallback";
import LatestPosts from "./_components/LatestPosts";
import Breadcrumbs from "@/ui/Breadcrumbs";

let breadcrumbs = [];
breadcrumbs.push({ label: "پروفایل", href: "/profile" });

async function Profile() {
  return (
    <div>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <h1 className="text-xl mb-8 text-secondary-700">داشبورد</h1>
      <Suspense fallback={<Fallback />}>
        <CardWrapper />
      </Suspense>
      <h1 className="text-xl mb-4 text-secondary-600">آخرین پست ها</h1>
      <Suspense fallback={<Fallback />}>
        <LatestPosts />
      </Suspense>
    </div>
  );
}

export default Profile;
