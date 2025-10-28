import { FaSearch } from "react-icons/fa"
import Link from "next/link";

import { client } from "@/sanity/lib/client";
import { CONTRACT_QUERY } from "@/sanity/lib/queries";
import ContractCard from "@/components/ContractCard";

export default async function Home() {
  const contract = await client.fetch(CONTRACT_QUERY)

  return (
    <>
    <section className="w-full h-[530px] bg-red-400 flex flex-col justify-center items-center">
      <h1 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white p-5 bg-black font-bold">Create your own contract</h1>
      <p className="text-center text-white text-[20px] mt-6">This application generates up-to-date contracts in many areas of activity.</p>
        <div className="max-w-3xl w-full min-h-[80px] bg-white border-[5px] border-black rounded-[80px] text-[24px] mt-8 px-5 flex flex-row items-center gap-5">
          <input className=" flex-1 font-bold placeholder:font-semibold placeholder:text-black w-full h-auto outline-none" placeholder="Search contract"/>
          <FaSearch/>
        </div>
    </section>




    <section className="max-w-7xl mx-auto    mt-15 mb-20 px-5">
      <h2 className="text-left text-3xl sm:text-4xl md:text-5xl lg:text-5xl mb-9">All contracts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-7 justify-center sm:justify-start">
     {contract.map((item) => (
        <ContractCard key={item?.description} title={item?.title} description={item?.description} imageUrl={item?.imageUrl} slug={item?.slug?.current} category={item?.category} createdAt={item?._createdAt}/>
  ))}
  </div>
    </section>
    </>
  );
}
