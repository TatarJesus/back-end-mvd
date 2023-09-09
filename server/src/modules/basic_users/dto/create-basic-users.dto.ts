import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class CreateBasicUsersDto {
  first_name: string;
  last_name: string;
  @ApiProperty({ example: 'user@mail.ru', description: 'Почта' })
  @IsString({ message: 'Должно быть строкой' })
  @IsEmail({}, { message: 'Некорректный email' })
  readonly email: string;
  @ApiProperty({ example: '12345', description: 'пароль' })
  @IsString({ message: 'Должно быть строкой' })
  readonly password: string;
  phone_number?: string;
  role_id: number;
  visits?: number;
  secret_id?: number;
}
