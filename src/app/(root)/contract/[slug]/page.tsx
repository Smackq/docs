import { client } from "@/sanity/lib/client";
import { CONTRACT_BY_SLUG_QUERY } from "@/sanity/lib/queries";
import { DOCS } from "@/config/configDocs";
import { notFound } from "next/navigation";
import { UniversalDocForm } from "@/components/UniversalDocForm";


export default async function Page({params}: {params: Promise<{slug:string}>}) {
  const slug = (await params).slug
  console.log(slug)

  const contract = await client.fetch(CONTRACT_BY_SLUG_QUERY, {slug})
 if (!contract) return notFound()

   const docData = DOCS.find(doc => doc.url === slug);
  if (!docData) notFound();

  return (
    <div>
      <UniversalDocForm formFields={docData.formFields} template={docData.template}/>
    </div>);
  }
