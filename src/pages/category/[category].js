import React from "react";
import styles from "../../styles/category.module.css";
import { useRouter } from "next/router";
import ProductCard from "@/components/ProductCard";

function Category({ category }) {
  const router = useRouter();

  console.log("cccc", category);
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
    <div className="container">
      {category?.map((cat) => {
        return <ProductCard key={cat?._id} data={cat} />;
      })}
    </div>
  );
}

export default Category;

export async function getServerSideProps(context) {
  const { params } = context;

  const res = await fetch(
    `https://pc-builder-sand.vercel.app/api/v1/product?category=${params.category}`
  );
  const product = await res.json();

  // console.log("ccccc", product, params);

  return {
    props: {
      category: product.data,
    },
  };
}
