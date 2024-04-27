import React, { useEffect, useMemo, useState } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import { Layout, theme, Typography, Button, Input, notification } from "antd";
import { useDispatch, useSelector } from "react-redux";

import List from "./containers/List/List";
import Details from "./containers/List/Details";
import Footer from "./components/Footer/index";
import { productsListAction } from "../src/containers/List/reducers/ListReducer";
import { getProducts } from "../src/api/list";
import { openNotificationSuccess } from "../src/utils";
const { Title, Text, Sider } = Typography;
const { Header, Content } = Layout;
const { Search } = Input;

const Context = React.createContext({
  name: "Default",
});

const App = () => {
  let navigate = useNavigate();
  let location = useLocation();

  const {
    token: { colorBgContainer },
  } = theme.useToken();

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

  useEffect(() => {
    navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const contextValue = useMemo(
    () => ({
      name: "Ant Design",
    }),
    []
  );

  return (
    <>
      <Context.Provider value={contextValue}>
        <Layout className="site-layout">
          <Header style={{ padding: 0, background: colorBgContainer }}>
            <div className="container-img-logo">
              <svg viewBox="100 100 50 32" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M 150.07 131.439 L 131.925 100 L 122.206 105.606 L 137.112 131.439 L 150.07 131.439 Z M 132.781 131.439 L 120.797 110.692 L 111.078 116.298 L 119.823 131.439 L 132.781 131.439 Z M 109.718 121.401 L 115.509 131.439 L 102.551 131.439 L 100 127.007 L 109.718 121.401 Z"
                  fill="black"
                ></path>
              </svg>
            </div>
            <div
              classname="headers-item"
              style={{ padding: 0, background: colorBgContainer }}
            >
              <a href="/hep" className="item-help" style={{ padding: "8px" }}>
                {"help"}
              </a>
              <a
                href="/orders"
                className="item-orders"
                style={{ padding: "8px" }}
              >
                {"orders and returns"}
              </a>
              <a href="/join" className="item-join" style={{ padding: "8px" }}>
                {"join adiClub"}
              </a>
            </div>
            <div className="class-search">
              <Search
                className="input-search"
                placeholder="Search"
                style={{
                  width: 200,
                }}
              />
            </div>
          </Header>
          <Content
            style={{
              textAlign: "center",
              // lineHeight: '120px',
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            {location.pathname === "/" && (
              <>
                <span className="page-info">
                  <Title level={5}>
                    {"Lionel Messi Jerseys, Cleats, & Apparel"}
                  </Title>
                </span>
                <span className="page-descrption">
                  <Text>
                    {" "}
                    {
                      "Gear up in Lionel Messi jerseys, cleats and apparel to honor the newly-minted world champion in his arrival to Inter Miami CF. "
                    }
                  </Text>
                </span>
                <span className="page-show_more">
                  <a href="/Show more" className="item-footer-column">
                    {"Show more"}
                  </a>
                </span>
                <Button className="btn-filter">Filter & Sort</Button>
                <List
                  className="list-container"
                  dataListPoducts={dataListPoducts}
                  isLoadinProducts={isLoadinProducts}
                />
              </>
            )}
          
            <Routes>
              <Route
                path="/details"
                element={
                  <Details
                    className="app-products-details"
                    dataListPoducts={dataListPoducts}
                  />
                }
              />
            </Routes>
          </Content>

          <Footer className="max-container" />
        </Layout>
      </Context.Provider>
    </>
  );
};

export default App;
