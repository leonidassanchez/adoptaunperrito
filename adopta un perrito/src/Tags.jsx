import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Tags = ({ texto, color }) => {
  return <span className={`badge badge-${color}`}>{texto}</span>;
};

export default Tags;
