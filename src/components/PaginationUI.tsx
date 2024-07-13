import { Pagination } from "react-bootstrap";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const PaginationUI: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  let items: JSX.Element[] = [];
  for (let number = 1; number <= totalPages; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === currentPage}
        onClick={() => onPageChange(number)}
      >
        {number}
      </Pagination.Item>
    );
  }
  return (
    <Pagination>
      <Pagination.Prev
        onClick={() => {
          if (currentPage > 1) {
            onPageChange(currentPage - 1);
          }
        }}
        disabled={currentPage === 1}
      />
      {items}
      <Pagination.Next
        onClick={() => {
          if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
          }
        }}
        disabled={currentPage === totalPages}
      />
    </Pagination>
  );
};

export default PaginationUI;
