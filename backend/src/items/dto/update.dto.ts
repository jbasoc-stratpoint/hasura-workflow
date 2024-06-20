import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateIdDto {
  @ApiProperty({
    description: `Item ID to be updated`,
    type: String,
    required: true,
  })
  @Transform(({ value }) => parseInt(value))
  @IsNumber()
  id: number;
}

export class UpdateBodyDto {
  @ApiProperty({
    description: `Item Name to be updated`,
    type: String,
    required: false,
  })
  @IsOptional()
  @IsString()
  @Transform(({ value }) => value?.trim())
  name: string;
}
