export class CreateBasicUsersDto {
    first_name: string;
    last_name: string;
    email: string;
    phone_number?: string;
    role_id?: number;
    visits?: number;
    secret_id: number;
  }