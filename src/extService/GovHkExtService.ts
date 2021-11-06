import axios, { AxiosResponse } from "axios";
import React from "react";
import { CarparkItem } from "../domain/CarparkVacancyDos";
import { GovHKCarparkVacancyResultResponseDto } from "../domain/dto/GovHKDtos";

export default class GovHKExtService {
    static getCarparkVacancy(callback: (data: CarparkItem[]) => void){
        const promise: Promise<AxiosResponse<GovHKCarparkVacancyResultResponseDto>> = axios.get("https://api.data.gov.hk/v1/carpark-info-vacancy")
        promise.then((value: AxiosResponse<GovHKCarparkVacancyResultResponseDto>) =>{
            if (value.status ===200){
                callback(value.data.results as CarparkItem[]);
            }
        });
        // promise in get means it will get into async mode, opening a parallel universe and continue asyncronisely
        /* Simplified version
            axios.get<GovHKCarparkVacancyResponseDto>("https://api.data.gov.hk/v1/carpark-info-vacancy")
                .then((value: AxiosResponse<any>) => {
                    if (value.status ===200){
                        callback(value.data);
                    }
                });
        */

    }
}