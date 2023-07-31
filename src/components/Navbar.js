import { Layout, Menu, Button } from "antd";
const { Header } = Layout;
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, message, Space } from "antd";
import { useRouter } from "next/router";

const Navbar = () => {
  const { data: session } = useSession();

  // console.log("ssss", session?.user?.email);
  const router = useRouter();

  const onClick = ({ key }) => {
    router.push(`${key}`);
  };
  const items = [
    {
      label: "CPU / Processor",
      key: "/category/Processor",
      link: "/category/Processor",
    },
    {
      label: "Motherboard",
      key: "/category/Processor",
    },
    {
      label: "RAM",
      key: "/category/Processor",
    },
    {
      label: "Power Supply Unit",
      key: "/category/Processor",
    },
    {
      label: "Storage Device",
      key: "/category/Storage Device",
    },
    {
      label: "Monitor",
      key: "/category/Monitor",
    },
    {
      label: "Others",
      key: "/category/Others",
    },
  ];

  return (
    <Header
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
      className="header"
    >
      <div className="demo-logo">
        <Link href="/">TECH WORLD</Link>
      </div>
      <Menu theme="dark" mode="horizontal">
        {/* drop */}
        <Dropdown
          menu={{
            items,
            onClick,
          }}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space className="nav-link">
              Categories
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
        <Link
          style={{ textDecoration: "none", color: "white" }}
          href="/pc_builder"
          className="nav-link"
        >
          <items>PC Builder</items>
        </Link>
        {!session?.user?.email && (
          <Link
            style={{ textDecoration: "none", color: "white" }}
            href="/login"
            className="nav-link"
          >
            <items>Login</items>
          </Link>
        )}
        {session?.user?.email && (
          <items className="logout-btn-container">
            <Button
              type="primary"
              danger
              onClick={signOut}
              className="nav-link logout-btn"
            >
              Logout
            </Button>
          </items>
        )}
      </Menu>
    </Header>
  );
};
export default Navbar;
