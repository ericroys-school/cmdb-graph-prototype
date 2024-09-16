export const memory = `#graphql

type Memory implements Component & CiRoot{
    instanceId: ID! @id @unique
    description: String
    assetTag: String
    cost: Float
    isMarkedDelete: Boolean
    size: BigInt!
    partOf: [Computer!]! @relationship(type:"PART_OF", direction: IN)
  }

`