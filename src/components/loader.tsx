"use client"

import { CgSpinnerTwo } from "react-icons/cg";

export const Loader = () => {
  return (
     <div className="h-screen pb-[130px] flex items-center justify-center">
        <CgSpinnerTwo className="h-10 w-10 animate-spin text-primary"/>
     </div>
    );
}
