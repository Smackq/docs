import { DocsCard } from "@/components/ui/DocsCard";
import { WAYDOCS } from "./data/wayData";
import Link from "next/link";
import { CatCard } from "@/components/ui/CatCard";

export default function Home() {
  return (
    <div>
      <h1 className=" mt-5 text-3xl flex items-center justify-center">ДОГОВОРЫ</h1>
      <ul className="flex justify-center gap-20 mt-20 text-lg">
  {WAYDOCS.map((item) => (
    <div key={item.title}>
      <h2 className="text-xl font-bold">{item.title}</h2>
      
          <div>
            <Link href={item.url}>
              <CatCard title={item.title} />
            </Link>
          </div>
         
      
    </div>
  ))}
</ul>
    </div>
  );
}
