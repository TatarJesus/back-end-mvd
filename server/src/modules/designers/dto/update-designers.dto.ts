import { PartialType } from '@nestjs/mapped-types';
import { CreateDesignersDto } from './create-designers.dto';

export class UpdateDesignersDto extends PartialType(CreateDesignersDto) {}
