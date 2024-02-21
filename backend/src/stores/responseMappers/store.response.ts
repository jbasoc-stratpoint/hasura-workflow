import { ApiProperty } from '@nestjs/swagger';
import { Decimal } from '@prisma/client/runtime/library';

export class ItemResponse {
  @ApiProperty({
    description: 'The store id',
    example: `aae3de94-3fea-440b-bcf6-cd976ff36509`,
    type: String,
  })
  id: number;

  @ApiProperty({
    description: `The store name`,
    example: 'Test Store 001',
    type: String,
  })
  name: string;

  @ApiProperty({
    description: `The store address`,
    example: '3149 Stevens Creek Boulevard',
    type: String,
  })
  address: string;

  @ApiProperty({
    description: `The store city`,
    example: 'San Jose',
    type: String,
  })
  city: string;

  @ApiProperty({
    description: `The store state`,
    example: 'CA',
    type: String,
  })
  state: string;

  @ApiProperty({
    description: `The store zipcode`,
    example: 95117,
    type: String,
  })
  zipCode: Decimal;

  @ApiProperty({
    description: `The store latitude`,
    example: -121.952181,
    type: String,
  })
  latitude: Decimal;

  @ApiProperty({
    description: `The store longitude`,
    example: -121.952181,
    type: String,
  })
  longitude: Decimal;

  @ApiProperty({
    description: `The store creation date time`,
    example: `2024-02-21T12:02:27.322Z`,
    type: Date,
  })
  created: Date;

  @ApiProperty({
    description: `The store updated date time`,
    example: `2024-02-21T12:02:27.322Z`,
    type: Date,
  })
  updated: Date;
}
