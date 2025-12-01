import Table from "@/ui/Table";
import { toPersianDigits } from "@/utils/numberFormatter";
import { toLocalDateShort } from "@/utils/dateFormatter";
import { DeleteComment, UpdateComment } from "./Buttons";
import { STATUS_OPTIONS } from "@/constants/statusOptions";

export async function CommentsTable({ comments }) {
  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>عنوان</th>
        <th>نویسنده</th>
        <th>تاریخ ایجاد</th>
        <th>وضعیت</th>
        <th>عملیات</th>
      </Table.Header>
      <Table.Body>
        {comments.map((comment, index) => (
          <CommentRow key={comment._id} comment={comment} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}

function CommentRow({ comment, index }) {
  const status = STATUS_OPTIONS.find((option) => option.value === comment.status) || {
    value: 0,
    label: "در انتظار تایید",
  };

  return (
    <Table.Row>
      <td>{toPersianDigits(index + 1)}</td>
      <td>{comment.content.text}</td>
      <td>{comment.user.name}</td>
      <td>{toLocalDateShort(comment.createdAt)}</td>
      <td>
        <span
          className={`badge ${status.value === 2 ? "badge--success" : ""} ${
            status.value === 1 ? "badge--danger" : ""
          } ${status.value === 0 ? "badge--primary" : ""}`}
        >
          {status.label}
        </span>
      </td>
      <td>
        <div className="flex items-center gap-x-3">
          <DeleteComment comment={comment} />
          <UpdateComment id={comment._id} />
        </div>
      </td>
    </Table.Row>
  );
}
