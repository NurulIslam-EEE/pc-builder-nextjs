import { useRouter } from "next/router";
import React from "react";

function SingleProduct({ product }) {
  const { query } = useRouter();

  console.log("qqqq", query);
  return <div>{product?.status}</div>;
}

export default SingleProduct;

// export const getStaticPaths = async () => {
//   const res = await fetch("https://pc-builder-sand.vercel.app/api/v1/product");
//   const newses = await res.json();

//   const paths = newses?.data?.map((news) => {
//     const stringId = "" + news._id.toString();
//     console.log("ssss", stringId);
//     return { params: stringId };
//   });

//   return { paths, fallback: false };
// };

export async function getServerSideProps(context) {
  const { params } = context;

  const res = await fetch(
    `https://pc-builder-sand.vercel.app/api/v1/product/${params.product}`
  );
  const product = await res.json();

  console.log("pppp", product);

  return {
    props: {
      product: product.data,
    },
  };
}

// export async function getServerSideProps() {

//     const res = await fetch(`https://.../data`)
//     const data = await res.json()

//     return { props: { data } }
//   }
