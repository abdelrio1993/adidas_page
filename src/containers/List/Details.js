/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import PropTypes from "prop-types";
import map from "lodash/map";
import { Skeleton, Collapse, Typography, Row, Col, Button ,Divider} from "antd";
import {
  CalendarOutlined,
  ShoppingCartOutlined,
  SelectOutlined,
} from "@ant-design/icons";
const { Title } = Typography;
const { Panel } = Collapse;
const Details = (props) => {
  const { dataListPoducts, isLoadinProducts } = props;
  const [activeCollapseKey, setActiveKey] = useState("");
  const elementDetails = dataListPoducts[0];
  const {
    Description_title,
    Description_content,
    Care: { title, content = [] },
    Image1,
    Reviews: { votes },
    Name,
    Price,
    Promo_apply,
  } = elementDetails;

  const onChange = (keys) => {
    const key = keys[keys.length - 1];
    setActiveKey(key);
  };
  return !isLoadinProducts ? (
    <>
      <div className="imgWrapper4">
        <div className="imgpRroduct1">
          <img src={Image1} />
        </div>
        <div className="imgpRroduct1">
          <img src={Image1} />
        </div>
      </div>
      <div className="imgWrapper4">
        <div className="imgpRroduct2">
          <img src={Image1} />
        </div>
        <div className="imgpRroduct2">
          <img src={Image1} />
        </div>
      </div>

      <div className="general-information">
        <span className="description_title">
          <Title level={5}>{Name}</Title>
        </span>
        <span className="price_title">
          <Title level={5}>{Price}</Title>
        </span>
        <span className="promo_apply">{Promo_apply}</span>
        <span className="sizes">
          <Title level={5}>Sizes</Title>
        </span>
        <div className="general-buttoms">
          <Button className="buttom-size">XS</Button>
          <Button className="buttom-size">S</Button>
          <Button className="buttom-size">M</Button>
          <Button className="buttom-size">L</Button>
          <Button className="buttom-size">XL</Button>
        </div>
        <div className="general-descriptions">
          <span className="descriptions-1">
            4 interest-free payments of $45.00 with Klarna.
          </span>
        </div>
        <Divider />
        <div className="general-descriptions">
          <ShoppingCartOutlined />
          <span className="descriptions-2">Check if available in store</span>
        </div>
        <Divider />
        <div className="general-descriptions">
          <SelectOutlined />
          <span className="descriptions-3">
            Join adiClub to get unlimited free standard shiping, returns, &
            exchanges
          </span>
        </div>
      </div>

      <Collapse
        className="app-collapse-no-bdr ant-descriptions-header"
        expandIconPosition="right"
        defaultActiveKey={[activeCollapseKey]}
        activeKey={activeCollapseKey}
        onChange={onChange}
      >
        <Panel header={`Reviews (${votes})`} showArrow></Panel>
        <Panel header="Description" showArrow>
          <div className="contenedor-Description">
            <div className="contenedor-text">
              <span className="description_title">
                <Title level={5}>{Description_title}</Title>
              </span>
              <span className="description_content">{Description_content}</span>
            </div>
            <div className="imgpRroduct177">
              <img src={Image1} />
            </div>
          </div>
        </Panel>
        <Panel header="Details" showArrow></Panel>
        <Panel header="Care" showArrow>
          <div className="contenedor-text">
            <span className="description_title">
              <Title level={5}>{title}</Title>
            </span>
          </div>
          {map(content, (args) => {
            return (
              <Row justify="start">
                <Col className="care-col">
                  <Row>
                    <Col className="text-initial">
                      <CalendarOutlined />
                    </Col>
                    <Col span={20} className="text-initial">
                      <div className="item">{args}</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            );
          })}
        </Panel>
      </Collapse>
    </>
  ) : (
    <Skeleton />
  );
};

Details.propTypes = {
  dataListPoducts: PropTypes.array.isRequired,
  isLoadinProducts: PropTypes.bool,
};

export default Details;
