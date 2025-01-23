'use client'
import React, { useEffect, useState } from "react";

const Loading = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && (
        <div className="loader-wrapper">
          <div className="loader loader-1">
            <div className="loader-outer" />
            <div className="loader-inner" />
            <div className="loader-inner-1" />
          </div>
        </div>
      )}
    </>
  );
};

export default Loading;