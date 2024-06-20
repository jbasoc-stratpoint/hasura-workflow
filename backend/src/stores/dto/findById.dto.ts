import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';
import { Transform } from 'class-transformer';

export class FindByIdDto {
  @ApiProperty({
    description: `Store ID to find`,
    type: String,
    required: true,
  })
  @Transform(({ value }) => parseInt(value))
  @IsNumber()
  id: number;
}
