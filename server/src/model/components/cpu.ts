export const cpu = `#graphql
type CPU implements Component & CiRoot{
    instanceId: ID! @id @unique
    description: String
    assetTag: String
    cost: Float
    isMarkedDelete: Boolean
    architecture: String
    processorFamily: String
    speed: Int
    type: String
    numCores: Int

    partOf: [Computer!]! @relationship(type:"PART_OF", direction: IN)
}
`;
