import Image from "next/image";

export default function Home() {
  async function fetchPrediction() {
    const res = await fetch("http://127.0.0.1:8000/predict");
    const data = await res.json();
    console.log(data);
  }
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"></div>
  );
}
