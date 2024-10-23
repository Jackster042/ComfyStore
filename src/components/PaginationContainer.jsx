import React from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

const PaginationContainer = () => {
  const navigate = useNavigate();
  const { meta } = useLoaderData();
  const { pageCount, page } = meta.pagination;
  const pages = Array.from({ length: pageCount }, (_, index) => {
    return index + 1;
  });
  const { search, pathname } = useLocation();
  // console.log(pages);
  // console.log(meta);

  const handlePageNumber = (pageNumber) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set("page", pageNumber);
    navigate(`${pathname}?${searchParams.toString()}`);
  };

  if (pageCount < 2) return null;

  return (
    <div className="mt-16 flex justify-end">
      <div className="join">
        {/* PREV BUTTON */}
        <button
          className="btn btn-xs sm:btn-md join-item"
          onClick={() => {
            let prevPage = page - 1;
            if (prevPage < 1) prevPage = pageCount;
            handlePageNumber(prevPage);
          }}
        >
          Prev
        </button>
        {/* PAGE NUMBER */}
        {pages.map((pageNumber) => {
          return (
            <button
              key={pageNumber}
              className={`btn btn-xs sm:btn-md border-none join-item ${
                pageNumber == page ? "bg-base-300 border-base-300" : ""
              }`}
              onClick={() => {
                handlePageNumber(pageNumber);
              }}
            >
              {pageNumber}
            </button>
          );
        })}
        {/* NEXT BUTTON */}
        <button
          className="btn btn-xs sm:btn-md join-item"
          onClick={() => {
            let nextPage = page + 1;
            if (nextPage > pageCount) nextPage = 1;
            handlePageNumber(nextPage);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginationContainer;
