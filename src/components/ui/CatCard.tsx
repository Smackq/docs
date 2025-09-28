import { DocsCard } from "./DocsCard";
import { WAYDOCS } from "@/app/data/wayData";
interface DocsCardProps {
  title: string;

}

export function  CatCard({title }: DocsCardProps) {
    return(
        <div className="p-5 flex  justify-center items-center gap-5 border  rounded-2xl">
            <h1>{title}</h1>

            {
  WAYDOCS.map((item) => (
    <div key={item.title} className="flex flex-col gap-3">
      <h2 className="font-bold text-lg">{item.title}</h2>
      {item.doc.map((docItem, index) => (
        <DocsCard key={index} name={docItem.name} />
      ))}
    </div>
  ))
}
            
        </div>
    )
}