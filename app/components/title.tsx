"use client";

import { useState, useEffect } from "react";

function Title({ title, home }: { title: string; home?: boolean }) {
  const [showHome, setShowHome] = useState<boolean>(false);
  useEffect(() => setShowHome(home as boolean), []);
  return (
    <div className="title text-white font-semibold mb-8 relative flex items-center pr-4 ">
      <p className="flex-shrink lg:text-2xl text-white pr-4 text-lg">
        {showHome && <a href="/">Home/</a>}
        {title}
      </p>
      <div className="flex-grow h-px bg-light"></div>
    </div>
  );
}

export default Title;
