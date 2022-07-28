import Image from "next/image";
import React, { useEffect, useState } from "react";
import type { GalleryProps } from "../../../types";
import { SLayout, SGalleryContainer, SGallery, SImage } from "./Gallery.style";

const Gallery = ({ images }: GalleryProps) => {
  const [thumbnails, setThumbnails] = useState<string[]>([]);
  const [preloadImages, setPreloadImages] = useState<string[]>([]);
  const [current, setCurrent] = useState<number>(0);

  const handleThumbnailClick = (idx: number) => {
    setCurrent(idx);
  };

  useEffect(() => {
    const thumbnails = images.map(({ thumbnailImage }) => thumbnailImage);
    const originImages = images.map(({ origin }) => origin);
    setThumbnails((prev) => [...prev, ...thumbnails]);
    setPreloadImages((prev) => [...prev, ...originImages]);
  }, []);

  return (
    <SLayout>
      <SGalleryContainer>
        <SGallery>
          {thumbnails.map((thumbnail: string, idx: number) => (
            <SImage
              className={`${current === idx ? "current" : ""}`}
              key={thumbnail}
              onMouseOver={() => handleThumbnailClick(idx)}
            >
              <Image src={`https:${thumbnail}`} width={50} height={50} alt="" />
            </SImage>
          ))}
        </SGallery>

        {preloadImages.length && (
          <Image
            src={`https:${preloadImages[current]}`}
            width={410}
            height={410}
            layout="fixed"
            alt=""
            priority
          />
        )}
      </SGalleryContainer>
    </SLayout>
  );
};

export default Gallery;
