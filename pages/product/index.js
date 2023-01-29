import Link from "next/link";

const Product = () => {
  const Users = [
    { id: 1, username: "mohammadHossein" },
    { id: 2, username: "amirHossein" },
  ];
  return (
    <div>
      <h2>product </h2>
      <nav>
        <ul>
          {Users.map((user) => (
            <li key={user.id}>
              <Link href={`product/${user.id}`}>{user.username}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
export default Product;
