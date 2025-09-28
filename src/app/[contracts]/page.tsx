'use client'
import { WAYDOCS } from "../data/wayData"

import { useParams } from "next/navigation"


export default function() {
    const {contracts} = useParams()


     const contract = WAYDOCS.find((item) => item.url === contracts)

  if (!contract) {
    return (
      <div>
        <h1>❌ Договор не найден</h1>
      </div>
    )
  } else {
    return (
      <div>
        <h1>Договор: {contract.title}</h1>
      </div>
    )
  }
  
}