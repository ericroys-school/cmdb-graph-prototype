export const organization = `#graphql

type Organization implements CiRoot{
    instanceId: ID! @id @unique
    name: String!
    description: String
    assetTag: String
    cost: Float
    isMarkedDelete: Boolean @default(value:false)
    departments: [Department!]! @relationship(type: "REPORTS_TO", direction: IN)
    company: [Company!]! @relationship(type: "ORGANIZED_BY", direction: OUT)
}
`;
