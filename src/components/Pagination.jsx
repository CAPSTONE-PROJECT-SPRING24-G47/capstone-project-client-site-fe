import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="bottom-0 flex justify-center bg-bg-secondary-color p-4">
      <div>
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="cursor-pointer rounded border px-4 py-2 hover:bg-blue-200"
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.5">
              <rect width="40" height="40" rx="4" fill="#8DCADC" />
              <path
                d="M23.9502 14.2625L18.2252 20L23.9502 25.7375L22.1877 27.5L14.6877 20L22.1877 12.5L23.9502 14.2625Z"
                fill="#E8F3EA"
              />
            </g>
          </svg>
        </button>
      </div>

      <ul className="flex space-x-2 ">
        {pages.map((page) => (
          <li
            key={page}
            className={`cursor-pointer rounded border px-4 py-2 ${
              currentPage === page
                ? 'border-1 border-accent-color bg-white text-black'
                : 'hover:bg-blue-200'
            }`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </li>
        ))}
      </ul>

      <div>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="cursor-pointer rounded border px-4 py-2 hover:bg-blue-200"
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="40" height="40" rx="4" fill="#8DCADC" />
            <path
              d="M16.0498 14.2625L21.7748 20L16.0498 25.7375L17.8123 27.5L25.3123 20L17.8123 12.5L16.0498 14.2625Z"
              fill="#E8F3EA"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
