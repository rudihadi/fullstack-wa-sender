// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import App from "./App.jsx";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// );

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // Import komponen baru
import "bootstrap-icons/font/bootstrap-icons.css";

// Import halaman-halaman Anda
import App from "./App.jsx";
import Dashboard from "./pages/DashboardPage.jsx";

// 1. Definisikan semua rute di sini
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Halaman utama
  },
  {
    path: "/dashboard",
    element: <Dashboard />, // Halaman dashboard baru
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* 2. Gunakan RouterProvider dan masukkan variabel router */}
    <RouterProvider router={router} />
  </StrictMode>,
);
