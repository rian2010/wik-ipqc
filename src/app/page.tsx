"use client";
import Image from "next/image";
import Navbar from "@/component/navbar";
import Content from "@/component/content-page";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div>
        <Content />
      </div>
    </div>
  );
}
