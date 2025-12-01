import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCommentAPI } from "@/services/commentService";
import toast from "react-hot-toast";

export default function useDeleteComment() {
  const queryClient = useQueryClient();
  const { isPending: isDeleting, mutate: deleteComment } = useMutation({
    mutationFn: ({ id, options }) => deleteCommentAPI(id, options),
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({
        queryKey: ["comments"],
      });
    },
    onError: (err) => toast.error(err?.response?.data?.message),
  });

  return { isDeleting, deleteComment };
}
