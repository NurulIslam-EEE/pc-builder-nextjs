import React from "react";

import styles from "../../styles/categoryPc.module.css";

function BuilderCategory({ category }) {
  console.log("category", category);
  return <div></div>;
}

export default BuilderCategory;

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
