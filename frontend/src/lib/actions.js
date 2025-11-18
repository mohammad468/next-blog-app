"use server";

import { createCommentAPI } from "@/services/commentService";
import setCookieOnReq from "@/utils/setCookieOnReq";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function createComment(prevState, { formData, postId, parentId }) {
  const cookiesStore = cookies();
  const options = setCookieOnReq(cookiesStore);

  const rowFormData = {
    parentId,
    postId,
    text: formData.get("text"),
  };

  try {
    const { message } = await createCommentAPI(rowFormData, options);
    revalidatePath("/blogs/[slug]", "page");
    return { message };
  } catch (err) {
    const error = err?.response?.data?.message;
    return { error };
  }
}
