export const application = `#graphql

  type Application implements CiRoot{
    instanceId: ID! @id @unique
    description: String
    name: String!
    assetTag: String
    cost: Float      
    buildNumber: String
    patchNumber: String
    type: String
    isMarkedDelete: Boolean @default(value: false)
    runsOnServer: [Computer!]! @relationship(type: "RUNS_ON", direction: OUT)
    owner: [Person!]! @relationship(type: "OWNS", direction: IN)
    uses: [Product!]! @relationship(type: "USES", direction: OUT)
  }

  input ApplicationCreateInput{
      description: String
      name: String
      assetTag: String
      cost: Float
      buildNumber: String
      patchNumber: String
      type: String
    }

  `  
