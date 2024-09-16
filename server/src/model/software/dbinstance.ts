export const dbinstance = `#graphql

type DatabaseInstance implements CiRoot{
    instanceId: ID! @id @unique
    description: String
    assetTag: String
    cost: Float
    isMarkedDelete: Boolean
    name: String!
    instanceOf: [Product!]! @relationship(type: "INSTANCE_OF" direction: IN)
}

`