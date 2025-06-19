"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDebounce } from "@/hooks/use-debounce";
import { Input } from "../ui/input";

export default function Search() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const [search, setSearch] = useState(searchParams.get("q") || "");
  const debouncedSearch = useDebounce(search);

  useEffect(() => {
    function handleSearch(term: string) {
      const params = new URLSearchParams(searchParams);

      if (term) {
        params.set("q", term);
      } else {
        params.delete("q");
      }

      replace(`${pathname}?${params.toString()}`);
    }

    handleSearch(debouncedSearch);
  }, [debouncedSearch]);

  return (
    <>
      <div className="w-full max-w-xl p-3">
        <Input
          placeholder="Enter ticker symbol (e.g., VWRP.L)"
          defaultValue={searchParams.get("q")?.toString()}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
    </>
  );
}
