import React, { useEffect } from "react";
import { useRouter } from "next/router";
import DefaultSpinner from "@/layouts/components/spinner/DefaultSpinner";
import style from "src/styles/global.module.css";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    if (router.asPath != "/chess") {
      router.push("/chess");
    }
  }, []);

  return (
    <>
      <div className={style.homeContainer}>
        <DefaultSpinner size="xl" color="white" speed="0.8s" />
      </div>
    </>
  );
};

export default Home;
