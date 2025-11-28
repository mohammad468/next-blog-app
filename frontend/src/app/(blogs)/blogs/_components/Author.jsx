import Avatar from "@/ui/Avatar";

function Author({ name, avatarUrl }) {
  return (
    <div className="flex items-center gap-x-1">
      <Avatar src={avatarUrl} width={24} alt={name || "author avatar"} />
      <span className="text-sm text-secondary-500">{name}</span>
    </div>
  );
}

export default Author;
