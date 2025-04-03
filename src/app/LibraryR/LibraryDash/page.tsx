"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const LibraryDashboard: React.FC = () => {
  const [selectedBook, setSelectedBook] = useState<any | null>(null);

  const books = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", image: "/tgg.jpg", description: "A novel set in the Roaring Twenties, exploring themes of wealth, love, and the American Dream." },
    { id: 2, title: "1984", author: "George Orwell", image: "/path-to-images/1984.png", description: "A dystopian novel about totalitarianism, surveillance, and the suppression of truth." },
    { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee", image: "/path-to-images/to-kill-a-mockingbird.png", description: "A classic novel that deals with racial injustice in the Deep South during the 1930s." },
    { id: 4, title: "Moby Dick", author: "Herman Melville", image: "/path-to-images/moby-dick.png", description: "A gripping tale of Captain Ahab’s obsessive quest to hunt down the white whale, Moby Dick." },
    { id: 5, title: "Pride and Prejudice", author: "Jane Austen", image: "/path-to-images/pride-and-prejudice.png", description: "A novel that delves into the issues of marriage, money, and love in 19th-century England." },
    { id: 6, title: "The Catcher in the Rye", author: "J.D. Salinger", image: "/path-to-images/catcher-in-the-rye.png", description: "The story of Holden Caulfield, a disillusioned teenager struggling with the complexity of adulthood." },
  ];

  const openModal = (book: any) => setSelectedBook(book);
  const closeModal = () => setSelectedBook(null);

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-100 to-orange-200">
      {/* Header */}
      <header className="w-full flex justify-between items-center bg-white/50 backdrop-blur-md shadow-md py-6 px-12 fixed top-0 left-0 right-0 z-10">
        <h1 className="text-3xl font-bold text-black">📚 Library Dashboard</h1>
        <div className="flex items-center space-x-4">
          <span className="text-lg text-black font-medium">Vince Carlo Noora</span>
          <img src="/me.jpg" alt="User Avatar" className="w-16 h-16 object-cover rounded-lg border-2 border-black shadow-lg" />
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-28 px-8 mt-2">
        {/* Pill-style text container */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block px-8 py-3 bg-indigo-500 text-white rounded-full shadow-lg">
            <p className="text-xl font-medium">Browse through our extensive collection of books 📖</p>
          </div>
        </motion.div>

        {/* Book Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {books.map((book) => (
            <motion.div
              key={book.id}
              className="w-full max-w-sm bg-white shadow-lg rounded-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img src={book.image} alt={book.title} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{book.title}</h3>
                <p className="text-sm text-gray-500">by {book.author}</p>
                <p className="text-gray-600 mt-3 text-base">{book.description}</p>
                <button
                  className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition-colors"
                  onClick={() => openModal(book)}
                >
                  View More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Modal */}
      {selectedBook && (
        <div className="fixed inset-0 z-50 flex justify-center items-center">
          {/* Backdrop Image */}
          <div className="absolute inset-0 bg-cover bg-center backdrop-blur-md"></div>

          <motion.div
            className="bg-white rounded-lg w-96 p-8 relative z-10 overflow-y-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <button className="absolute top-2 right-2 text-gray-500 hover:text-indigo-500" onClick={closeModal}>X</button>
            <h2 className="text-2xl font-bold text-gray-800">{selectedBook.title}</h2>
            <p className="text-sm text-gray-500 mt-2">by {selectedBook.author}</p>
            <img src={selectedBook.image} alt={selectedBook.title} className="w-full h-64 object-cover mt-4 rounded-lg" />
            <p className="text-gray-600 mt-4 text-base">{selectedBook.description}</p>
            <button className="mt-6 px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition-colors" onClick={closeModal}>
              Close
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default LibraryDashboard;
