"use client";
interface PaginationProps {
  page: number;
  giveCount: () => number;
  setPage: (newPage: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  page,
  giveCount,
  setPage,
}) => {
  const totalPages = Math.ceil(giveCount() / 10);

  const handlePageChange = (newPage: number) => {
    console.log(page, giveCount(), totalPages);
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  return (
    <div className="bg-white text-star-wars flex items-center justify-center">
      {page > 1 && (
        <button
          className="text-black py-2 px-4 rounded-l hover:bg-blue"
          onClick={() => handlePageChange(page - 1)}
        >
          Previous
        </button>
      )}

      {page - 1 >= 1 && (
        <button
          className="bg-yellow-500 text-black py-2 px-4 hover:bg-blue"
          onClick={() => handlePageChange(page - 1)}
        >
          {page - 1}
        </button>
      )}

      <button className="bg-yellow-500 text-black py-2 px-4 font-bold">
        {page}
      </button>

      {page < totalPages && (
        <button
          className="bg-yellow-500 text-black py-2 px-4 hover:bg-blue"
          onClick={() => handlePageChange(page + 1)}
        >
          {page + 1}
        </button>
      )}

      {page < totalPages && (
        <button
          className="bg-yellow-500 text-black py-2 px-4 rounded-r hover:bg-blue"
          onClick={() => handlePageChange(page + 1)}
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
