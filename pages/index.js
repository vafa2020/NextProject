import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h2>Home page</h2>
      <ul>
        <li>
          <Link href="about">about-us</Link>
        </li>
        <li>
          <Link href="blog/posts">blog</Link>
        </li>
        <li>
          <Link href="product/">product</Link>
        </li>
      </ul>
    </div>
  );
};
export default HomePage;
