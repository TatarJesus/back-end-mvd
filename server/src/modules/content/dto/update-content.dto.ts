import { ContentType } from '../entities/content.entity';

export class UpdateContentDTO {
  type?: ContentType;
  slug?: string;
  card?: string;
  title?: string;
  body?: string;
  link?: string;
  section_id?: number;
}
