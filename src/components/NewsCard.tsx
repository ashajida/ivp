"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MotionDiv } from "./FramerUtils";

type Props = {
    title: string;
    description: string;
    imageUrl: string;
    url: string;
}
const NewsCard = ({title, description, imageUrl, url}: Props) => {
  return (
    <MotionDiv whileInView={{ opacity: 1 }} initial={{ opacity: 0 }}>
    <Link href={url} className="block bg-linear-to-r from-[#04252B] to-[#0A8DAB] p-4 pb-0 overflow-hidden">
      <div className="mb-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <p>{description}</p>
      </div>
      <Image
        src={imageUrl}
        height={200}
        width={300}
        alt={title}
        className="w-full h-[300px] object-cover rounded-lg rounded-b-none rounded-r-none ml-9"
      />
    </Link>
    </MotionDiv>
  );
};

export default NewsCard;
