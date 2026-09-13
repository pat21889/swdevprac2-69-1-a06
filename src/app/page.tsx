import Banner from "@/components/Banner";
import CardPanel from "@/components/CardPanel";

const venues = [
  { venueName: "The Bloom Pavilion", imgSrc: "/img/bloom.jpg" },
  { venueName: "Spark Space", imgSrc: "/img/sparkspace.jpg" },
  { venueName: "The Grand Table", imgSrc: "/img/grandtable.jpg" },
];

export default function Home() {
  return (
    <div className="flex min-h-[calc(100vh-3rem)] flex-col items-center justify-center bg-gray-50 p-10">
      <main className="flex w-full max-w-4xl flex-col items-center gap-8">
        <Banner />
        <CardPanel venues={venues} />
      </main>
    </div>
  );
}
