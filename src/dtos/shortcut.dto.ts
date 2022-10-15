import { IsString, IsNotEmpty } from 'class-validator';

export class CreateShortcutDto {

    @IsString()
    @IsNotEmpty()
    public short_link: string;

    @IsString()
    @IsNotEmpty()
    public description: string;

    @IsString()
    @IsNotEmpty()
    public url: string;

}


export class SearchShortcutDto {

    @IsString()
    @IsNotEmpty()
    public email: string;

    @IsString()
    public short_link: string;

    public description: string;

    public tags: string[];

}
