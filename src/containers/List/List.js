import React from "react";
import PropTypes from "prop-types";
import { Row, Col, Skeleton } from "antd";
import Card from "../../components/Card/index";
import map from "lodash/map";

const List = (props) => {
  const { dataListPoducts, isLoadinProducts } = props;
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
          to = "details",
          Color_detail: image2 = [],
          Price,
        } = args;
        const srcSource = map(image2, (args, index) => args.image_url);

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
              srcChange={srcSource[0]}
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

List.propTypes = {
  dataListPoducts: PropTypes.array.isRequired,
  isLoadinProducts: PropTypes.bool,
};

export default List;
