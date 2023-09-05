import { PartialType } from '@nestjs/mapped-types';
import { CreateAdminsDto } from './create-admins.dto';

export class UpdateAdminsDto extends PartialType(CreateAdminsDto) {}
