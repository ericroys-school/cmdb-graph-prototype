export const person = `#graphql
  
  type Person implements CiRoot{
    instanceId: ID! @id @unique
    lastName: String
    firstName: String
    midddleName: String
    description: String
    assetTag: String
    cost: Float
    isMarkedDelete: Boolean @default(value: false)
      
    applicationOwner: [Application!]! @relationship(type: "OWNS", direction: OUT) 
    department: [Department!]! @relationship(type: "WORKS_IN", direction: OUT)
  }

`;
