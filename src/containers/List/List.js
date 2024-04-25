import React from "react";
import { Row, Col, Skeleton, Typography, Tooltip } from "antd";
import Card from "../../components/Card/index";
import map from 'lodash/map';

const List = () => {
  const datos = [
    {
      src: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/c19714ef84624c6e9fd171e5c17e123b_9366/adicolor-3-stripes-corset.jpg",
      title: "Adicolor 3-Stripes Corset",
      to: "https://www.adidas.com/us/adicolor-3-stripes-corset/IN8371.html",
      description: "Women's Originals",
      price: "$20",
      srcChange:
        "https://assets.adidas.com/images/w_180,f_auto,q_auto,fl_lossy,c_fill,g_auto/a9f0b5a54f3247e886b59792c5430703_9366/Adicolor_3-Stripes_Corset_Black_IU2407_21_model.jpg",
    },
    {
      src: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/c19714ef84624c6e9fd171e5c17e123b_9366/adicolor-3-stripes-corset.jpg",
      title: "Adicolor 3-Stripes Corset",
      to: "https://www.adidas.com/us/adicolor-3-stripes-corset/IN8371.html",
      description: "Women's Originals",
      price: "$20",
      srcChange:
        "https://assets.adidas.com/images/w_180,f_auto,q_auto,fl_lossy,c_fill,g_auto/a9f0b5a54f3247e886b59792c5430703_9366/Adicolor_3-Stripes_Corset_Black_IU2407_21_model.jpg",
    },
    {
      src: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/c19714ef84624c6e9fd171e5c17e123b_9366/adicolor-3-stripes-corset.jpg",
      title: "Adicolor 3-Stripes Corset",
      to: "https://www.adidas.com/us/adicolor-3-stripes-corset/IN8371.html",
      description: "Women's Originals",
      price: "$20",
      srcChange:
        "https://assets.adidas.com/images/w_180,f_auto,q_auto,fl_lossy,c_fill,g_auto/a9f0b5a54f3247e886b59792c5430703_9366/Adicolor_3-Stripes_Corset_Black_IU2407_21_model.jpg",
    },
    {
      src: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/c19714ef84624c6e9fd171e5c17e123b_9366/adicolor-3-stripes-corset.jpg",
      title: "Adicolor 3-Stripes Corset",
      to: "https://www.adidas.com/us/adicolor-3-stripes-corset/IN8371.html",
      description: "Women's Originals",
      price: "$20",
      srcChange:
        "https://assets.adidas.com/images/w_180,f_auto,q_auto,fl_lossy,c_fill,g_auto/a9f0b5a54f3247e886b59792c5430703_9366/Adicolor_3-Stripes_Corset_Black_IU2407_21_model.jpg",
    },
    {
      src: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/c19714ef84624c6e9fd171e5c17e123b_9366/adicolor-3-stripes-corset.jpg",
      title: "Adicolor 3-Stripes Corset",
      to: "https://www.adidas.com/us/adicolor-3-stripes-corset/IN8371.html",
      description: "Women's Originals",
      price: "$20",
      srcChange:
        "https://assets.adidas.com/images/w_180,f_auto,q_auto,fl_lossy,c_fill,g_auto/a9f0b5a54f3247e886b59792c5430703_9366/Adicolor_3-Stripes_Corset_Black_IU2407_21_model.jpg",
    },
  ];
  return (
    <Row
      className="app-row-categories"
      gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
    >
      {map(datos, (args, index) => {
        const { src, srcChange, title, to, description, price } = args;
        return (
          <Col
            className="item-categories"
            {...{
              xs: { span: 24 },
              sm: { span: 12 },
              md: { span: 8 },
              lg: { span: 8 },
              xl: { span: 4 },
              xxl: { span: 4 },
            }}
            key={index}
          >
            <Card
              className="card-container"
              src={src}
              srcChange={srcChange}
              title={title}
              to={to}
              description={description}
              price={price}
            />
          </Col>
        );
      })}
    </Row>
    // <Card
    //   className="card-container"
    //   src={
    //     "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/c19714ef84624c6e9fd171e5c17e123b_9366/adicolor-3-stripes-corset.jpg"
    //   }
    //   srcChange={
    //     "https://assets.adidas.com/images/w_180,f_auto,q_auto,fl_lossy,c_fill,g_auto/a9f0b5a54f3247e886b59792c5430703_9366/Adicolor_3-Stripes_Corset_Black_IU2407_21_model.jpg"
    //   }
    //   title={"Adicolor 3-Stripes Corset"}
    //   to={"https://www.adidas.com/us/adicolor-3-stripes-corset/IN8371.html"}
    //   description={"Women's Originals"}
    //   price="$20"
    // />
  );
};

export default List;
