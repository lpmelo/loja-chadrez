import React from "react";
import DefaultSpinner from "../spinner/DefaultSpinner";
import style from './styles/style.module.css'

const LoadingProvider = ({ isLoading, children }) => {
  return (
    <>
      {isLoading ? (
        <div className={style.spinnerContainer}>
          <DefaultSpinner color="white" size="xl" speed="0.7s" />
        </div>
      ) : (
        children
      )}
    </>
  );
};

export default LoadingProvider;
