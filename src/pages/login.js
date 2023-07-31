import { Button } from "antd";
import { GoogleOutlined, GithubOutlined } from "@ant-design/icons";
import Head from "next/head";
import styles from "@/styles/Login.module.css";
import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";
const LoginPage = () => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session?.user?.email) {
      router.push("/");
    }
  }, [session?.user?.email, router]);

  return (
    <div>
      <Head>
        <title>Login with github</title>
      </Head>
      <div className={styles.form}>
        <div className={styles.login_container}>
          <h3>LOGIN</h3>
          <div className={styles.social_icons}>
            <GithubOutlined onClick={() => signIn("github", {})} />
          </div>
        </div>

        {/* <hr /> */}
        {/* <form>
          <label htmlFor="">Your Email</label>
          <input type="email" />
          <label htmlFor="">Your Password</label>
          <input type="password" />
          <Button>Login</Button>
        </form> */}
      </div>
    </div>
  );
};

export default LoginPage;
