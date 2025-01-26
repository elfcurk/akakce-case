import { getPageNumbers } from "~/utils/getPageNumbers";

function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number; 
  totalPages: number; 
  onPageChange: (page: number) => void; // Sayfa değişimi için callback
}) {
  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const pageNumbers = getPageNumbers(currentPage, totalPages);

  return (
    <div className="flex justify-center mt-6 items-center space-x-2">
      {/* İlk Sayfa Butonu */}
      <button
        onClick={() => handlePageChange(1)}
        disabled={currentPage === 1}
        className={`px-4 py-2 rounded ${currentPage === 1
          ? "bg-gray-200 text-gray-500 cursor-not-allowed"
          : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
      >
        İlk
      </button>

      {/* Sayfa Numaraları */}
      {pageNumbers.map((page, index) =>
        typeof page === "number" ? (
          <button
            key={index}
            onClick={() => handlePageChange(page)}
            className={`px-4 py-2 rounded ${currentPage === page
              ? "bg-blue-500 text-white font-bold"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
          >
            {page}
          </button>
        ) : (
          <span key={index} className="px-4 py-2 text-gray-500">
            ...
          </span>
        )
      )}

      {/* Son Sayfa Butonu */}
      <button
        onClick={() => handlePageChange(totalPages)}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 rounded ${currentPage === totalPages
          ? "bg-gray-200 text-gray-500 cursor-not-allowed"
          : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
      >
        Son
      </button>
    </div>
  );
}
export default Pagination;