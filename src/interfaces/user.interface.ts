import { ShortcutData } from "./shortcuts.interface";

export interface UserData {
    email: string;
    name: string;
    password: string;
    created_dttm: string;
    updated_dttm: string;
}
  

export interface CreatedUserData {
    createdUser: UserData,
    token: string;
}

export interface UserShortcut {
    email: string;
    name: string;
    password: string;
    created_dttm: string;
    updated_dttm: string;
    shortcuts: ShortcutData
}