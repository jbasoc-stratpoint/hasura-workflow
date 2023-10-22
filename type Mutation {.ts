type Mutation {
  createItem (item: ItemInput!): ItemOutput
}

type ItemOutput {
  id: Float!
}

input ItemInput {
  id: Float!
}


curl -X POST http://localhost:4000/createItem -d