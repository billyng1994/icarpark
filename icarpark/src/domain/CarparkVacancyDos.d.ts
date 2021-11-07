export type GovVacancyItem = {
    spaceUNL: number,
    spaceEV: number,
    spaceDIS: number,
    space: number
};

export type GovCarparkItem = {
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
    privateCar: GovVacancyItem,
    LGV: GovVacancyItem,
    HGV: GovVacancyItem,
    coach: GovVacancyItem,
    motorCycle: GovVacancyItem
};