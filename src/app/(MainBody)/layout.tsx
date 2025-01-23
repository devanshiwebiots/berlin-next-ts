"use client";
import Footer from "@/Layout/Footer/Footer";
import SideBar from "@/Layout/Sidebar/Sidebar";
import TapTop from "@/Layout/TapTop/TapTop";
import { RootLayoutProps } from "@/Types/Layout.type";
import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import Loading from "../loading";
import Header from "@/Layout/Header/Header";
import { BreadCrumbs } from "@/Layout/Header/BreadCrumbs";
import ThemeCustomizer from "@/Layout/ThemeCustomizer";
import { setToggleSidebar } from "@/Redux/Reducer/Layout/LayoutSlice";
import { setLayout } from "@/Redux/Reducer/Layout/ThemeCustomizerSlice";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  const { layout } = useAppSelector((state) => state.themeCustomizer);
  const dispatch = useAppDispatch();

  const compactSidebar = () => {
    let windowWidth = window.innerWidth;
    if (layout === "compact-wrapper") {
      if (windowWidth < 1200) {
        dispatch(setToggleSidebar(true));
      } else {
        dispatch(setToggleSidebar(false));
      }
    } else if (layout === "horizontal-wrapper") {
      if (windowWidth < 992) {
        dispatch(setToggleSidebar(true));
        dispatch(setLayout("compact-wrapper"));
      } else {
        dispatch(setToggleSidebar(false));
        dispatch(setLayout(localStorage.getItem("layout")));
      }
    }
  };

  useEffect(() => {
    compactSidebar();
    window.addEventListener("resize", () => {
      compactSidebar();
    });
  }, [layout]);
  return (
    <>
      <Loading />
      <div className={`page-wrapper ${layout}`} id='pageWrapper'>
        <Header />
        <div className='page-body-wrapper'>
          <SideBar />
          <div className='page-body'>
            <BreadCrumbs/>
            {children}
            </div>
          <Footer />
        </div>
      </div>
      <ThemeCustomizer/>
      <ToastContainer />
      <TapTop />
    </>
  );
};
export default RootLayout;
