'use client'
import { useRef,  useEffect } from "react";
import { useState } from "react"
import gsap from "gsap"
import PizZip from "pizzip";
import Docxtemplater from "docxtemplater";
import { saveAs } from "file-saver";


export function DocForm1() {
    const button1 = useRef<HTMLButtonElement>(null)
      useEffect(() => {
    if (button1.current) {
      // создаём timeline
      /* gsap.to(button1.current, {
        duration: 10,      // время анимации
        x: 1500,           // смещение вправо
        rotation: 0,     // небольшое вращение
        yoyo: true,       // обратно
        repeat: -1,       // бесконечно
        // плавность
      }) */
    }
  }, [])
    const [form, SetForm] = useState({
        inp1: '',
        inp2: '',
        inp3: '',
        data: '',
    })

const generateDoc = async () => {
    try {
      // Загрузка шаблона .docx (файл должен лежать в public)
      const response = await fetch("/template1.docx");
      const content = await response.arrayBuffer();

      const zip = new PizZip(content);
      const doc = new Docxtemplater(zip, { paragraphLoop: true, linebreaks: true });

      // Заполнение плейсхолдеров
      doc.render({
        ФИО: form.inp1,
        Марка: form.inp2,
        Номер: form.inp3,
        Дата: new Date().toLocaleDateString(),
      });

      // Генерация итогового документа и сохранение
      const blob = doc.getZip().generate({ type: "blob" });
      saveAs(blob, "Договор_заполненный.docx");
    } catch (error) {
      console.error("Ошибка при заполнении шаблона:", error);
      alert("Не удалось сгенерировать документ.");
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    generateDoc();
  };

    function CreateForm(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target
       SetForm({
      ...form,
      [name]: value,
    })
        
          
        

    }
    return(
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col justify-center gap-5">
                <label   className="text-center">Фамилия|Имя|Отчество
                <input className="border" name="inp1" value={form.inp1} onChange={CreateForm} />
                </label>
                <label className="text-center">Марка и модель машины
                <input className="border" name="inp2" value={form.inp2} onChange={CreateForm}/>
                </label>
                <label className="text-center">Номер машины
                <input className="border" name="inp3" value={form.inp3} onChange={CreateForm}/>
                </label>
                <label className="text-center">Дата договора - текущая
                <input className="border" type="checkbox"/>
                </label>    
                <span>{form.data}</span>
            </div>
            
            <button ref={button1} className="cursor-pointer border-2 mx-auto block mt-10 p-5 rounded-2xl bg-gradient-to-r from-orange-500 via-purple-500 to-green-500 hover:bg-amber-400 hover:text-white hover:border-pink-400 transition-colors duration-100" type="submit">Распечатать договор</button>
        </form>
    )
}
