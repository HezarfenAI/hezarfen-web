"use server"

import axios from "axios";

const url = "http://185.233.164.103/v1/hezarfen/";

export const sendQuesstion = async (text: string): Promise<string> => {
    let response = await axios.post(
        `${url}fake-news-checker?text=${encodeURIComponent(text)}`,
    );

    return response.data.analyze_result;
}

export const sendData = async (text: string, url: string, label: string) => {
    await axios.post(`http://127.0.0.1:8000/v1/hezarfen/teach`, {
        url: url,
        label: label,
        text: text,
    });
}