import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Context from "@/context/context";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }) {
  return (
    <>
      <SessionProvider session={pageProps.session}>
        <Context>
          <ToastContainer position="top-center" theme="light" />
          <Navbar />
          <Component {...pageProps} />

          <Footer />
        </Context>
      </SessionProvider>
    </>
  );
}
