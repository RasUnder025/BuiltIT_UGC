"use client";

import { createClient } from '@supabase/supabase-js'
import { useRef, useState } from "react";
import Image from "next/image";
import React from "react";

export async function getStaticProps() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
  )

  const { data, error } = await supabase
  .storage
  .from('avatars')
  .list('folder', {
    limit: 100,
    offset: 0,
    sortBy: { column: 'name', order: 'asc' },
  })
  return {
    props: {
      images: data,
    },
  }
}

type Image = {
  id: number
  title: string
  describe: string
  file_url: string
}

const arr = [
  {
    title: "",
  }
];

function HomePage() {
    const [imageUrls, setImageUrls] = useState<string[]>([]);
    const imageInputRef = useRef<HTMLInputElement>(null);
    const [searchTerm, setSearchTerm] = React.useState("");
    const filteredProd = arr.filter((arr) =>
    arr?.title?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="w-full max-w-2x1 min-w-[200px]">
                <div className="relative">
                <input
                type="text"
                className="w-full bg-transparent items-center placeholder:text-slate-400 text-white text-sm border-b-2 sm:border-b-3 pb-2 sm:pb-3 border-[#D600E1] rounded-md pl-3 pr-28 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder="Search for a product..."
                onChange={(e) => setSearchTerm(e.target.value)}
                />
                </div>
            </div>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {/* {imageUrls.map(data) => (
              <Image
                key={data}
                src={data}
                width={300}
                height={300}
                alt={`img-${data.id}`}
              />
            ))} */}
        </div>
        </div>
      );
    }
    
    export default HomePage;