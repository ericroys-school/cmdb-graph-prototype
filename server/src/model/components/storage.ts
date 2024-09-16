export const storage = `#graphql
type Storage implements Component & CiRoot{
    instanceId: ID! @id @unique
    description: String
    assetTag: String
    cost: Float
    isMarkedDelete: Boolean
    mediaType: MediaType!
    size: BigInt!

    partOf: [Computer!]! @relationship(type:"PART_OF", direction: IN)
}
`;

