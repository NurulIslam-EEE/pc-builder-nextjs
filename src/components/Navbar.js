import { Layout, Menu, Button } from "antd";
const { Header } = Layout;
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, message, Space } from "antd";
import { useRouter } from "next/router";

const Navbar = () => {
  const { data: session } = useSession();

  console.log("ssss", session?.user?.email);
  const router = useRouter();

  const onClick = ({ key }) => {
    router.push(`${key}`);
  };
  const items = [
    {
      label: "CPU / Processor",
      key: "/pc-builder/Processor",
      link: "/pc-builder/Processor",
    },
    {
      label: "Motherboard",
      key: "/pc-builder/Processor",
    },
    {
      label: "RAM",
      key: "/pc-builder/Processor",
    },
    {
      label: "Power Supply Unit",
      key: "/pc-builder/Processor",
    },
    {
      label: "Storage Device",
      key: "/pc-builder/Storage Device",
    },
    {
      label: "Monitor",
      key: "/pc-builder/Monitor",
    },
    {
      label: "Others",
      key: "3",
    },
  ];

  return (
    <Header
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div className="demo-logo">
        <Link
          href="/"
          style={{
            textDecoration: "none",
            color: "white",
            fontSize: "25px",
          }}
        >
          PC BUILDER
        </Link>
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        style={{
          width: "50%",
          display: "flex",
          fontSize: "15px",
          justifyContent: "space-between",
        }}
      >
        {/* drop */}
        <Dropdown
          menu={{
            items,
            onClick,
          }}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              Categories
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
        <Link
          style={{ textDecoration: "none", color: "white" }}
          href="/pc_builder"
        >
          <items>PC Builder</items>
        </Link>
        {!session?.user?.email && (
          <Link
            style={{ textDecoration: "none", color: "white" }}
            href="/login"
          >
            <items>Login</items>
          </Link>
        )}
        {session?.user?.email && (
          <items>
            <Button type="primary" danger onClick={signOut}>
              Logout
            </Button>
          </items>
        )}
      </Menu>
    </Header>
  );
};
export default Navbar;
