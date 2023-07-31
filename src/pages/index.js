import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import ProductCard from "@/components/ProductCard";
import Banner from "@/components/Banner";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ posts }) {
  console.log("ppp", posts);
  return (
    <>
      <Head>
        <title>Pc Builder</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className} container`}>
        <div className={`${styles.container} ${styles.homes}`}>
          {" "}
          <Banner />
          <h3 className={`${styles.h3}`}>Featured Products</h3>
          {/* 1 */}
          <h4>Processor</h4>
          <div className={`${styles.home_product}`}>
            {posts?.data &&
              posts?.data?.Processor?.map((post) => {
                return <ProductCard key={post?._id} data={post} />;
              })}
          </div>
          <h4>Motherboard</h4>
          {/* 2 */}
          <div className={`${styles.home_product}`}>
            {posts?.data &&
              posts?.data?.Motherboard?.map((post) => {
                return <ProductCard key={post?._id} data={post} />;
              })}
          </div>
          <h4>RAM</h4>
          {/* 3 */}
          <div className={`${styles.home_product}`}>
            {posts?.data &&
              posts?.data?.RAM?.map((post) => {
                return <ProductCard key={post?._id} data={post} />;
              })}
          </div>
          {/* 4 */}
          <h4>Power Supply Unit</h4>
          <div className={`${styles.home_product}`}>
            {posts?.data &&
              posts?.data?.PowerSupplyUnit?.map((post) => {
                return <ProductCard key={post?._id} data={post} />;
              })}
          </div>
          {/* 5 */}
          <h4>Storage Device</h4>
          <div className={`${styles.home_product}`}>
            {posts?.data &&
              posts?.data?.StorageDevice?.map((post) => {
                return <ProductCard key={post?._id} data={post} />;
              })}
          </div>
          {/* 6 */}
          <h4>Monitors</h4>
          <div className={`${styles.home_product}`}>
            {posts?.data &&
              posts?.data?.Monitor?.map((post) => {
                return <ProductCard key={post?._id} data={post} />;
              })}
          </div>
          {/*  */}
          <h4>Others</h4>
          <div className={`${styles.home_product}`}>
            {posts?.data &&
              posts?.data?.Others?.map((post) => {
                return <ProductCard key={post?._id} data={post} />;
              })}
          </div>
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  let posts = {
    Processor: [],
    Motherboard: [],
    RAM: [],
    PowerSupplyUnit: [],
    StorageDevice: [],
    Monitor: [],
    Others: [],
  };

  // if (typeof window == "undefined") {
  //   return {
  //     props: {
  //      posts:{
  //       Processor: [],
  //       Motherboard: [],
  //       RAM: [],
  //       PowerSupplyUnit: [],
  //       StorageDevice: [],
  //       Monitor: [],
  //       Others: [],
  //      }
  //     },
  //   };
  // }
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/api/v1/product/home`);

    posts = await res.json();
  } catch {}

  return {
    props: {
      posts,
    },
  };
}
