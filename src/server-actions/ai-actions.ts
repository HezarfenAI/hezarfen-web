"use server"

import axios from "axios";


export const sendQuesstion = async (text: string): Promise<string> => {
    let response = await axios.post(
        `http://185.233.164.103/v1/hezarfen/fake-news-checker?text=${encodeURIComponent(text)}`,
    );

    return response.data.analyze_result;
}