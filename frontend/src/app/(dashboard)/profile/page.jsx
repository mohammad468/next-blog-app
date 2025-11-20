import { fetchCardData } from "@/services/data";
import { Card } from "./_components/Cards";

async function Profile() {
  const { numberOfUsers, numberOfComments, numberOfPosts } = await fetchCardData();

  return (
    <div>
      <div className="grid gap-6 md:grid-cols-3 mb-8">
        <Card title="کاربران" type="users" value={numberOfUsers} key="0" />
        <Card title="پست ها" type="posts" value={numberOfPosts} key="1" />
        <Card title="نظرات" type="comments" value={numberOfComments} key="2" />
      </div>
    </div>
  );
}

export default Profile;
