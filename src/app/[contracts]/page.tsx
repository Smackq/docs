'use client'
import { DOCS } from "../config/configDocs"

import { useParams } from "next/navigation"


export default function() {
    const {contracts} = useParams<{ contracts: string }>()
    console.log(contracts)

    


    const contract = DOCS.find((item) => item.url === contracts)

    
    console.log(contract)
   if (!contract) {
    return <h1>❌ Договор не найден</h1>
  }

  const Form = contract.Form

  return (
    <div>
      <h1>Договор: {contract.name}</h1>
      <Form /> {/* вот тут своя форма */}
    </div>
  )
}
  
