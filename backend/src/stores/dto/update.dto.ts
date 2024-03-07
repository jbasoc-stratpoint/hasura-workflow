import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsNumber, IsString, IsLongitude, IsLatitude, IsOptional } from 'class-validator';
import { Decimal } from '@prisma/client/runtime/library';

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
    description: `Store Name`,
    type: String,
    required: false,
  })
  @IsOptional()
  @IsString()
  @Transform(({ value }) => value?.trim())
  name: string;

  @ApiProperty({
    description: `Store Address`,
    type: String,
    required: false,
  })
  @IsOptional()
  @IsString()
  @Transform(({ value }) => value?.trim())
  address: string;

  @ApiProperty({
    description: `Store City Location`,
    type: String,
    required: false,
  })
  @IsOptional()
  @IsString()
  @Transform(({ value }) => value?.trim())
  city: string;

  @ApiProperty({
    description: `Store State Location`,
    type: String,
    required: false,
  })
  @IsOptional()
  @IsString()
  @Transform(({ value }) => value?.trim())
  state: string;

  @ApiProperty({
    description: `Store zipcode`,
    type: String,
    required: false,
  })
  @IsOptional()
  @IsNumber()
  zipCode: Decimal;

  @ApiProperty({
    description: `Store latitude`,
    type: String,
    required: false,
  })
  @IsOptional()
  @IsLatitude()
  latitude: Decimal;

  @ApiProperty({
    description: `Store longitude`,
    type: String,
    required: false,
  })
  @IsOptional()
  @IsLongitude()
  longitude: Decimal;
}