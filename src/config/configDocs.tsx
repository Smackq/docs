

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
    template: "/template1.docx",
    formFields: [
      { label: "ФИО", name: "inp1", type: "text", placeholderDoc: "ФИО" },
      { label: "Марка машины", name: "inp2", type: "text", placeholderDoc: "Марка" },
      { label: "Номер машины", name: "inp3", type: "text", placeholderDoc: "Номер" },
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
