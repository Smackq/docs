export interface IFormField {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
  placeholderDoc?: string;
  class_input?: string;
  class_date?: string;
  required?: boolean | string;
  min?: number;
  max?: number;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  customMessage?: string;
}

export interface IDocs {
  name: string;
  url: string;
  template: string;
  formFields: IFormField[];
}

export const DOCS: IDocs[] = [
  {
    name: "/contract/kuplya-prodazha-avtomobilya",
    url: "kuplya-prodazha-avtomobilya",
    template: "/KuplyaProdazha.docx",
    formFields: [
    { 
      "label": "Дата составления договора", 
      "name": "Договор", 
      "type": "date", 
      "class_date": "short",
      "required": true,
    },
    { 
      "label": "ФИО Продавца", 
      "name": "fio_pr", 
      "type": "string", 
      "placeholderDoc": "Фио_Пр",
      "minLength": 8,  
      "maxLength": 80, 
      "required": true,

      
    },
    { 
      "label": "Адрес продавца (фактический)", 
      "name": "adres_pr_fact", 
      "type": "string", 
      "placeholderDoc": "Адрес_Пр_Факт",
      "minLength": 8,  
      "maxLength": 100, 
      "required": true, 
    },
    { 
      "label": "Адрес продавца (регистрация)", 
      "name": "adres_pr_zar", 
      "type": "string", 
      "placeholderDoc": "Адрес_Пр_Зар", 
      "minLength": 8,  
      "maxLength": 100, 
      "required": true, 
    },
    { 
      "label": "Серия паспорта продавца", 
      "name": "ser_pr", 
      "type": "string",
      "placeholder": "1234",
      "placeholderDoc": "Сер_Пр", 
      pattern: "^[0-9]{4}$",
      "required": true, 
      
    },
    { 
      "label": "Номер паспорта продавца", 
      "name": "nom_pr", 
      "type": "string", 
      "placeholderDoc": "Ном_Пр", 
      pattern: "^[0-9]{6}$",
      "required": true, 
      "placeholder": "123456",
    },
    { 
      "label": "Дата выдачи паспорта продавца", 
      "name": "Пр", 
      "type": "date", 
      "class_date": "long",
      "required": true, 
    },
    { 
      "label": "Кем выдан паспорт продавца", 
      "name": "mesto_pr", 
      "type": "string", 
      "placeholderDoc": "Место_Пр" ,
      "minLength": 3,  
      "maxLength": 80, 
      "required": true,
    },

    { 
      "label": "ФИО Покупателя", 
      "name": "fio_pok", 
      "type": "string", 
      "placeholderDoc": "Фио_Пок",
      "minLength": 8,  
      "maxLength": 80, 
      "required": true,
      
    },
    { 
      "label": "Адрес покупателя (фактический)", 
      "name": "adres_pok_fact", 
      "type": "string", 
      "placeholderDoc": "Адрес_Пок_Факт",
      "minLength": 8,  
      "maxLength": 100, 
      "required": true,
    },
    { 
      "label": "Адрес покупателя (регистрация)", 
      "name": "adres_pok_zar", 
      "type": "string", 
      "placeholderDoc": "Адрес_Пок_Зар" ,
      "minLength": 8,  
      "maxLength": 100, 
      "required": true,
    },
    { 
      "label": "Серия паспорта покупателя", 
      "name": "ser_pok", 
      "type": "string", 
      "placeholderDoc": "Сер_Пок" ,
      "placeholder": "1234",
      pattern: "^[0-9]{4}$",
      "required": true,
    },
    { 
      "label": "Номер паспорта покупателя", 
      "name": "nom_pok", 
      "type": "string", 
      "placeholderDoc": "Ном_Пок" ,
      pattern: "^[0-9]{6}$",
      "required": true, 
      "placeholder": "123456",
    },
    { 
      "label": "Дата выдачи паспорта покупателя", 
      "name": "Пок", 
      "type": "date", 
      "placeholderDoc": "Пок", 
      "class_date": "long" ,
      "required": true, 
    },
    { 
      "label": "Кем выдан паспорт покупателя", 
      "name": "mesto_pok", 
      "type": "string", 
      "placeholderDoc": "Место_Пок",
      "minLength": 3,  
      "maxLength": 80, 
      "required": true,
    },

    { 
      "label": "Марка и модель ТС", 
      "name": "marka_model", 
      "type": "string", 
      "placeholderDoc": "Марка_Модель",
      "required": true,
      "minLength": 3,  
      "maxLength": 80, 
    },
    { 
      "label": "Город составления договора", 
      "name": "gorod_dogovora", 
      "type": "string", 
      "placeholderDoc": "Город",
      "required": true,
      "maxLength": 30,
      
},
    { 
      "label": "VIN номер", 
      "name": "vin_nom", 
      "type": "string", 
      "placeholderDoc": "Вин_Ном",
      "required": true,
      "minLength": 17,
      "maxLength": 17,
      pattern: "^[A-HJ-NPR-Z0-9]{17}$",
    },
    { 
      "label": "Год выпуска ТС", 
      "name": "god_vypuska", 
      "type": "string", 
      "placeholderDoc": "Год_Выпуска",
      "pattern": "^[0-9]{4}$",
      "required": true,
      "min": 1900,
      "max": 2025,
    },
    { 
      "label": "Номер двигателя", 
      "name": "nom_dvig", 
      "type": "string", 
      "placeholderDoc": "Ном_Двиг",
      "minLength": 3,
      "maxLength": 30,
      "required": true,
    },
    { 
      "label": "Номер шасси (рамы)", 
      "name": "nom_shassi", 
      "type": "string", 
      "placeholderDoc": "Ном_Шасси",
      "minLength": 3,
      "maxLength": 30,
    },
    { 
      "label": "Номер кузова", 
      "name": "nom_kuz", 
      "type": "string", 
      "placeholderDoc": "Ном_Куз",
      "minLength": 3,
      "maxLength": 30,
    },
    { 
      "label": "Цвет ТС", 
      "name": "cvet", 
      "type": "string", 
      "placeholderDoc": "Цвет",
      "minLength": 2,
      "maxLength": 20,
    },
    { 
      "label": "Серия ПТС", 
      "name": "seriya_ts", 
      "type": "string", 
      "placeholderDoc": "Серия_Тс",
      "pattern": "^[0-9]{2}[A-Za-zА-Яа-я]{2}$",
      "minLength": 4,
      "maxLength": 4,
      "placeholder": "77ТМ",
      "required": true,
    },
    { 
      "label": "Номер ПТС", 
      "name": "nom_ts", 
      "type": "string", 
      "placeholderDoc": "Ном_Тс",
      "pattern": "^[0-9]{6}$",
      "minLength": 6,
      "maxLength": 6,
      "placeholder": "123456",
      "required": true,
    },
    { 
      "label": "Кем выдан ПТС", 
      "name": "mesto_ts", 
      "type": "string", 
      "placeholderDoc": "Место_Тс",
      "minLength": 3,
      "maxLength": 80,
      "required": true,
    },
    { 
      "label": "Дата выдачи ПТС", 
      "name": "Тс", 
      "type": "date", 
      "placeholderDoc": "Тс", 
      "class_date": "long",
      "required": true,
    },
    { 
      "label": "Цена ТС (цифрами)", 
      "name": "Цена_Тс_Цифр", 
      "class_input": "price",
      "type": "string", 
      "placeholderDoc": "Цена_Тс_Цифр",
      "min": 1,
      "required": true,
      "pattern": "^[0-9]+$",
    },
    ],
  },
  {
    name: "Аренда недвижимости",
    url: "rentHouse",
    template: "/template2.docx",
    formFields: [
      { label: "ФИО", name: "inp1", type: "text", placeholderDoc: "ФИО" },
      { label: "Адрес", name: "inp2", type: "text", placeholderDoc: "Адрес" },
      { label: "Площадь", name: "inp3", type: "text", placeholderDoc: "Площадь" },
    ],
  },
];
