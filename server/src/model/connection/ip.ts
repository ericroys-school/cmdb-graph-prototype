export const ip = `#graphql

type IP implements CiRoot{
    instanceId: ID! @id @unique
    address: String!
    port: Int
    description: String
    assetTag: String
    cost: Float
    isMarkedDelete: Boolean 
    connects: [Device!]! @relationship(type: "CONNECTS_ON", direction: OUT)
}
`