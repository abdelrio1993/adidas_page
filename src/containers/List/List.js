import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, notification, Skeleton } from "antd";
import Card from "../../components/Card/index";
import map from "lodash/map";
import { productsListAction } from "./reducers/ListReducer";
import { getProducts } from "../../api/list";
import { openNotificationSuccess } from "../../utils";

const List = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.productsList);
  const [isLoadinProducts, setIsLoadingProducts] = useState(false);
  const [dataListPoducts, setDataListProducts] = useState(list);

  const [api] = notification.useNotification();
  useEffect(() => {
    getProducts(
      setIsLoadingProducts,
      setDataListProducts,
      openNotificationSuccess,
      dispatch,
      productsListAction,
      api
    );
  }, [api, dispatch]);

  return !isLoadinProducts ? (
    <Row
      className="app-row-categories"
      gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
    >
      {map(dataListPoducts, (args, index) => {
        const {
          Name,
          Category,
          Image1,
          to,
          Color_detail: image2 = [],
          Price,
        } = args;
        const srcSSource = map(
          image2,
          (args, index) => args.image_url
        );
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
              src={Image1}
              srcChange={srcSSource[0]}
              title={Name}
              to={to}
              description={Category}
              price={Price}
            />
          </Col>
        );
      })}
    </Row>
  ) : (
    <Skeleton />
  );
};

export default List;
