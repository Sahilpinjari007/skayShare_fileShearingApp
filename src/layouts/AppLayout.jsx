import React, { useContext, useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Home from "../pages/Home";
import PageTopbar from "../components/pageTopbar";
import { Context } from "../context/AppContext";
import PageFooter from "../components/PageFooter";

const AppLayout = () => {
  const { isPageOpend, isPricingPage } = useContext(Context);
  const contentRef = useRef(null);
  const trackRef = useRef(null);
  const thumbRef = useRef(null);

  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [startTranslateY, setStartTranslateY] = useState(0);

  const updateThumbPosition = () => {
    const content = contentRef.current;
    const thumb = thumbRef.current;
    const track = trackRef.current;

    if (!content || !thumb || !track) return;

    const contentHeight = content.scrollHeight;
    const visibleHeight = content.clientHeight;
    const scrollTop = content.scrollTop;

    const scrollRatio = scrollTop / (contentHeight - visibleHeight);
    const trackHeight = track.clientHeight - thumb.clientHeight;

    thumb.style.transform = `translateY(${scrollRatio * trackHeight}px)`;
  };

  const onMouseMove = (e) => {
    if (!isDragging) return;

    const track = trackRef.current;
    const thumb = thumbRef.current;
    const content = contentRef.current;

    const deltaY = e.clientY - startY;
    const newTranslateY = Math.min(
      Math.max(startTranslateY + deltaY, 0),
      track.clientHeight - thumb.clientHeight
    );

    thumb.style.transform = `translateY(${newTranslateY}px)`;

    const scrollRatio =
      newTranslateY / (track.clientHeight - thumb.clientHeight);
    content.scrollTop =
      scrollRatio * (content.scrollHeight - content.clientHeight);
  };

  const onMouseUp = () => {
    setIsDragging(false);
    document.body.style.userSelect = "";
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
      document.body.style.userSelect = "none";
    } else {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    }
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };
  }, [isDragging]);

  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;
    content.addEventListener("scroll", updateThumbPosition);
    updateThumbPosition();
    return () => content.removeEventListener("scroll", updateThumbPosition);
  }, []);

  useEffect(() => {
  const updateScrollbar = () => {
    const content = contentRef.current;
    const track = trackRef.current;
    const thumb = thumbRef.current;

    if (!content || !track || !thumb) return;

    const containerHeight = content.clientHeight; // visible height
    const contentHeight = content.scrollHeight;   // total scrollable height
    const thumbHeight = Math.max(
      (containerHeight / contentHeight) * track.clientHeight,
      20 // min thumb height
    );

    thumb.style.height = `${thumbHeight}px`;
  };

  updateScrollbar();
  window.addEventListener("resize", updateScrollbar);
  return () => {
    window.removeEventListener("resize", updateScrollbar);
  };
}, []);

  return (
    <div>
      <div>
        <Header />
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
          <div className="group h-full max-h-[calc(100%-80px)] scale-100 overflow-hidden overflow-x-hidden relative w-full box-border before:content-[''] before:absolute before:bottom-0 before:left-0 before:right-0 before:h-[10px] before:z-[999] before:transition-[box-shadow] before:duration-[300ms] before:ease-in-out after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[10px] after:z-[999] after:transition-[box-shadow] after:duration-[300ms] after:ease-in-out after:shadow-[inset_0_-6px_6px_-6px_rgba(23,24,26,0.25)]">
            <div
              ref={contentRef}
              className="scrollable-content box-border h-[calc(100vh-80px)] left-0 m-[0_-17px_0_0]  overflow-x-hidden overflow-y-scroll p-0 absolute right-0 top-0"
            >
              <Outlet />
              <PageFooter />
            </div>
            <div
              ref={trackRef}
              className="scrollbar right-[5px] w-[.3125em] opacity-100 bottom-[10px] absolute top-[10px] z-[999] transition-opacity duration-300 ease-in-out box-border"
            >
              <div
                ref={thumbRef}
                onMouseDown={(e) => {
                  setIsDragging(true);
                  setStartY(e.clientY);
                  setStartTop(
                    parseInt(window.getComputedStyle(thumbRef.current).top, 10)
                  );
                }}
                className={"h-[67.02592px] translate-y-0 group-hover:bg-[rgba(0,0,0,.25)] rounded-[20px] min-h-[20px] w-full box-border transition-[background] duration-200 ease-in-out"}
              ></div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
