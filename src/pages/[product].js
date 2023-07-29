import { useRouter } from "next/router";
import React from "react";
import styles from "../styles/details.module.css";

function SingleProduct({ product }) {
  const { query } = useRouter();

  console.log("qqqq", query);
  return (
    <div className="container">
      <div className={styles.flex}>
        <div className={styles.product_img}>
          <img src={product?.image} alt="" width="100%" />
        </div>
        <div className={styles.description}>
          <p>{product?.productName} </p> <br />
          <p>{product?.price} </p> <br />
          <p>{product?.status} </p> <br />
          <h3>Features</h3>
          {Object.entries(product.features).map(([key, value]) => {
            console.log("kkkkk", key, value);
            return (
              <p key={key}>
                {key}:{value}
              </p>
            );
          })}
          <p>{product?.averageRating}/5 </p>
          <h3>Reviews</h3>
        </div>
      </div>
      <div>
        <br />
        <h3>Description</h3>
        <p>{product?.description} </p>
      </div>
    </div>
  );
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

  // console.log("pppp", product);

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
