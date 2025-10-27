import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
interface IContractCard {
    title: string,
    description: string,
    imageUrl: string,
    category: string,
    slug:string,
    createdAt: string,
};
export default function ContractCard({title, description, imageUrl, category, slug, createdAt}: IContractCard) {
    const formatted = new Date(createdAt).toLocaleDateString("ru-RU");
    return(
        <div className="px-[22px] py-[32px] flex flex-col border-[5px] border-black rounded-3xl border-r-[10px] border-b-[10px] ">
            <Link href={`/contract/${slug}`}>
                <h1 className="text-xl font-semibold mb-[10px]">{title}</h1>
            </Link>
            <p className="break-all line-clamp-2 leading-6 mb-4 overflow-hidden">{description}</p>
            <Image width={276} height={164} src={imageUrl} alt={title} className="rounded-2xl w-[246px] h-[154px]"/>
            <div className="flex items-center justify-between mt-4">
                <span className="">{category}</span>
                <Link  href={`/contract/${slug}`}>
                    <Button className="cursor-pointer">Create</Button>
                </Link>
            </div>
            <span className="  text-sm ">{formatted}</span>
        </div>
    )
}