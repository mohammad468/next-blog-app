import Link from "next/link";
import React from "react";

async function CategoryList() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/category/list`);
  const { data } = await res.json();
  const { categories } = data;

  return (
    <ul className="space-y-4">
      <li>
        <Link href="/blogs">همه</Link>
      </li>
      {categories.map((category) => {
        return (
          <li key={category._id}>
            <Link href={`/blogs/category/${category.slug}`}>{category.title}</Link>
          </li>
        );
      })}
    </ul>
  );
}

export default CategoryList;
