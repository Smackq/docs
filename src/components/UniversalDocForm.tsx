
'use client'
import { useState } from "react";
import { InputForm } from "@/components/ui/InputForm";
import { generateDoc } from "@/lib/generateDoc";
import { Calendar, CalendarDayButton } from "@/components/ui/calendarAndButton/calendar";


interface IUniversalFormProps {
  template: string;
  formFields: { label: string; name: string; type: string; placeholderDoc: string }[];
}

export function UniversalDocForm({ template, formFields }: IUniversalFormProps) {
  const initialState = formFields.reduce((acc, field) => {
    acc[field.name] = "";
    return acc;
  }, {} as Record<string, string>);

  const [form, SetForm] = useState(initialState);
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    SetForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const docData = formFields.reduce((acc, field) => {
      acc[field.placeholderDoc] = form[field.name];
      return acc;
    }, {} as Record<string, string>);

    docData["Дата"] = date ? date.toLocaleDateString('ru-RU') : new Date().toLocaleDateString('ru-RU');

    generateDoc(template, docData, "Договор_заполненный.docx");
  };

  return (
    
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
      {formFields.map((field) => (
        <InputForm
          key={field.name}
          name={field.name}
          label={field.label}
          type={field.type}
          value={form[field.name]}
          onChange={handleChange}
        />
      ))}


      <button
        type="button"
        className="mt-2 mb-2 p-2 border rounded"
        onClick={() => setIsCalendarOpen(!isCalendarOpen)}
      >
        {isCalendarOpen ? "Закрыть календарь" : "Выбрать дату"}
      </button>

      {/* Отрисовка календаря по условию */}
      {isCalendarOpen && <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-lg border"/>}

      <button
        type="submit"
        className="mt-6 w-full max-w-sm p-3 rounded-xl bg-gradient-to-r from-purple-500 to-orange-500 text-white"
      >
        Распечатать договор
      </button>
    </form>
  );
}
