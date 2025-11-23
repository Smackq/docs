// UniversalDocForm.tsx
'use client'
import { convert as convertNumberToWordsRu } from 'number-to-words-ru'
import React from "react"
import { useForm, Controller } from "react-hook-form"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ru } from "date-fns/locale"; 
import { InputForm } from "@/components/ui/InputForm"
import { Button } from "./ui/button"
import { IFormField } from "@/config/configDocs"
import { generateDoc } from "@/lib/generateDoc"

interface IUniversalFormProps {
  template: string
  formFields: IFormField[]
}

type FormValues = Record<string, any>

export function UniversalDocForm({ template, formFields }: IUniversalFormProps) {
  // Инициализация формы
  const { register, handleSubmit, formState: { errors }, control } = useForm<FormValues>()

  // -----------------------------
  // Сабмит: подготовка данных для генерации документа
  // -----------------------------
  const onSubmit = (data: Record<string, string | Date>) => {
    const docData: Record<string, any> = {}

for (const field of formFields) {
  docData[field.placeholderDoc || field.name] = data[field.name] ?? ""
}

    // Форматируем даты (Д, М, Г)
    for (const field of formFields) {
      if (field.type === "date") {
        const date = data[field.name]
        if (date instanceof Date) {
          const months = [
            "января","февраля","марта","апреля","мая","июня",
            "июля","августа","сентября","октября","ноября","декабря"
          ];
          const d = date.getDate().toString().padStart(2, "0");
          const m = months[date.getMonth()];
          const y = field.class_date === "short"
            ? (date.getFullYear() % 100).toString()
            : date.getFullYear().toString();
          docData[`${field.name}_Д`] = d
          docData[`${field.name}_М`] = m
          docData[`${field.name}_Г`] = y
        }
      }
      if (field.class_input === "price") {
      const rawPrice = data[field.name] // уже здесь
      // при необходимости преобразовать в пропись:
      const priceWords = convertNumberToWordsRu(String(rawPrice ?? "0"))
      // docData[`${field.name}_WORDS`] = priceWords
      console.log(priceWords)
    }
    }

    generateDoc(template, docData, "customizedoc.docx")
  }


  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <section className="w-full h-[530px] bg-red-400 flex flex-col justify-center items-center">
        <h1 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white p-5 bg-black font-bold">
          Create your own contract
        </h1>
        <p className="text-center text-white text-[20px] mt-6">
          This application generates up-to-date contracts in many areas of activity.
        </p>
      </section>

  
      <div className="mt-15 max-w-5xl flex flex-col mx-auto gap-5 w-full mb-20 px-5">
        {formFields.map((field) => (
          <div key={field.name} className="mb-4">
            {field.type === "date" ? (
              <>
           
                <label className="block mb-1 text-gray-700">{field.label}</label>
        
                <Controller
                  control={control}
                  name={field.name}
                  render={({ field: { onChange, value } }) => (
                    <DatePicker
                      selected={value ? new Date(value) : null}
                      onChange={onChange}
                      locale={ru}
                      dateFormat="dd.MM.yyyy"
                      showMonthDropdown
                      showYearDropdown
                      dropdownMode="select"
                      className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-400"
                      isClearable
                    />
                  )}
                />
              </>
            ) : (
              <>
   
                <InputForm
                  placeholder={field.placeholder}
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
