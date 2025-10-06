
'use client'
import { useParams } from "next/navigation";
import { DOCS } from "@/app/config/configDocs";
import { UniversalDocForm } from "@/components/UniversalDocForm";

export default function DocPage() {
  const { contracts } = useParams();
  const contract = DOCS.find((c) => c.url === contracts);

  if (!contract) return <h1>❌ Договор не найден</h1>;

  return (
    <div>
      <h1 className="text-center">{contract.name}</h1>
      <UniversalDocForm template={contract.template} formFields={contract.formFields} />
    </div>);
  }
