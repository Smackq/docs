import { DocsCard } from "./DocsCard";
import { WAYDOCS } from "@/app/data/wayData";


interface DocsCardProps {
  title: string;
}

export function CatCard({ title }: DocsCardProps) {
  const category = WAYDOCS.find(item => item.title === title);
  return (
    <div className="p-5 flex flex-col justify-center items-start gap-3 border rounded-2xl">
      <h1 className="font-bold text-xl mb-3">{title}</h1>
      {category?.doc.map((docItem, index) => (
        <DocsCard key={index} name={docItem.name} />
      ))}
    </div>
  );
}