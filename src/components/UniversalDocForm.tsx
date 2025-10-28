'use client'
import { useState } from "react"
import { InputForm } from "@/components/ui/InputForm"
import { generateDoc } from "@/lib/generateDoc"
import { Calendar } from "./ui/calendarAndButton/calendar"
import { Button } from "./ui/button";
import { FaSearch } from "react-icons/fa"
interface IUniversalFormProps {
  template: string
  formFields: { label: string; name: string; type: string; placeholderDoc: string }[]
}

export function UniversalDocForm({ template, formFields }: IUniversalFormProps) {
  const initialState = formFields.reduce((acc, field) => ({ ...acc, [field.name]: "" }), {})
  const [form, setForm] = useState<Record<string, string>>(initialState)
  const [dates, setDates] = useState<Record<string, Date | undefined>>({})
  const [openCalendars, setOpenCalendars] = useState<Record<string, boolean>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleDateSelect = (name: string, value?: Date) => {
    setDates((prev) => ({ ...prev, [name]: value }))
    setForm((prev) => ({
      ...prev,
      [name]: value ? value.toLocaleDateString("ru-RU") : "",
    }))
    setOpenCalendars((prev) => ({ ...prev, [name]: false })) // Закрываем календарь после выбора даты
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const docData: Record<string, string> = {}
    for (const field of formFields) {
      docData[field.placeholderDoc] = form[field.name]
    }

    for (const [name, date] of Object.entries(dates)) {
      if (date) {
        const d = date.getDate().toString().padStart(2, "0")
        const months = [
          "января", "февраля", "марта", "апреля", "мая", "июня",
          "июля", "августа", "сентября", "октября", "ноября", "декабря"
        ]
        const m = months[date.getMonth()]
        const y = date.getFullYear().toString()

        docData[`${name}_День`] = d
        docData[`${name}_Месяц`] = m
        docData[`${name}_Год`] = y
      }
    }

    generateDoc(template, docData, "Договор_заполненный.docx")
  }

  return (
    <form onSubmit={handleSubmit}>
      <section className="w-full h-[530px] bg-red-400 flex flex-col justify-center items-center">
            <h1 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white p-5 bg-black font-bold">Create your own contract</h1>
            <p className="text-center text-white text-[20px] mt-6">This application generates up-to-date contracts in many areas of activity.</p>
              
          </section>
          <div className="mt-15  max-w-5xl flex flex-col mx-auto gap-5 w-full mb-20 px-5">
      {formFields.map((field) => (
        <div key={field.name} >
          {field.type === "date" ? (
            <>
              <label className="block mb-1 text-gray-700">{field.label}</label>
              <button
                type="button"
                onClick={() => setOpenCalendars(prev => ({ ...prev, [field.name]: !prev[field.name] }))}
                className="p-2 w-full border rounded text-left"
              >
                {dates[field.name]
                  ? dates[field.name]?.toLocaleDateString("ru-RU")
                  : "Выбрать дату"}
              </button>

              {openCalendars[field.name] && (
                <div className="mt-2 border rounded-lg p-2 z-10 bg-white relative">
                  <Calendar
                    mode="single"
                    selected={dates[field.name]}
                    onSelect={(value) => handleDateSelect(field.name, value)}
                    className="rounded-lg border"
                  />
                </div>
              )}
            </>
          ) : (
            <InputForm
              name={field.name}
              label={field.label}
              type={field.type}
              value={form[field.name]}
              onChange={handleChange}
            />
          )}
        </div>
      ))}

      <Button>Скачать договор</Button>
      </div>
    </form>
  )
}
