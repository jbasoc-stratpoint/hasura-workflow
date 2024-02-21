import { ApiProperty } from '@nestjs/swagger';
import { Decimal } from "@prisma/client/runtime/library";
import { Prisma } from '@prisma/client';
import { Transform } from 'class-transformer';
import { IsLatitude, IsLongitude, IsNumber, IsString } from 'class-validator';

export class CreateDto {
  @ApiProperty({
    description: `Store Name`,
    type: String,
    required: true,
  })
  @IsString()
  @Transform(({ value }) => value?.trim())
  name: string;

  @ApiProperty({
    description: `Store Address`,
    type: String,
    required: true,
  })
  @IsString()
  @Transform(({ value }) => value?.trim())
  address: string;

  @ApiProperty({
    description: `Store City Location`,
    type: String,
    required: true,
  })
  @IsString()
  @Transform(({ value }) => value?.trim())
  city: string;

  @ApiProperty({
    description: `Store State Location`,
    type: String,
    required: true,
  })
  @IsString()
  @Transform(({ value }) => value?.trim())
  state: string;

  @ApiProperty({
    description: `Store zipcode`,
    type: String,
    required: true,
  })
  @IsNumber()
  zipCode: Decimal;

  @ApiProperty({
    description: `Store latitude`,
    type: String,
    required: true,
  })
  @IsLatitude()
  latitude: Decimal;

  @ApiProperty({
    description: `Store longitude`,
    type: String,
    required: true,
  })
  @IsLongitude()
  longitude: Decimal;
}
