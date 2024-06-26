import { IsEmail, IsOptional, IsString } from "class-validator";

export namespace AccountResister {
  export const topic = 'account.register.command';

  export class Request {
    @IsEmail()
    email: string;

    @IsString()
    password: string;

    @IsOptional()
    @IsString()
    displayName?: string;
  }

  export class Response {
    @IsEmail()
    email: string;
  }
}
