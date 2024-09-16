import { config } from 'dotenv';
import path from 'node:path';
import { readFile } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { Neo4jGraphQL } from '@neo4j/graphql';
import neo4j from 'neo4j-driver';
import { typeDefArray } from '../model/index.js';

const dir = path.dirname(fileURLToPath(import.meta.url));
//deal with a bit different location for finding .env
const c = config({ path: path.resolve(dir, '../../src/.env') });

const instance = process.env.DB_INSTANCE ?? 'bolt://localhost:7687';
const user = process.env.DB_USER ?? 'neo4j';
const pass = process.env.DB_PASS ?? '';
console.log(`Connecting to ${instance} as ${user}`);
const driver = neo4j.driver(instance, neo4j.auth.basic(user, pass));

export const neoSchema = new Neo4jGraphQL({ typeDefs: typeDefArray, driver });
