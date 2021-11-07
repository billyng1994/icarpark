export type GovHKCarparkVacancyResultResponseDto = {
    results: {
        park_Id: string,
        name: string,
        nature: string,
        carpark_Type: string,
        displayAddress: string,
        district: string,
        latitude: number,
        longitude: number,
        contactNo: string,
        website: string,
        renditionUrls?: {
            banner?: string,
            carpark_photo?: string
        },
        gracePeriods?: {
            minutes: number
        },
        privateCar: {
            hourlyCharges?: //continue here
            GovHKCarparkVacancyItemDto
        },
        LGV: GovHKCarparkVacancyItemDto,
        HGV: GovHKCarparkVacancyItemDto,
        coach: GovHKCarparkVacancyItemDto,
        motorCycle: GovHKCarparkVacancyItemDto
    }[]
};


export type GovHKCarparkVacancyItemDto = {
    spaceUNL: number,
    spaceEV: number,
    spaceDIS: number,
    space: number
};