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
      const defaultP1 = new Date().toLocaleDateString("en-CA");
      const defaultInterval = "5m";

      if (term) {
        params.set("q", term);
        if (!params.has("p1")) {
          params.set("p1", defaultP1);
        }
        if (!params.has("interval")) {
          params.set("interval", defaultInterval);
        }
      } else {
        ["q", "p1", "interval"].forEach((param) => params.delete(param));
      }

      replace(`${pathname}?${params.toString()}`);
    }

    handleSearch(debouncedSearch);
  }, [debouncedSearch, pathname, replace, searchParams]);

  return (
    <>
      <div className="w-full max-w-xl p-3">
        <Input
          placeholder="Enter a single ticker symbol (e.g., VOO)"
          defaultValue={searchParams.get("q")?.toString()}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
    </>
  );
}
