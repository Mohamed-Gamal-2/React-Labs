import React from "react";
import styles from "./Layout.module.css";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import JWTcontextProvider from "../../Contexts/JWTcontext";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

export default function Layout() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <JWTcontextProvider>
          <Navbar />
          <div className={`${styles.stayBottom} container`}>
            <Outlet />
          </div>
          <Footer />
        </JWTcontextProvider>
      </QueryClientProvider>
    </>
  );
}
