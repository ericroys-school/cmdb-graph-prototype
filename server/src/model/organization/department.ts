export const department = `#graphql

type Department implements CiRoot{
    instanceId: ID! @id @unique
    name: String!
    description: String
    assetTag: String
    cost: Float
    isMarkedDelete: Boolean @default(value:false)
    works: [Person!]! @relationship(type: "WORKS", direction: IN)
    organization: [Organization!]! @relationship(type: "REPORTS_TO", direction: OUT)
}`;
