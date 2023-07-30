import React, { useContext } from "react";

import styles from "../../styles/categoryPc.module.css";
import { PCBuildContext } from "@/context/context";
import { useRouter } from "next/router";

function BuilderCategory({ category }) {
  const value = useContext(PCBuildContext);

  const router = useRouter();
  const handleAddValue = (values) => {
    value.handleAddValue(router.query.category, values);
    router.push(`/pc_builder`);
  };
  //   console.log("context", value, router.query);
  return (
    <div className={`${styles.background} container`}>
      {category.length > 0 &&
        category.map((cat) => {
          return (
            <div key={cat?._id} className={styles.product_thumb}>
              <div className="image">
                <img src={cat?.image} alt="" width="200px" />
              </div>
              <div className="description">
                <h3> {cat?.productName}</h3>

                {Object.entries(cat.features).map(([key, value]) => {
                  return (
                    <p key={key}>
                      {key}:{value}
                    </p>
                  );
                })}
              </div>
              <div className="action">
                <button
                  className={styles.add_button}
                  onClick={() => handleAddValue(cat)}
                >
                  Add
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
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
