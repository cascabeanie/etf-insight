"use client";

import { useRef } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

export default function TabSelector({
  children,
}: {
  children: React.ReactNode;
}) {
  const tabs = useRef<HTMLDivElement | null>(null);

  const scrollIntoView = (ref: React.RefObject<HTMLDivElement | null>) => {
    window.scrollTo({
      top: ref?.current?.offsetTop || 999,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Separator className="my-4" ref={tabs} />
      <div className="flex w-full max-w-6xl justify-center">
        <Tabs defaultValue="holdings" className="w-full items-center">
          <TabsList
            className="w-xs sm:w-md"
            onClick={() => {
              scrollIntoView(tabs);
            }}
          >
            <TabsTrigger value="holdings">Holdings</TabsTrigger>
            <TabsTrigger value="assets">Assets</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
          </TabsList>

          {children}
        </Tabs>
      </div>
    </>
  );
}
