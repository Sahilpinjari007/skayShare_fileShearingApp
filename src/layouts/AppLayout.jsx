import React, { useContext, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Home from "../pages/Home";
import PageTopbar from "../components/PageTopbar";
import { Context } from "../context/AppContext";
import PageFooter from "../components/PageFooter";
import { useDispatch, useSelector } from "react-redux";
import { autoLogin, logOut } from "../features/auth/authSlice";
import { MoonLoader } from "react-spinners";
import { toast } from "react-toastify";

const AppLayout = () => {
  const { setUser, setPageOpen, isPageOpend, isPricingPage } =
    useContext(Context);
  const { data, loading, error, success } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/" || location.pathname.includes("download"))
      setPageOpen(false);
  }, [location.pathname]);

  const handleLogOut = () => {
    dispatch(logOut());
    if(error) toast.error("Something went wrong!")
  };

  useEffect(() => {
    dispatch(autoLogin());
  }, []);

  useEffect(() => {
    if (success) {
      setUser(data?.user);
      if (!data.user) localStorage.clear("authAccessToken");
    }
  }, [success, error, dispatch]);

  return (
    <div>
      <div>
        {loading ? (
          <div className="absolute right-0 top-0 px-3 items-center bg-[#ffffff] rounded-[12px] inline-flex text-sm font-medium h-12 leading-[1.2] outline-[1px] outline-[rgba(0,0,0,.05)] box-border shadow-[0_4px_8px_0_rgba(0,0,0,0.05)] z-50 m-4">
            <MoonLoader size={20} color="#000000" />
          </div>
        ) : (
          <Header handleLogOut={handleLogOut} />
        )}
      </div>
      <div className="min-h-screen box-border">
        <Home />
        <main
          className={`w-full bg-[#fff] bottom-0 overflow-hidden absolute right-0 top-0 z-[37] box-border shadow-[0_0_12px_0_rgba(0,0,0,0.1),_0_10px_30px_0_rgba(0,0,0,0.2)] transition-[all] duration-[500ms] ease-[cubic-bezier(.77,0,.175,1)] ${
            !isPageOpend
              ? "translate-x-[105%] invisible"
              : "transform-none visible"
          } ${
            isPricingPage
              ? "max-w-[calc(100%-96px)]"
              : "md:max-w-[calc(100%-96px)] lg:max-w-[calc(100%-23.5em)] xl:max-w-[calc(100%-29.5em)] 2xl:max-w-[calc(100%-31em)]"
          }`}
        >
          <PageTopbar />
          <div className="group h-[calc(100%-80px)] scale-100 overflow-hidden overflow-x-hidden relative w-full box-border before:content-[''] before:absolute before:bottom-0 before:left-0 before:right-0 before:h-[10px] before:z-[999] before:transition-[box-shadow] before:duration-[300ms] before:ease-in-out after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[10px] after:z-[999] after:transition-[box-shadow] after:duration-[300ms] after:ease-in-out after:shadow-[inset_0_-6px_6px_-6px_rgba(23,24,26,0.25)]  group  scrollable_content">
            <div className="scrollbar-custom mr-[3px] group-hover:mr-[3px]  box-border h-[calc(100vh-80px)] left-0  overflow-x-hidden overflow-y-scroll p-0 absolute right-0 top-0">
              <Outlet />
              <PageFooter />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
