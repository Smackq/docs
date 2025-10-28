export interface IFormField {
  label: string;
  name: string;
  type: string;
  placeholderDoc: string;
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
      { "label": "ФИО Продавца", "name": "fio_pr", "type": "string", "placeholderDoc": "Фио_Пр" },
    { "label": "Адрес продавца (фактический)", "name": "adres_pr_fact", "type": "string", "placeholderDoc": "Адрес_Пр_Факт" },
    { "label": "Адрес продавца (регистрация)", "name": "adres_pr_zar", "type": "string", "placeholderDoc": "Адрес_Пр_Зар" },
    { "label": "Серия паспорта продавца", "name": "ser_pr", "type": "string", "placeholderDoc": "Сер_Пр" },
    { "label": "Номер паспорта продавца", "name": "nom_pr", "type": "string", "placeholderDoc": "Ном_Пр" },
    { "label": "Дата выдачи паспорта продавца (день)", "name": "d_pr", "type": "number", "placeholderDoc": "Д_Пр" },
    { "label": "Дата выдачи паспорта продавца (месяц)", "name": "mes_pr", "type": "string", "placeholderDoc": "Мес_Пр" },
    { "label": "Дата выдачи паспорта продавца (год)", "name": "g_pr", "type": "number", "placeholderDoc": "Г_Пр" },
    { "label": "Кем выдан паспорт продавца", "name": "mesto_pr", "type": "string", "placeholderDoc": "Место_Пр" },

    { "label": "ФИО Покупателя", "name": "fio_pok", "type": "string", "placeholderDoc": "Фио_Пок" },
    { "label": "Адрес покупателя (фактический)", "name": "adres_pok_fact", "type": "string", "placeholderDoc": "Адрес_Пок_Факт" },
    { "label": "Адрес покупателя (регистрация)", "name": "adres_pok_zar", "type": "string", "placeholderDoc": "Адрес_Пок_Зар" },
    { "label": "Серия паспорта покупателя", "name": "ser_pok", "type": "string", "placeholderDoc": "Сер_Пок" },
    { "label": "Номер паспорта покупателя", "name": "nom_pok", "type": "string", "placeholderDoc": "Ном_Пок" },
    { "label": "Дата выдачи паспорта покупателя (день)", "name": "d_pok", "type": "number", "placeholderDoc": "Д_Пок" },
    { "label": "Дата выдачи паспорта покупателя (месяц)", "name": "mes_pok", "type": "string", "placeholderDoc": "Мес_Пок" },
    { "label": "Дата выдачи паспорта покупателя (год)", "name": "g_pok", "type": "number", "placeholderDoc": "Г_Пок" },
    { "label": "Кем выдан паспорт покупателя", "name": "mesto_pok", "type": "string", "placeholderDoc": "Место_Пок" },

    { "label": "Марка и модель ТС", "name": "marka_model", "type": "string", "placeholderDoc": "Марка_Модель" },
    { "label": "VIN номер", "name": "vin_nom", "type": "string", "placeholderDoc": "Вин_Ном" },
    { "label": "Год выпуска ТС", "name": "god_vypuska", "type": "number", "placeholderDoc": "Год_Выпуска" },
    { "label": "Номер двигателя", "name": "nom_dvig", "type": "string", "placeholderDoc": "Ном_Двиг" },
    { "label": "Номер шасси (рамы)", "name": "nom_shassi", "type": "string", "placeholderDoc": "Ном_Шасси" },
    { "label": "Номер кузова", "name": "nom_kuz", "type": "string", "placeholderDoc": "Ном_Куз" },
    { "label": "Цвет ТС", "name": "cvet", "type": "string", "placeholderDoc": "Цвет" },
    { "label": "Серия ПТС", "name": "seriya_ts", "type": "string", "placeholderDoc": "Серия_Тс" },
    { "label": "Номер ПТС", "name": "nom_ts", "type": "string", "placeholderDoc": "Ном_Тс" },
    { "label": "Кем выдан ПТС", "name": "mesto_ts", "type": "string", "placeholderDoc": "Место_Тс" },
    { "label": "Дата выдачи ПТС (день)", "name": "d_ts", "type": "number", "placeholderDoc": "Д_Тс" },
    { "label": "Дата выдачи ПТС (месяц)", "name": "mes_ts", "type": "string", "placeholderDoc": "Мес_Тс" },
    { "label": "Дата выдачи ПТС (год)", "name": "g_ts", "type": "number", "placeholderDoc": "Г_Тс" },
    { "label": "Цена ТС (цифрами)", "name": "cena_ts_cifr", "type": "number", "placeholderDoc": "Цена_Тс_Цифр" },
    { "label": "Цена ТС (прописью)", "name": "cena_ts_bukv", "type": "string", "placeholderDoc": "Цена_Тс_Букв" }


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