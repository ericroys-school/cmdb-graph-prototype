export const os = `#graphql

type OperatingSystem implements Software & Component & CiRoot{
    instanceId: ID! @id @unique
    description: String
    assetTag: String
    cost: Float
    isMarkedDelete: Boolean
    licenseType: String
    installLocation: String
    name: String!
    Type: String
    partOf: [Computer!]! @relationship(type:"PART_OF", direction: IN) 
}

`