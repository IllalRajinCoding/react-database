import useDarkMode from "../hooks/useDarkMode";


const Login = () => {
    const { darkMode, toggleDarkMode } = useDarkMode();

    return (

        <div className="bg-gray-100 dark:bg-sky-900 flex items-center justify-center h-screen">
            <div className="absolute right-4 top-4">
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
            </div>

            <div class="bg-white dark:bg-sky-800 p-8 rounded-lg shadow-xl w-96 transition-all duration-300 flex flex-col items-center relative">

                <details class="group w-full">
                    <summary class="flex justify-between items-center cursor-pointer list-none">
                        <h1 class="text-2xl font-bold text-sky-800 dark:text-sky-100 group-open:text-sky-600 dark:group-open:text-sky-300 transition-colors">
                            Masuk ke Halaman Admin
                        </h1>
                        <svg class="w-6 h-6 text-sky-700 dark:text-sky-300 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </summary>
                    <form action="#" method="post" class="mt-6 w-full">
                        <div class="mb-6">
                            <label for="user" class="block text-sm font-medium text-sky-700 dark:text-sky-300 mb-1">Username</label>
                            <input type="text" id="user" placeholder="Username" required
                                class="w-full px-4 py-2 rounded-lg border border-sky-300 dark:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 dark:focus:ring-sky-400 bg-white dark:bg-sky-700 text-sky-900 dark:text-sky-100 transition-colors" />
                        </div>
                        <div class="mb-6">
                            <label for="pass" class="block text-sm font-medium text-sky-700 dark:text-sky-300 mb-1">Password</label>
                            <input type="password" id="pass" placeholder="Password" required
                                class="w-full px-4 py-2 rounded-lg border border-sky-300 dark:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 dark:focus:ring-sky-400 bg-white dark:bg-sky-700 text-sky-900 dark:text-sky-100 transition-colors" />
                        </div>
                        <div>
                            <button type="submit"
                                class="w-full bg-sky-600 hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2">
                                Login
                            </button>
                        </div>
                    </form>
                </details>

                <div class="mt-6 w-full text-center border-t border-sky-100 dark:border-sky-700 pt-4">
                    <a href="../index.php" class="inline-flex items-center text-sm font-medium text-sky-600 dark:text-sky-300 hover:text-sky-800 dark:hover:text-sky-100 transition-colors duration-200 group">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 transition-transform duration-200 group-hover:-translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        <span class="border-b border-transparent group-hover:border-sky-400 dark:group-hover:border-sky-200">
                            Kembali
                        </span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Login;