"use client";

import { useState } from "react";
import Image from "next/image";
import Rating from "@mui/material/Rating";
import InteractiveCard from "./InteractiveCard";

interface CardProps {
  venueName: string;
  imgSrc: string;
  onRatingChange: (venueName: string, rating: number) => void;
}

export default function Card({ venueName, imgSrc, onRatingChange }: CardProps) {
  const [rating, setRating] = useState(0);

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
          <Rating
            id={venueName}
            name={venueName}
            data-testid={`${venueName} Rating`}
            value={rating}
            onChange={(_, newValue) => {
              const value = newValue ?? 0;
              setRating(value);
              onRatingChange(venueName, value);
            }}
          />
        </div>
      </div>
    </InteractiveCard>
  );
}
