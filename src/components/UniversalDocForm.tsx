'use client'

import { useState } from "react"
import { useForm } from "react-hook-form"
import { InputForm } from "@/components/ui/InputForm"
import { Calendar } from "./ui/calendarAndButton/calendar"
import { Button } from "./ui/button"
import { generateDoc } from "@/lib/generateDoc"
import { IFormField } from "@/config/configDocs"


interface IUniversalFormProps {
  template: string
  formFields: IFormField[]
}

export function UniversalDocForm({ template, formFields }: IUniversalFormProps) {
  const { register, handleSubmit, formState: { errors }, setValue, getValues } = useForm()
  const [dates, setDates] = useState<Record<string, Date | undefined>>({})
  const [openCalendars, setOpenCalendars] = useState<Record<string, boolean>>({})

  // 🧩 Выбор даты
  const handleDateSelect = (name: string, value?: Date) => {
    setDates(prev => ({ ...prev, [name]: value }))
    setValue(name, value ? value.toLocaleDateString("ru-RU") : "")
    setOpenCalendars(prev => ({ ...prev, [name]: false }))
  }

  // 🧩 Сабмит
  const onSubmit = (data: Record<string, string>) => {
    const docData: Record<string, string> = {}

    // Основные поля
    for (const field of formFields) {
      docData[field.placeholderDoc || field.name] = data[field.name]
    }

    // Форматируем даты
    for (const [name, date] of Object.entries(dates)) {
      if (date) {
        const field = formFields.find(f => f.name === name)
        const classDate = field?.class_date
        const months = [
          "января", "февраля", "марта", "апреля", "мая", "июня",
          "июля", "августа", "сентября", "октября", "ноября", "декабря"
        ]
        const d = date.getDate().toString().padStart(2, "0")
        const m = months[date.getMonth()]
        const y = classDate === "short"
          ? (date.getFullYear() % 100).toString()
          : date.getFullYear().toString()

        docData[`${name}_Д`] = d
        docData[`${name}_М`] = m
        docData[`${name}_Г`] = y
      }
    }

    generateDoc(template, docData, "Договор_заполненный.docx")
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Шапка */}
      <section className="w-full h-[530px] bg-red-400 flex flex-col justify-center items-center">
        <h1 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white p-5 bg-black font-bold">
          Create your own contract
        </h1>
        <p className="text-center text-white text-[20px] mt-6">
          This application generates up-to-date contracts in many areas of activity.
        </p>
      </section>

      {/* Поля формы */}
      <div className="mt-15 max-w-5xl flex flex-col mx-auto gap-5 w-full mb-20 px-5">
        {formFields.map((field) => (
          <div key={field.name}>
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
              <>
                
                <InputForm
                  nameInp={field.name}
                  label={field.label}
                  type={field.type}
                  registerProps={register(field.name, {
                    required: field.required === true
                      ? "Это поле обязательно"
                      : typeof field.required === "string"
                      ? field.required
                      : false,
                    minLength: field.minLength
                      ? { value: field.minLength, message: `Минимум ${field.minLength} символов` }
                      : undefined,
                    maxLength: field.maxLength
                      ? { value: field.maxLength, message: `Максимум ${field.maxLength} символов` }
                      : undefined,
                     pattern: field.pattern
                      ? {
                          value:
                            typeof field.pattern === "string"
                              ? new RegExp(field.pattern) 
                              : field.pattern,
                          message: field.customMessage || "Некорректный формат",
                        }
                      : undefined,
                  })}
                />


                {errors[field.name] && (
                  <p className="text-red-500 text-sm mt-1">
                    {String(errors[field.name]?.message)}
                  </p>
                )}
              </>
            )}
          </div>
        ))}

        <Button type="submit">Скачать договор</Button>
      </div>
    </form>
  )
}
