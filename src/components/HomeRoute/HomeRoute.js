import React, { useContext, useEffect, useState } from "react";
import SearchContext from "../SearchContext";

const Home = () => {
  const { searchInput } = useContext(SearchContext);
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (searchInput.trim() === "") {
      setBooks([]);
      return;
    }

    const fetchBooks = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://openlibrary.org/search.json?q=${searchInput}`
        );
        const data = await response.json();
        console.log(data)
        setBooks(data.docs || []);
      } catch (error) {
        console.error("Error fetching books:", error);
      } finally {
        setLoading(false);
      }
    };

    const timer = setTimeout(fetchBooks, 500);
    return () => clearTimeout(timer);
  }, [searchInput]);


  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {loading && (
        <div className="flex justify-center items-center h-64">
          <div className="w-12 h-12 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {!loading && books.length === 0 && searchInput && (
        <p className="text-center text-gray-600 text-lg mt-10">
          No books found for <span className="font-semibold">{searchInput}</span>
        </p>
      )}
      {!loading && books.length > 0 && (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-6">
            {books.map((book) => {
              const title = book.title || "No Title";
              const authors = book.author_name
                ? book.author_name.join(", ")
                : "Unknown Author";
              const coverId = book.cover_i;
              const coverImage = coverId
                ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg` : ""

              return (
                <div
                  key={book.key}
                  className="bg-white rounded-lg h-max shadow hover:shadow-lg transition transform hover:scale-105 cursor-pointer"
                >
                  <img
                    src={coverImage}
                    alt={title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-3">
                    <h2 className="text-md font-semibold text-gray-800 truncate">
                      {title}
                    </h2>
                    <p className="text-sm text-gray-500 truncate">{authors}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
