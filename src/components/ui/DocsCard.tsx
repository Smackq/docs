
interface DocsCardProps {
  name: string;

}

export function  DocsCard({name}: DocsCardProps) {
    return(
        <div className="p-5 flex  justify-center items-center gap-5 border  rounded-2xl">
            <h1>{name}</h1>
        </div>
    )
}