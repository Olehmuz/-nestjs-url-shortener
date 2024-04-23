import { IUser } from "@school/libs/interfaces";
import { IsString } from "class-validator";

export namespace AccountGetUserInfo {
  export const topic = 'account.get-user.query';

  export class Request {
    @IsString()
    id: string;
  }

  export class Response {
    profile: Omit<IUser, 'passwordHash'>;
  }
}
