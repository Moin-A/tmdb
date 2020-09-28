import React, { Component } from "react";
import _ from "lodash";

export default (props) => {
  const { itemsCount, pageSize, onPageChange, currentPage } = props;
  const pagesCount = itemsCount / pageSize;
  const range = _.range(1, pagesCount + 1);
  debugger;
  return (
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item">
          <a class="page-link" href="#">
            Previous
          </a>
        </li>
        {range.map((item) => (
          <li
            className={currentPage == item ? "page-item active" : "page-item"}
          >
            <a
              class="page-link"
              onClick={() => {
                onPageChange(item);
              }}
            >
              {item}
            </a>
          </li>
        ))}
        <li class="page-item">
          <a class="page-link" href="#">
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};
