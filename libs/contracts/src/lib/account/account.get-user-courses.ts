import { IUserCourse } from "@school/libs/interfaces";
import { IsString } from "class-validator";

export namespace AccountGetUserCourses {
  export const topic = 'account.get-user-courses.query';

  export class Request {
    @IsString()
    id: string;
  }

  export class Response {
    courses: IUserCourse[];
  }
}
