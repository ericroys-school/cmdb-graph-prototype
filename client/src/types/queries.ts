import { gql } from '@apollo/client';

export const IPS = gql`
  query getIPs {
    ips {
      instanceId
      address
      connects {
        instanceId
        hostName
        name
        isMarkedDelete
        memory
      }
      isMarkedDelete
      port
    }
  }
`;
