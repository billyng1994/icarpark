import axios, { AxiosResponse } from "axios";
import React from "react";
import { GovCarparkItem } from "../domain/CarparkVacancyDos";
import { GovHKCarparkVacancyResultResponseDto } from "../domain/dto/GovHKDtos";

export default class GovHKExtService {
    static getCarparkVacancy(callback: (data: GovCarparkItem[]) => void){
        const promise: Promise<AxiosResponse<GovHKCarparkVacancyResultResponseDto>> = axios.get("https://api.data.gov.hk/v1/carpark-info-vacancy")
        promise.then((value: AxiosResponse<GovHKCarparkVacancyResultResponseDto>) =>{
            if (value.status ===200){
                callback(value.data.results as GovCarparkItem[]);
            }
        });
    }
}