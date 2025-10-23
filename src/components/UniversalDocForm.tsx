
'use client'
import { useState } from "react"
import { InputForm } from "@/components/ui/InputForm"
import { generateDoc } from "@/lib/generateDoc"
import { Calendar } from "./ui/calendarAndButton/calendar"

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
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
      {formFields.map((field) => (
        <div key={field.name} className="w-full max-w-sm">
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

      <button
        type="submit"
        className="mt-6 w-full max-w-sm p-3 rounded-xl bg-gradient-to-r from-purple-500 to-orange-500 text-white"
      >
        Распечатать договор
      </button>
    </form>
  )
}
