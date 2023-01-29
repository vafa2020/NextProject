import { useRouter } from "next/router";

const UserPost = () => {
  const router = useRouter();
  const data = router.query;
  console.log(data);
  return (
    <div>
      <h1>user vafaee</h1>
    </div>
  );
};
export default UserPost;
