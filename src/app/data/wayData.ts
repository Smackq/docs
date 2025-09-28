export interface IWAYDOCS {
    title: string,
    url: string,
    doc: IDOCS[],
}

export interface IDOCS {

  name: string
}

export const WAYDOCS:IWAYDOCS[] = [
    {
        title: "Автомобили",
        url: "avto",
        doc: 
            [
                {
                    name:"Аренда транспорта",
                },
                {
                    name: "Продажа транспорта"
                },
            ]
        
    },
    {
        title: "Недвижимость",
        url: "House",
        doc: 
            [
                {
                    name:"Аренда жилья",
                },
                {
                    name: "Продажа жилья"
                },
            ]
        
    },
    

]