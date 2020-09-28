import React, { Component } from "react";
import _ from "lodash";
export default (Movieslist, pageSize, currentPage) => {
  const startIndex = (currentPage - 1) * pageSize;
  return _(Movieslist).slice(startIndex).take(pageSize).value();
};
