/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/jsx-no-comment-textnodes */
/**
 *
 * CardCategories
 *
 */

import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Tooltip } from "antd";

const CardCategories = (props) => {
  const { src, srcChange, to, title, description, price } = props;
  const [srcImage, setSrcImage] = useState(src);
  const cambiarImagen = () => {
    if (srcImage === src) {
      setSrcImage(srcChange);
    } else {
      setSrcImage(src);
    }
  };
  return (
    <div
      className="class-card-categories"
      key={`key${title}`}
    >
      <div className="class-img-item-category">
        <img
          className="class-img-item-category"
          alt="alt"
          src={`${srcImage}`}
          onMouseOver={cambiarImagen}
          onMouseOut={cambiarImagen}
        />
        <div className="class-price">{price}</div>
      </div>
      <div className="class-title-item-category">
        <Tooltip title={title}>
          <Link to={to}>{title}</Link>
        </Tooltip>
      </div>
      <span className="class-description-item-category">{description}</span>
    </div>
  );
};

CardCategories.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string.isRequired,
  src: PropTypes.string,
  srcChange: PropTypes.string,
  to: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default CardCategories;
