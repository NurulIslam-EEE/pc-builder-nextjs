import React from "react";
import styles from "../../styles/category.module.css";
import { useRouter } from "next/router";
import ProductCard from "@/components/ProductCard";

function Category({ category }) {
  const router = useRouter();

  // console.log("cccc", category);
  const handleNavigate = () => {
    router.push(``);
  };

  if (category.length < 1) {
    return (
      <div className="container" style={{ minHeight: "70vh" }}>
        No product avalaible
      </div>
    );
  }
  return (
    <div className="container grid-product">
      {category?.map((cat) => {
        return <ProductCard key={cat?._id} data={cat} />;
      })}
    </div>
  );
}

export default Category;

// export async function getStaticPaths() {
//   const res = await fetch("https://.../posts");
//   const posts = await res.json();

//   const paths = posts.map((post) => ({
//     params: { id: post.id },
//   }));

//   return { paths, fallback: false };
// }

export async function getServerSideProps(context) {
  const { params } = context;

  let product = { data: [] };
  try {
    const res = await fetch(
      `${process.env.BACKEND_URL}/api/v1/product?category=${params.category}`
    );
    product = await res.json();
  } catch {}

  // console.log("ccccc", product, params);

  return {
    props: {
      category: product.data,
    },
  };
}
