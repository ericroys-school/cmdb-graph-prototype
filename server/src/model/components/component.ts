export const component = `#graphql

interface Component implements CiRoot{
  instanceId: ID!
  description: String
  assetTag: String
  cost: Float
  isMarkedDelete: Boolean 
  partOf: [Computer!]! @declareRelationship
}
`;
