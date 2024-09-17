export const company = `#graphql

type Company implements CiRoot {
    name: String! @unique
    type: String
    description: String
    instanceId: ID! @id @unique
    assetTag: String
    cost: Float
    isMarkedDelete: Boolean @default(value:false)
    organization: [Organization!]! @relationship(type: "ORGANIZED_BY", direction: IN)
}

`;
