"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const layout = ({ children }) => {
  const [role, setRole] = useState("");
  const router = useRouter()
  console.log("RRRRRR");
//   const role = typeof window !== 'undefined' ? localStorage.getItem('role') : null;
  useEffect(() => {
    const role = typeof window !== "undefined" ? localStorage.getItem("role") : null;
    if(role !== 'teacher'){
        router.push('/contact')
        return
    }
    setRole(role);
  }, []);
  console.log("role", role);

  return (
    <div>
      <div>
        <h1>Teacher Layout</h1>
        {role === "teacher" && children}
      </div>
    </div>
  );
};

export default layout;
