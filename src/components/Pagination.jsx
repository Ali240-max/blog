function Pagination({ currentPage, setCurrentPage, articlesLength }) {
  const totalPages = Math.floor(articlesLength / 4);
  return (
    <div className="flex gap-4 items-center justify-center">
      <button
        className={`border-prussianblue border rounded-md px-5 py-3  text-prussianblue font-semibold
          cursor-pointer hover:bg-silverlakeblue hover:text-white transition-all duration-300 transform hover:border-white inline-block flex-shrink-0  disabled:bg-none disabled:cursor-not-allowed disabled:hover:bg-none
          max-sm:px-3 max-sm:py-2 max-sm:text-sm`}
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        Previous
      </button>
      {Array.from({ length: totalPages })
        .fill(1)
        .map((_, index) => (
          <button
            className={`border-prussianblue border rounded-md px-4 py-3  text-prussianblue font-semibold
            cursor-pointer hover:bg-silverlakeblue hover:text-white transition-all duration-300 transform hover:border-white inline-block flex-shrink-0
            max-sm:px-2 max-sm:py-2 max-sm:text-sm
            ${
              currentPage === index + 1
                ? "bg-silverlakeblue text-white border-0"
                : ""
            }`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}

      <button
        className={`border-prussianblue border rounded-md px-5 py-3  text-prussianblue font-semibold
          cursor-pointer hover:bg-silverlakeblue hover:text-white transition-all duration-300 transform hover:border-white inline-block flex-shrink-0
          disabled:bg-none disabled:cursor-not-allowed disabled:hover:bg-none
          max-sm:px-3 max-sm:py-2 max-sm:text-sm`}
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage >= totalPages}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
