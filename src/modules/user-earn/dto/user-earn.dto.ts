import { IsOptional, IsString } from 'class-validator';

export class UserEarnDto {
  @IsString()
  email: string;

  @IsString()
  userId: string;

  @IsOptional()
  @IsString()
  firstName?: string;

  @IsOptional()
  @IsString()
  lastName?: string;

  @IsOptional()
  @IsString()
  profileImageUrl?: string;
}