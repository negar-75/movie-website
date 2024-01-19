import React from "react";
import Link from "next/link";

function Signup() {
  return (
    <div className="text-[#807979] cursor-pointer uppercase p-3 font-bold">
      <Link href={"/signup"}>Sign up</Link>
    </div>
  );
}

export default Signup;
