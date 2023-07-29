import { useRouter } from "next/router";
import React from "react";

function SingleProduct() {
  const { query } = useRouter();

  console.log("qqqq", query);
  return <div>SingleProduct</div>;
}

export default SingleProduct;

export async function getStaticProps() {
  const res = await fetch("https://.../posts");
  const product = await res.json();

  return {
    props: {
      product,
    },
  };
}

// export async function getServerSideProps() {

//     const res = await fetch(`https://.../data`)
//     const data = await res.json()

//     return { props: { data } }
//   }
