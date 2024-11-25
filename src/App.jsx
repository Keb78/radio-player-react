import { useState } from "react";
import Station from "./Station";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(
    document.documentElement.classList.contains("dark")
  );

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-gray-600 dark:bg-gray-900 p-6"
      style={{
        backgroundImage: isDarkMode
          ? "url('/IMG_1699.jpg')" // Dark mode background image
          : "url('/IMG_1700.jpg')", // Light mode background image
        backgroundSize: "cover", // Ensure the image covers the entire view
        backgroundRepeat: "no-repeat", // Prevents repeating the image
        backgroundPosition: "center", // Center the image
      }}
    >
      <button
        onClick={toggleDarkMode}
        className={`custom-button px-5 py-2 mb-4 bg-gray-800 text-white rounded-3xl hover:bg-gray-700 dark:bg-gray-700 dark:text-black dark:hover:bg-gray-500 shadow-1xl transition-all ${
          isDarkMode ? "glowing-text-dark" : "glowing-text-light"
        }`}
      >
        {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>

      <div className="bg-gray-800 bg-opacity-30 shadow-2xl rounded-3xl p-6 sm:p-8 md:p-2 max-w-lg w-full prose lg:prose-2xl">
        <Station />
      </div>

      <footer className="text-gray-300 dark:text-gray-500 mt-2 text-sm sm:text-base">
        © {new Date().getFullYear()} Keb78 Radio Player 
      </footer>
    </div>
  );
}

export default App;
