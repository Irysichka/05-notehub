export interface Note {
    id: string;
    title: string;
    content: string;
    createAt?: string;
    updateAt?: string;
    tag: "Work" | "Personal" | "Meeting" | "Shopping" | "Todo";
}

export type NoteId = Note["id"];