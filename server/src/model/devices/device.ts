export const device = `#graphql

interface Device implements CiRoot{
    instanceId: ID!
    description: String
    name: String!
    assetTag: String
    cost: Float
    isMarkedDelete: Boolean 
    hostName: String
    memory: BigInt
    connectsOn: [IP!]! @declareRelationship
}
`