import PaginationBS from "react-bootstrap/Pagination";
import "./Pagination.css";

export const Pagination = ({
  handlePageChange,
  cardsPerPage,
  currentPage,
  filteredCards,
}) => {
  const pageNumbers = Math.ceil(filteredCards.length / cardsPerPage);

  // Gera um array com os números de página
  const generatePageNumbers = () => {
    const pageNumbersArray = [];
    for (let i = 1; i <= pageNumbers; i++) {
      pageNumbersArray.push(i);
    }
    return pageNumbersArray;
  };

  return (
    <PaginationBS>
      <PaginationBS.Prev
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      />
      {generatePageNumbers().map((pageNumber) => (
        <PaginationBS.Item
          key={pageNumber}
          active={pageNumber === currentPage}
          onClick={() => handlePageChange(pageNumber)}
        >
          {pageNumber}
        </PaginationBS.Item>
      ))}
      <PaginationBS.Next
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === pageNumbers}
      />
    </PaginationBS>
  );
};