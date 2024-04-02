import { useEffect, useState } from "react";

export default function Pagination({ offset, setOffset, limit, totalCount }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [displayedPages, setDisplayedPages] = useState([]);
  const total = totalCount;

  useEffect(() => {
    // Update displayedPages when currentPage changes
    const totalPages = Math.ceil(total / limit);
    const maxDisplayedPages = 5; // Adjust as needed
    let startPage = Math.max(
      currentPage - Math.floor(maxDisplayedPages / 2),
      1
    );
    let endPage = Math.min(startPage + maxDisplayedPages - 1, totalPages);

    if (endPage - startPage + 1 < maxDisplayedPages) {
      startPage = Math.max(endPage - maxDisplayedPages + 1, 1);
    }

    let pages = [];
    if (startPage > 1) {
      pages.push(1); // Always include first page
      if (startPage > 2) {
        pages.push("..."); // Ellipsis if more than 2 pages away from the first page
      }
    }
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push("..."); // Ellipsis if more than 1 page away from the last page
      }
      pages.push(totalPages); // Always include last page
    }

    setDisplayedPages(pages);
  }, [currentPage, total, limit]);

  const nextPage = () => {
    if (offset + limit < total) {
      setOffset(offset + limit);
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (offset - limit >= 0) {
      setOffset(offset - limit);
      setCurrentPage(currentPage - 1);
    }
  };

  const goToPage = (page) => {
    const newOffset = limit * (page - 1);
    if (newOffset >= 0 && newOffset < total) {
      setOffset(newOffset);
      setCurrentPage(page);
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto mt-16 px-4 text-gray-600 md:px-8">
      <div
        className="hidden items-center justify-between sm:flex"
        aria-label="Pagination"
      >
        <button
          className="group text-gray-800 px-3 py-2 rounded-lg duration-150 hover:text-indigo-600 flex items-center gap-x-2 cursor-pointer disabled:text-gray-400 disabled:bg-transparent disabled:opacity-65 disabled:pointer-events-none"
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5 group-hover:-translate-x-1.5"
          >
            <path
              fillRule="evenodd"
              d="M18 10a.75.75 0 01-.75.75H4.66l2.1 1.95a.75.75 0 11-1.02 1.1l-3.5-3.25a.75.75 0 010-1.1l3.5-3.25a.75.75 0 111.02 1.1l-2.1 1.95h12.59A.75.75 0 0118 10z"
              clipRule="evenodd"
            />
          </svg>{" "}
          Prev
        </button>
        <ul className="flex items-center gap-2">
          {displayedPages.map((page, index) => (
            <li
              key={index}
              onClick={() => goToPage(page)}
              className={`px-3 py-2 rounded-lg duration-150 hover:text-indigo-600 hover:bg-indigo-50 cursor-pointer ${
                page === currentPage
                  ? "bg-indigo-50 text-indigo-600 font-medium"
                  : ""
              }`}
            >
              {page}
            </li>
          ))}
        </ul>
        <button
          className="group text-gray-800 px-3 py-2 rounded-lg duration-150 hover:text-indigo-600 flex items-center gap-x-2 cursor-pointer disabled:text-gray-400 disabled:bg-transparent disabled:opacity-65 disabled:pointer-events-none"
          onClick={nextPage}
          disabled={currentPage === Math.ceil(total / limit)}
        >
          Next
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5 group-hover:translate-x-1.5"
          >
            <path
              fillRule="evenodd"
              d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div className="flex items-center justify-between text-sm text-gray-600 font-medium sm:hidden">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="px-4 py-2 border rounded-lg duration-150 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
        >
          Prev
        </button>
        <div className="font-medium">
          Page {currentPage} of {130}
        </div>
        <button
          onClick={nextPage}
          disabled={currentPage === Math.ceil(total / limit)}
          className="px-4 py-2 border rounded-lg duration-150 hover:bg-gray-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
