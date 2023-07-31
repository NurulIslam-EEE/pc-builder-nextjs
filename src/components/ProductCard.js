import React from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
import { useRouter } from "next/router";
import Link from "next/link";

const ProductCard = ({ data }) => {
  const { Meta } = Card;
  const router = useRouter();

  const navigate = (id) => {
    router.push(`/${id}`);
  };

  return (
    <Link href={`/${data?._id}`}>
      <Card
        hoverable
        style={{ width: 240, marginTop: "10px" }}
        cover={<img alt="example" src={data?.image} />}
        // onClick={() => navigate(data?._id)}
      >
        <Meta title={data.productName} />
        <p>{data?.category[0]}</p>
        <p>{data?.price}</p>
        <p>{data?.status}</p>
        <p>{data?.averageRating}/5</p>
      </Card>
    </Link>
  );
};
export default ProductCard;
