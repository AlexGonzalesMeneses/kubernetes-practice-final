import { IsNotEmpty, IsString } from 'class-validator';

export class EmployeeDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  readonly lastName: string;

  @IsNotEmpty()
  @IsString()
  readonly role: string;
}
