/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/anchor-has-content */
/**
 *
 * Footer
 *
 */

import React from "react";
import { Layout, Row, Col } from "antd";
import classnames from "classnames";
import { Link } from "react-router-dom";

const { Footer } = Layout;
const FooterComp = (props) => {

  return (
    <div className={classnames("site-layout-footer")}>
      <Footer className="app-layout-footer">
        <div
          className="app-layout-footer-join-adiclub"
          style={{
            background: "rgb(237, 231, 52)",
            width: "100%",
          }}
        >
          <h2>JOIN OUR ADICLUB & GET 15% OFF</h2>
        </div>
        <div
          className="app-layout-foote-list"
          style={{
            background: "rgb(255, 255, 255);",
            width: "100%",
          }}
        >
          <Row className="container-footer-red">
            <Col
              {...{
                xs: { span: 24 },
                sm: { span: 8 },
                md: { span: 6 },
                lg: { span: 5 },
                xl: { span: 4 },
                xxl: { span: 4 },
              }}
            >
              <Row className="container-footer-red">
                <h2>PRODUCTS</h2>
              </Row>
              <Row className="container-footer-red">
                <a href="/Shoess" className="item-footer-column">
                  {"Shoes"}
                </a>
              </Row>
              <Row className="container-footer-red">
                <a href="/Clothing" className="item-footer-column">
                  {"Clothing"}
                </a>
              </Row>{" "}
              <Row className="container-footer-red">
                <Link to="/Accessories" className="item-footer-column">
                  {"Accessories"}
                </Link>
              </Row>
            </Col>
            <Col
              {...{
                xs: { span: 24 },
                sm: { span: 16 },
                md: { span: 3 },
                lg: { span: 3 },
                xl: { span: 3 },
                xxl: { span: 3 },
              }}
            >
              <Row className="container-footer-red">
                <h2>SPORTS</h2>
              </Row>
              <Row className="container-footer-red">
                <a href="/Shoess" className="item-footer-column">
                  {"Shoes"}
                </a>
              </Row>
              <Row className="container-footer-red">
                <a href="/Clothing" className="item-footer-column">
                  {"Clothing"}
                </a>
              </Row>{" "}
              <Row className="container-footer-red">
                <a href="/Accessories" className="item-footer-column">
                  {"Accessories"}
                </a>
              </Row>
            </Col>
            <Col
              {...{
                xs: { span: 24 },
                sm: { span: 8 },
                md: { span: 3 },
                lg: { span: 3 },
                xl: { span: 3 },
                xxl: { span: 3 },
              }}
            >
              <Row className="container-footer-red">
                <h2>COLLECTIONS</h2>
              </Row>
              <Row className="container-footer-red">
                <a href="/Shoess" className="item-footer-column">
                  {"Shoes"}
                </a>
              </Row>
              <Row className="container-footer-red">
                <a href="/Clothing" className="item-footer-column">
                  {"Clothing"}
                </a>
              </Row>{" "}
              <Row className="container-footer-red">
                <a href="/Accessories" className="item-footer-column">
                  {"Accessories"}
                </a>
              </Row>
            </Col>
            <Col
              {...{
                xs: { span: 24 },
                sm: { span: 8 },
                md: { span: 3 },
                lg: { span: 3 },
                xl: { span: 3 },
                xxl: { span: 3 },
              }}
            >
              <Row className="container-footer-red">
                <h2>SUPPORT</h2>
              </Row>
              <Row className="container-footer-red">
                <a href="/Shoess" className="item-footer-column">
                  {"Shoes"}
                </a>
              </Row>
              <Row className="container-footer-red">
                <a href="/Clothing" className="item-footer-column">
                  {"Clothing"}
                </a>
              </Row>{" "}
              <Row className="container-footer-red">
                <a href="/Accessories" className="item-footer-column">
                  {"Accessories"}
                </a>
              </Row>
            </Col>
            <Col
              {...{
                xs: { span: 24 },
                sm: { span: 8 },
                md: { span: 3 },
                lg: { span: 3 },
                xl: { span: 3 },
                xxl: { span: 3 },
              }}
            >
              <Row className="container-footer-red">
                <h2>COMPANY INFO</h2>
              </Row>
              <Row className="container-footer-red">
                <a href="/Shoess" className="item-footer-column">
                  {"Shoes"}
                </a>
              </Row>
              <Row className="container-footer-red">
                <a href="/Clothing" className="item-footer-column">
                  {"Clothing"}
                </a>
              </Row>{" "}
              <Row className="container-footer-red">
                <a href="/Accessories" className="item-footer-column">
                  {"Accessories"}
                </a>
              </Row>
            </Col>
          </Row>
        </div>
      </Footer>
    </div>
  );
};

export default FooterComp;
