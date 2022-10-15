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
