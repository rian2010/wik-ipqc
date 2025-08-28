import Image from "next/image";
import Navbar from "@/component/navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div>
        <h1 className="text-xl text-black">content</h1>
      </div>
    </div>
  );
}
