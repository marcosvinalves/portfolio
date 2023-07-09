import PaginationBS from "react-bootstrap/Pagination";
import "./Pagination.css";

export const Pagination = ({
    handlePageChange,
    currentPage,
    pageCount
}) => {
  return (
    <div className="d-flex justify-content-center mt-3">
      <PaginationBS>
        <PaginationBS.Prev
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        />
        {Array.from({ length: pageCount }).map((_, index) => (
          <PaginationBS.Item
            key={index + 1}
            active={currentPage === index + 1}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </PaginationBS.Item>
        ))}
        <PaginationBS.Next
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === pageCount}
        />
      </PaginationBS>
    </div>
  );
};