import React from "react"
import { UseFormRegisterReturn } from "react-hook-form"

interface IInputFormProps {
  type: string
  label: string
  nameInp: string
  registerProps: UseFormRegisterReturn
  placeholder?: string
}

export function InputForm({ type, label, nameInp, registerProps, placeholder }: IInputFormProps) {
  return (
    <div className="w-full">
      <label className="text-gray-700 text-sm font-medium">{label}</label>
      <input placeholder={placeholder}
        className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-400"
        type={type}
        {...registerProps} 
        name={nameInp}
      />
    </div>
  )
}
