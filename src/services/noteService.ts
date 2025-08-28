import axios from "axios";
import { Note, NoteId } from "../types/note";

export interface GetNotesResponse {
    notes: Note[];
    page: number;
    search: string;
    perPage: number;
}

export async function fetchNotes(page: number, perPage: number, search: string) {
    const res = await axios.get<GetNotesResponse>("https://notehub-public.goit.study/api", 
        {
            params: {
                perPage,
                page,
            },
            headers: {
                Authorization: `Bearer ${import.meta.env.VITE_NOTEHUB_TOKEN}`
            }
 }
)
    return res.data;
    
}

export async function createNote(newSearch: string) {
    const res = await axios.get("https://notehub-public.goit.study/api/");
    return res.data
}

export async function deleteNote(id:string) {
    const res = await axios.get("https://notehub-public.goit.study/api/")
    return res.data;
}