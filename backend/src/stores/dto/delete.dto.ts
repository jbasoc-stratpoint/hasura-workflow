import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';
import { Transform } from 'class-transformer';

export class DeleteDto {
  @ApiProperty({
    description: `Store ID to be deleted`,
    type: String,
    required: true,
  })
  @Transform(({ value }) => parseInt(value))
  @IsNumber()
  id: number;
}
