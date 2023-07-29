import React from "react";
import styles from "../../styles/category.module.css";
import { useRouter } from "next/router";

function Category() {
  const router = useRouter();

  const handleNavigate = () => {
    router.push(``);
  };
  return <div className="container"></div>;
}

export default Category;
