import Image from "next/image";
import InteractiveCard from "./InteractiveCard";

interface CardProps {
  venueName: string;
  imgSrc: string;
}

export default function Card({ venueName, imgSrc }: CardProps) {
  return (
    <InteractiveCard>
      <div className="w-64 overflow-hidden">
        <div className="relative h-40 w-full">
          <Image
            src={imgSrc}
            alt={venueName}
            fill
            sizes="256px"
            className="object-cover"
          />
        </div>
        <div className="px-4 py-3">
          <h3 className="text-base font-bold text-gray-900">{venueName}</h3>
        </div>
      </div>
    </InteractiveCard>
  );
}
