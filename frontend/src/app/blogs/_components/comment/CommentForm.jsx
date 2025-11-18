"use client";

import { createComment } from "@/lib/actions";
import SubmitButton from "@/ui/SubmitButton";
import TextArea from "@/ui/TextArea";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import toast from "react-hot-toast";

const initialState = {
  error: "",
  message: "",
};

const CommentForm = ({ postId, parentId, onClose }) => {
  const [text, setText] = useState("");
  const [state, formAction] = useFormState(createComment, initialState);

  useEffect(() => {
    if (state?.message) {
      toast.success(state?.message);
      onClose();
    }
    if (state?.error) toast.error(state?.error);
  }, [state]);

  return (
    <div>
      <div className="flex justify-center mt-4">
        <div className="max-w-md  w-full">
          <form
            action={async (formData) => {
              await formAction({ formData, postId, parentId });
            }}
            className="space-y-7"
          >
            <TextArea
              name="text"
              label="متن نظر"
              value={text}
              isRequired
              onChange={(e) => setText(e.target.value)}
            />
            <SubmitButton className="w-full">تایید</SubmitButton>
          </form>
        </div>
      </div>
    </div>
  );
};
export default CommentForm;
