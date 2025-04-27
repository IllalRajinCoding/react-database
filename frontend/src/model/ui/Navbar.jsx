import { Link } from "react-router-dom";
import { useState } from "react";
import useDarkMode from "../../hooks/useDarkMode"; // Pastikan path ini benar

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const { darkMode, toggleDarkMode } = useDarkMode();

    return (
        <nav>
            <div className="bg-blue-600 dark:bg-gray-800 p-4 shadow-md">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex space-x-6 items-center">
                        <Link
                            to="/"
                            className="text-white hover:text-blue-200 dark:hover:text-gray-300 font-medium transition-colors duration-200"
                        >
                            Home
                        </Link>

                        {/* Dropdown Menu */}
                        <div className="relative">
                            <button
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className="text-white hover:text-blue-200 dark:hover:text-gray-300 font-medium transition-colors duration-200 flex items-center"
                            >
                                Pembinaan
                                <svg
                                    className={`ml-1 h-4 w-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {isDropdownOpen && (
                                <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-700 rounded-md shadow-lg py-1 z-10">
                                    <Link
                                        to="/pembinaan/program"
                                        className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-600"
                                        onClick={() => setIsDropdownOpen(false)}
                                    >
                                        Program
                                    </Link>
                                    <Link
                                        to="/pembinaan/materi"
                                        className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-600"
                                        onClick={() => setIsDropdownOpen(false)}
                                    >
                                        Materi
                                    </Link>
                                    <Link
                                        to="/pembinaan/jadwal"
                                        className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-600"
                                        onClick={() => setIsDropdownOpen(false)}
                                    >
                                        Jadwal
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        {/* Dark Mode Toggle */}
                        <button
                            onClick={toggleDarkMode}
                            className="p-2 rounded-full bg-gray-200 dark:bg-sky-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-sky-600 transition-colors"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d={darkMode ?
                                        "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" :
                                        "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                                    }
                                />
                            </svg>
                        </button>

                        <Link
                            to="/login"
                            className="bg-white dark:bg-gray-700 text-blue-600 dark:text-white px-4 py-2 rounded-md hover:bg-blue-50 dark:hover:bg-gray-600 font-medium transition-colors duration-200"
                        >
                            Masuk/Login
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;