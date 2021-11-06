//.d.ts == definition of typescript
export type VacancyItem = {
    spaceUNL: number,
    spaceEV: number,
    spaceDIS: number,
    space: number
};

export type CarparkItem = {
    park_Id: string,
    name: string,
    displayAddress: string,
    district: string,
    latitude: number,
    longitude: number,
    renditionUrls?: {
        banner?: string,
        carpark_photo?: string
    },
    privateCar: VacancyItem,
    LGV: VacancyItem,
    HGV: VacancyItem,
    coach: VacancyItem,
    motorCycle: VacancyItem
};