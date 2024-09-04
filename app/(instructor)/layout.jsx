'use client'

import { getCurrUserRole } from "@/utils/getToken";
import { useRouter } from "next/navigation";
import React, { useLayoutEffect } from "react";

const layout = ({ children }) => {
    const router = useRouter()

  const role = getCurrUserRole();
  console.log("role", role);

  useLayoutEffect(() => {
    if (role !== 'instructor') {
        router.push("/");
        return
      }
  },[])


  return (
    <div>
      <p>Instructor Layout</p>
      {children}
    </div>
  );
};

export default layout;
