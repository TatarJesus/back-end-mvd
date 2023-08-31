import { PartialType } from '@nestjs/mapped-types';
import { CreateBasicUsersDto } from './create-basic-users.dto';

export class UpdateBasicUsersDto extends PartialType(CreateBasicUsersDto) {}