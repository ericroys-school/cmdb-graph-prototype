export const software = `#graphql
interface Software implements Component & CiRoot{
  instanceId: ID!
  description: String
  assetTag: String
  cost: Float
  isMarkedDelete: Boolean
  licenseType: String
  installLocation: String
  name: String!
  partOf: [Computer!]! @declareRelationship
}
`;