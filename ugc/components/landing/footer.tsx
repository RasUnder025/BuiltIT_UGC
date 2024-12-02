import React from 'react';
import Logo from '@/assets/Resources/logo.svg';
import { FaGitAlt, FaGithub } from 'react-icons/fa';
import { RiSupabaseFill } from "react-icons/ri";

const footer = () => {
  return (
    <div className="p-8 pb-0 bg-gradient-to-tr from-[#370450] to-[#1A0226]  text-gray-300">
      <div className="flex flex-col md:flex-row mx-4 md:mx-12 my-12 md:my-20 justify-between columns-[400px] gap-8">
        <div className="w-full md:w-1/2 flex flex-col justify-between">
          <div>
            <div className="flex items-center">
              <a href="/" className="flex-shrink-0">
                {/* <Logo className="text-base h-auto w-auto" /> */}
              </a>
            </div>
            <p className="mt-8 text-gray-300 text-base">
            All chains, all games—single destination. Captain Side, where Web3 gaming connects.
            </p>
            <p>
            UGC User Generated Content platform to share your media based interests.
            </p>

          </div>
          <div className="mt-12 md:mt-52">
            <p className="text-gray-500 text-sm">
              2024 CaptainSide | BuiltIT UGC Platform | Clifford
            </p>
          </div>
        </div>

        <div className="w-full ">
          <div className="pentagon1 p-8 md:p-16 md:pl-20 shadow-lg bg-[#310F43] flex flex-col md:flex-row justify-center items-stretch w-full h-auto md:h-full">
            {/* Left Partition */}
            <div className="w-full md:w-1/2 flex flex-col space-y-6 md:space-y-12 mb-6 md:mb-0 text-white">
              <a href="/" className="hover:underline">
                Home
              </a>
              <a href="/myCollection" className="hover:underline">
                My Collection
              </a>
            </div>

            {/* Divider */}
            <div className="border-l border-[#D700E1] mx-0 md:mx-4 mb-6 md:mb-7"></div>

            <div className="w-full md:w-1/2 pl-0 md:pl-12 flex flex-col space-y-6 md:space-y-12 text-white">
              <a
                href="https://github.com/RasUnder025"
                className="flex items-center hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className="mr-2 w-6 h-6" /> GitHub
              </a>
              <a
                href="https://github.com/RasUnder025/BuiltIT_UGC"
                className="flex items-center hover:underline"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaGitAlt className="mr-2 w-6 h-6" /> Repo
              </a>
              <a
                href="https://supabase.com/dashboard/project/yunwkhddaxrdlksmxpbk"
                className="flex items-center hover:underline"
                target="_blank"
                rel="noreferrer noopener"
              >
                <RiSupabaseFill className="mr-2 w-6 h-6" /> Supabase
              </a>              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;