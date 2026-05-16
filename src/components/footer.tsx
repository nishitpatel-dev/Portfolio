"use client"
import axios from "axios";
import { useEffect, useState } from "react";
import Reveal from "./reveal";

export default function Footer() {
  const [visit, setVisit] = useState<number | "Loading...">("Loading...");
  useEffect(() => {
    async function increaseVisitors() {
      const response = await axios.get("/api/visit");
      setVisit(response.data.visitor);
    }
    increaseVisitors();
  }, []);
  return (
    <Reveal className="w-full">
      <div className="flex items-center justify-center my-10 text-sm text-white/80">
        <h1 className="mx-auto rounded-full border border-white/10 bg-white/5 px-4 py-2 shadow-sm">
          Total Visitors : {visit}
        </h1>
      </div>
    </Reveal>
  );
}
