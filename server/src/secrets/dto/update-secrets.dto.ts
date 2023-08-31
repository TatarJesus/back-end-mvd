import { PartialType } from '@nestjs/mapped-types';
import { CreateSecretsDto } from './create-secrets.dto';

export class UpdateSecretsDto extends PartialType(CreateSecretsDto) {}