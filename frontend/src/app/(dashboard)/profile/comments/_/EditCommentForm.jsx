"use client";

import { useState } from "react";
import useEditComment from "./useEditComment";
import Button from "@/ui/Button";
import Select from "@/ui/Select";
import { useRouter } from "next/navigation";
import { STATUS_OPTIONS } from "@/constants/statusOptions";

export default function EditCommentForm({ comment }) {
  const router = useRouter();
  const [status, setStatus] = useState(comment.status ?? 0);
  const { isEditing, editComment } = useEditComment();

  const handleSubmit = (event) => {
    event.preventDefault();
    editComment(
      {
        id: comment._id,
        data: { status: Number(status) },
        options: {},
      },
      {
        onSuccess: () => {
          router.push("/profile/comments");
          router.refresh("/profile/comments");
        },
      }
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 max-w-md mt-8 bg-secondary-0 p-6 rounded-lg shadow-sm"
    >
      <div>
        <label className="block text-sm mb-1 text-secondary-700">متن نظر</label>
        <p className="text-secondary-900 text-sm border border-secondary-200 rounded-md p-3 bg-secondary-50">
          {comment?.content?.text}
        </p>
      </div>

      <div>
        <label className="block text-sm mb-1 text-secondary-700">وضعیت نظر</label>
        <Select value={status} onChange={(e) => setStatus(e.target.value)} options={STATUS_OPTIONS} />
      </div>

      <div className="flex gap-x-3">
        <Button type="submit" variant="primary" disabled={isEditing}>
          ذخیره تغییرات
        </Button>
        <Button type="button" variant="secondary" onClick={() => router.back()}>
          انصراف
        </Button>
      </div>
    </form>
  );
}
