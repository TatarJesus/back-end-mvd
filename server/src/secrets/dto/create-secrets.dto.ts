export class CreateSecretsDto {
  password_hash: string;
  old_password: string;
  password_salt: string;
}
