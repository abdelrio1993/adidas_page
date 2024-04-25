import axios from "axios";
import { URL_BASE } from "../constants";

export const getProducts = (
  setIsLoadingProducts,
  openNotificationSuccess,
  dispatch,
  productsListAction,
  api
) => {
  setIsLoadingProducts(true);

  openNotificationSuccess(api, "bottomRight", "Products loaded correctly.");
  axios
    .get(`${URL_BASE}/products`)
    .then((response) => {
      setTimeout(() => {
        dispatch(productsListAction(response.data));
        setIsLoadingProducts(false);
        openNotificationSuccess(api, "bottomRight", "Products loaded correctly.");
      }, 1500);
    })
    .catch((error) => {
      console.log("error", error);
    });
};




