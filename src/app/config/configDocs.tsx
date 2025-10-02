import { DocForm1 } from "./docForms/DocForm1"

export interface IDocs {
    name:string,
    url:string,
    Form: React.ComponentType
}



export const DOCS:IDocs[] = [
    {
        name: 'Аренда транспорта',
        url: "rentCar",
        Form: DocForm1, 

    },
    {
        name: 'Аренда недвижимости',
        url: "rentHouse",
        Form: DocForm1,
    },

] 

