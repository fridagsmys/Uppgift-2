import { Outlet } from "react-router-dom";
import "../styles/main.scss";
import { Navbar } from "../components/Navbar";

export const Layout = () => {
  return (
    <>
      <div className="page-container">
        <header>
          <Navbar />
        </header>
        <main>
          <Outlet />
        </main>
        <footer></footer>
      </div>
    </>
  );
};
