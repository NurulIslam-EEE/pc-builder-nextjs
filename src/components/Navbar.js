import { Layout, Menu, Button } from "antd";
const { Header } = Layout;
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, message, Space } from "antd";

const Navbar = () => {
  const { data: session } = useSession();

  console.log("ssss", session?.user?.email);

  const onClick = ({ key }) => {
    message.info(`Click on item ${key}`);
  };
  const items = [
    {
      label: "CPU / Processor",
      key: "1",
    },
    {
      label: "Motherboard",
      key: "2",
    },
    {
      label: "RAM",
      key: "3",
    },
    {
      label: "Power Supply Unit",
      key: "3",
    },
    {
      label: "Storage Device",
      key: "3",
    },
    {
      label: "Monitor",
      key: "3",
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
