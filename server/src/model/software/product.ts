export const product = `#graphql

type Product implements Software & Component & CiRoot{
    instanceId: ID! @id @unique
    description: String
    assetTag: String
    cost: Float
    isMarkedDelete: Boolean
    licenseType: String
    installLocation: String
    name: String!
    version: String!
    productType: String
    partOf: [Computer!]! @relationship(type:"INSTALLED_ON" direction: IN)
    instanceOf: [DatabaseInstance!]! @relationship(type:"INSTANCE_OF" direction: OUT)
}

`