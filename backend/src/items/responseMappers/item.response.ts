import { ApiProperty } from '@nestjs/swagger';

export class ItemResponse {
  @ApiProperty({
    description: 'The item id',
    example: `aae3de94-3fea-440b-bcf6-cd976ff36509`,
    type: String,
  })
  id: number;

  @ApiProperty({
    description: `The item name`,
    example: 'Test Item 001',
    type: String,
  })
  name: string;

  @ApiProperty({
    description: `The item creation date time`,
    example: `2024-02-21T12:02:27.322Z`,
    type: Date,
  })
  created: Date;

  @ApiProperty({
    description: `The item updated date time`,
    example: `2024-02-21T12:02:27.322Z`,
    type: Date,
  })
  updated: Date;
}
