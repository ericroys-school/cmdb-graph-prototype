export const location = `#graphql

type Location implements CiRoot{
    instanceId: ID! @id @unique
    description: String
    assetTag: String
    cost: Float
    isMarkedDelete: Boolean
    address: String!
    city: String!
    state: String!
    zipcode: Int!
    label: String
    locates: [CiRoot!]! @relationship(type: "LOCATES" direction: OUT)
}
`