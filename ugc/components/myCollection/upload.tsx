"use client";

import { uploadImage } from "@/utils/supabase/storage/client";
import { ChangeEvent, useRef, useState, useTransition } from "react";
import { convertBlobUrlToFile } from "@/lib/utils";
import Image from "next/image";

function Upload() {
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  const imageInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      const newImageUrls = filesArray.map((file) => URL.createObjectURL(file));

      setImageUrls([...imageUrls, ...newImageUrls]);
    }
  };

  const [isPending, startTransition] = useTransition();

  const handleClickUploadImagesButton = async () => {
    startTransition(() => {
        const trans = async () => {
        let urls = [];
        for (const url of imageUrls) {
         const imageFile = await convertBlobUrlToFile(url);

        const { imageUrl, error } = await uploadImage({
          file: imageFile,
          bucket: "builtit-ugc",
        });

        if (error) {
          console.error(error);
          return;
        }

        urls.push(imageUrl);
      }

      console.log(urls);
      setImageUrls([]);
      return urls;
      }
      trans();
    });
  };

  return (
    <div className="bg-transparent min-h-screen flex justify-center items-center flex-col gap-8">
      <input
        type="file"
        hidden
        multiple
        ref={imageInputRef}
        onChange={handleImageChange}
        disabled={isPending}
      />

      <button
        className="pentagon h-auto w-full md:w-auto view_all text-lg md:text-2xl bg-[#FCCC4C] text-black py-2 px-4 pr-6 hover:bg-yellow-500"
        onClick={() => imageInputRef.current?.click()}
        disabled={isPending}
      >
        Select Images
      </button>

      <div className="flex gap-4">
        {imageUrls.map((url, index) => (
          <Image
            key={url}
            src={url}
            width={300}
            height={300}
            alt={`img-${index}`}
          />
        ))}
      </div>

      <button
        onClick={handleClickUploadImagesButton}
        className="pentagon h-auto w-full md:w-auto view_all text-lg md:text-2xl bg-[#FCCC4C] text-black py-2 px-4 pr-6 hover:bg-yellow-500"
        disabled={isPending}
      >
        {isPending ? "Uploading..." : "Upload Images"}
      </button>
    </div>
  );
}

export default Upload;