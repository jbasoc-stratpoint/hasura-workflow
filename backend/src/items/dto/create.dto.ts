import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsString } from 'class-validator';

export class CreateDto {
  @ApiProperty({
    description: `Item Name`,
    type: String,
    required: true,
  })
  @IsString()
  @Transform(({ value }) => value?.trim())
  name: string;
}
