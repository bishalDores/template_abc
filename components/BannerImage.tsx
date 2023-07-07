"use client";

import React, { useState, useEffect } from "react";

const BannerImage = () => {
  const [degree, setDegree] = useState<number>(10);
  const [rotateX, setRotateX] = useState<number>(10);
  const [scrolling, setScrolling] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("wheel", handleWheel);

    return () => {
      setScrolling(false);
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  useEffect(() => {
    if (scrolling) {
      if (degree >= 0 || degree <= 10) {
        console.log("degree", degree);
        setRotateX(degree);
      }
    }
  }, [scrolling, degree]);

  const handleWheel = (e: WheelEvent) => {
    setScrolling(true);
    // @ts-ignore
    if (e.wheelDelta > 0) {
      //   console.log("going up");
      setDegree((prev) => prev + 0.3);
    } else {
      //   console.log("going down");
      setDegree((prev) => prev - 0.3);
    }
  };

  return (
    <div className="bannerImg_wrapper" style={{ margin: rotateX === 0 ? "auto" : "-50px auto 0 auto" }}>
      <img src={"/images/banner.png"} alt="banner-image" style={{ transform: `rotateX(${rotateX}deg)` }} />
    </div>
  );
};

export default BannerImage;
