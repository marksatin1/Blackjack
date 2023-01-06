import axios from "axios";

export const docInst = axios.create({
    baseURL: "https://www.deckofcardsapi.com/api/deck",
});
