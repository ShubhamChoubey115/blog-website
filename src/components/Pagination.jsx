import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Pagination() {
  const { page, handlePageChange, totalPages ,theme } = useContext(AppContext);

  if (!totalPages) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 py-2 border-t-2 border-t-gray-300">
      <div className={`${theme ==="white" ? ("bg-white text-black py-2 fixed bottom-0 inset-x-0"):("bg-black text-white py-2 fixed bottom-0 inset-x-0")}`}>
      <div className="flex items-center gap-x-3 w-11/12 max-w-2xl mx-auto">
        {page > 1 && (
          <button
            onClick={() => handlePageChange(page - 1)}
            className="border-2  py-1 px-4 rounded-md"
          >
            Previous
          </button>
        )}
        {page < totalPages && (
          <button
            onClick={() => handlePageChange(page + 1)}
            className="border-2 py-1 px-4 rounded-md"
          >
            Next
          </button>
        )}
        <p className="text-sm font-semibold ml-auto">
          Page {page} of {totalPages}
        </p>
      </div>
      </div>
    </div>
  );
}
