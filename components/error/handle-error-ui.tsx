"use client";

import { useState, useEffect } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { chartDataType } from "@/types/types";

export default function HandledErrorUI({ res }: { res: chartDataType }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (res.code === 204) {
      setTitle("Input is Empty");
      setDescription("Type a valid fund ticker above");
    } else if (res.code === 404) {
      setTitle("That Ticker Is Incorrect");
      setDescription(res.message);
    } else if (res.code === 403) {
      setTitle("Not an ETF");
      setDescription(res.message);
    } else if (res.code === 406 || 400 || 500) {
      setTitle("Error");
      setDescription(res.message);
    }
  }, [res]);

  return (
    <>
      <div className="flex justify-center">
        <Card className="m-5 w-full max-w-3xl">
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardHeader>
          <CardContent>
            {res.code === 204 || res.code === 403 || res.code === 404 ? (
              <p>
                Valid tickers can be found{" "}
                <a
                  href="https://finance.yahoo.com/lookup/"
                  className="text-blue-300"
                >
                  here
                </a>
              </p>
            ) : (
              <p>Try a new search above</p>
            )}
          </CardContent>
        </Card>
      </div>
    </>
  );
}
