export const computer = `#graphql
  
  type Computer implements Device & CiRoot{
    instanceId: ID! @id @unique
    isVirtual: Boolean @default(value: false)
    description: String
    name: String!
    assetTag: String
    cost: Float
    isMarkedDelete: Boolean @default(value: false)
    hostName: String
    memory: BigInt
 
    runsApplication: [Application!]! @relationship(type: "RUNS_ON", direction: IN)
    connectsOn: [IP!]! @relationship(type: "CONNECTS_ON", direction: IN)
  }
    input ComputerInput{
    description: String
    name: String
    hostName: String
    memory: BigInt
    assetTag: String
    cost: Float
  }

  `;     

      