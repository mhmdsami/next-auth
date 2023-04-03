import { MONGO_URI } from "./config";
import { MongoClient } from "mongodb";

const initializeClient = async (): Promise<MongoClient> => {
  try {
    return MongoClient.connect(MONGO_URI);
  } catch (e) {
    throw e;
  }
};

export const dbClientPromise = initializeClient();
