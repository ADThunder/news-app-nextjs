import { news } from "@/types";
import Link from "next/link";
import React from "react";
import { Tag } from ".";
import Image from "next/image";

const RandomArticle = ({ data }: { data: news }) => {
  return (
    <div className="flex justify-between gap-2 p-2 mb-2 border-b border-gray-300">
      <div>
        <Link href={data?.url} legacyBehavior>
          <a target="_blank">{data?.title}</a>
        </Link>
        <div className="flex flex-col space-y-2 max-w-max my-2">
          <Tag data={data?.source.name} />
          <Tag data={new Date(data?.publishedAt).toDateString()} />
        </div>
      </div>
      <div className="relative w-[400px] h-[200px]">
        <Image
          src={`${
            data?.urlToImage ? data?.urlToImage : "/img/news-u-logo.webp"
          }`}
          alt={data?.title}
          fill
          sizes="(max-width:768px) 100vw, (max-width:1200px) 100vw, 100vw"
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default RandomArticle;
