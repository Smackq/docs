import { DOCS } from "./config/configDocs";
import { WAYDOCS } from "./data/wayData";
import Link from "next/link";
import { CatCard } from "@/components/ui/CatCard";

export default function Home() {
  return (
    <div>
      <h1 className=" mt-5 text-3xl flex items-center justify-center">ДОГОВОРЫ</h1>
      <div className="grid grid-cols-3 justify-center items-center text-center gap-10">
        <h2>Бизнес</h2>
        <h2>недвижимость</h2>
        <h2>Автомобили</h2>

        </div>
      <ul className="grid grid-cols-3 justify-center items-center gap-10 ">
  {DOCS.map((item) => (
    <div key={item.name}>
          <div>
            <Link href={item.url}>
              <CatCard title={item.name} />
            </Link>
          </div>
    </div>
  ))}
</ul>
    </div>
  );
}
