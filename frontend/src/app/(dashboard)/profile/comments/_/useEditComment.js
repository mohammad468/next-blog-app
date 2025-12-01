import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateCommentAPI } from "@/services/commentService";

export default function useEditComment() {
  const queryClient = useQueryClient();

  const { isPending: isEditing, mutate: editComment } = useMutation({
    mutationFn: ({ id, data, options }) => updateCommentAPI(id, data, options),
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({
        queryKey: ["comments"],
      });
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });

  return { isEditing, editComment };
}
