import React, { useState } from 'react';

const Paginate = ({ currentPage, onPageChange, totalPages }) => {
  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1); // Gọi hàm gọi lại để cập nhật trang trước đó
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1); // Gọi hàm gọi lại để cập nhật trang kế tiếp
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 10;
    const halfMaxVisiblePages = Math.floor(maxVisiblePages / 2);

    let startPage = currentPage - halfMaxVisiblePages;
    let endPage = currentPage + halfMaxVisiblePages;

    if (startPage < 1) {
      startPage = 1;
      endPage = maxVisiblePages;
    }

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = totalPages - maxVisiblePages + 1;
      if (startPage < 1) {
        startPage = 1;
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => onPageChange(i)} // Sửa setCurrentPage thành onPageChange
          className={`${currentPage === i ? 'bg-secondary-color text-white' : 'border-2 border-secondary-color bg-white text-gray-800'} h-[40px] w-[40px] rounded font-bold`}
        >
          {i}
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="pagination flex w-full flex-row justify-center gap-3 pb-4 pt-8">
      <button
        onClick={handlePrevPage}
        className="h-[40px] w-[40px] rounded bg-secondary-color font-bold text-white "
      >
        {'<'}
      </button>
      {renderPageNumbers()}

      {totalPages > 10 && <span>...</span>}
      <button
        onClick={handleNextPage}
        className="h-[40px] w-[40px] rounded bg-secondary-color font-bold text-white "
      >
        {'>'}
      </button>
    </div>
  );
};

export default Paginate;
