'use client'
import { useRef,  useEffect } from "react";
import { useState } from "react"
import gsap from "gsap"



export function DocForm1() {
    const button1 = useRef<HTMLButtonElement>(null)
      useEffect(() => {
    if (button1.current) {
      // создаём timeline
      gsap.to(button1.current, {
        duration: 1,      // время анимации
        x: 1500,           // смещение вправо
        rotation: 0,     // небольшое вращение
        yoyo: true,       // обратно
        repeat: -1,       // бесконечно
        // плавность
      })
    }
  }, [])
    const [form, SetForm] = useState({
        inp1: '',
        inp2: '',
        inp3: '',
        data: '',
    })

    console.log(form)

    function CreateForm(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target
       SetForm({
      ...form,
      [name]: value,
    })
        
          
        

    }
    return(
        <form >
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
