//.d.ts == definition of typescript
export type GovHKCarparkVacancyItemDto = {
    spaceUNL: number,
    spaceEV: number,
    spaceDIS: number,
    space: number
};

export type GovHKCarparkVacancyResultResponseDto = {
    results: {
        park_Id: string,
        name: string,
        displayAddress: string,
        district: string,
        latitude: number,
        longitude: number,
        renditionUrls?: {
            banner?: string,
            carpark_photo?: string
        }
        ,
        privateCar: GovHKCarparkVacancyItemDto,
        LGV: GovHKCarparkVacancyItemDto,
        HGV: GovHKCarparkVacancyItemDto,
        coach: GovHKCarparkVacancyItemDto,
        motorCycle: GovHKCarparkVacancyItemDto
    }[]
};