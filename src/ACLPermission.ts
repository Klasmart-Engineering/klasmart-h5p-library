import { GraphQLClient } from 'graphql-request'

import Global = NodeJS.Global;
export interface GlobalWithCognitoFix extends Global {
    fetch: any
}
declare const global: GlobalWithCognitoFix;
global.fetch = require('node-fetch');

import Logger from './helpers/Logger';
const log = new Logger('ACLPermission');


/** Contains logic to make request to the ACL Permissions API using graphql */
export default class ACLPermission {
  private graphQLClient: GraphQLClient;
  private aclPrefix: string = process.env.ACL_OBJECT_ID_PREFIX || 'h5p:';

  constructor(
    private token: string,
    private endpoint: string = "http://localhost:8000/graphql",
  ) {
      this.graphQLClient = new GraphQLClient(
          endpoint,
          {
              headers: 
              {
                  authorization: this.token
              }
          }
      );
  }

    async createACL(ownerId: string, objectId: string, defaultLevel: string): Promise<any> {
        log.debug(`Creating new ACL document for contentId '${objectId}', user '${ownerId}' and level '${defaultLevel}'.`)
        const query = `
        mutation createACL($ownerId: ID!, $objectId: ID!, $defaultLevel: AccessLevel){
            createACL(
              objectId:$objectId,
              ownerId:$ownerId,
              defaultLevel: $defaultLevel
            ) {
              _id
              objectId
              ownerId,
              defaultLevel,
              accessControl {
                ... on UserAccessControl {
                    userId
                    level
                  }
                ... on GroupAccessControl {
                    groupId
                    level
                }
              }
            }
          }`

        const variables = {
            objectId: `${this.aclPrefix}${objectId}`,
            ownerId: ownerId,
            defaultLevel: defaultLevel
        }

        return await this.graphQLClient.request(query, variables);
    }

    async getACL(id: string): Promise<any> {
      log.debug(`Getting ACL document with id ${id}.`);
        const query = `
        query {
            getACL(_id: $id)
            {
              _id
              objectId
              ownerId,
              defaultLevel
              accessControl {
                  ... on UserAccessControl {
                  userId
                  level
                }
                ... on GroupAccessControl {
                  groupId
                  level
                }
              }
            }
          } `

        const variables = {
            id: id
        }

        return await this.graphQLClient.request(query, variables);
    }

    async rmACL(objectId: string): Promise<string> {
      log.debug(`Deleting ACL document with contentId ${objectId}.`)
      const query = `
      mutation rmACL($objectId: ID!){
        rmACL(objectId: $objectId)
      }`

      const variables = {
          objectId: `${this.aclPrefix}${objectId}`
      }

      return await this.graphQLClient.request(query, variables);
    }

    public async getMyAcessLevel(objectId: string): Promise<string> {
      log.debug(`Getting access Level for document with contentId ${objectId}.`)
      const query = `
        query getMyAccessLevel($objectId: ID!) {
          getMyAccessLevel(objectId: $objectId)
        }
      `
      const variables = {
        objectId: `${this.aclPrefix}${objectId}`
      }

      return await this.graphQLClient.request(query, variables);
    }
    
}
