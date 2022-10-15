export interface ShortcutData {
    short_link: string;
    email_id: string;
    description: string;
    url: string;
    created_dttm: string;
    update_dttm: string;
}

export interface SearchShortcut {
    email: string;
    short_link: string;
    description: string;
    tags: string[];
}