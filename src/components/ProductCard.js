import React from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
const { Meta } = Card;
const ProductCard = ({ data }) => (
  <Card
    hoverable
    style={{ width: 240 }}
    cover={
      <img
        alt="example"
        src="https://www.startech.com.bd/image/cache/catalog/graphics-card/colorful/geforce-rtx-4080-16gb-nb-ex-v/geforce-rtx-4080-16gb-nb-ex-v-01-200x200.webp"
      />
    }
  >
    <Meta title="Europe Street beat" />
    <p>Monitor</p>
    <p>2228</p>
    <p>stock out</p>
    <p>5.5/5</p>
  </Card>
);
export default ProductCard;
