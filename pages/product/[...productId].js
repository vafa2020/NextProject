import { useRouter } from "next/router";

const ProductID = () => {
  const router = useRouter();
  const productId = router.query;
  console.log(productId);
  return (
    <div>
      <h2>Product</h2>
    </div>
  );
};

export default ProductID;
