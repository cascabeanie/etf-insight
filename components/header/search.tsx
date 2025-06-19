"use client";

import { Input } from "../ui/input";

export default function Search() {
  return (
    <>
      <div className="w-full max-w-xl p-3">
        <Input
          placeholder="Enter ticker symbol (e.g., VWRP.L)"
          onChange={(e) => {
            console.log(e.target.value);
          }}
        />
      </div>
    </>
  );
}
