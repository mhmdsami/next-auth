import NextAuth, { NextAuthOptions } from "next-auth";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import GithubProvider from "next-auth/providers/github";
import { dbClientPromise } from "@/utils/database";
import { GITHUB_CLIENT_ID, GITHUB_SECRET, AUTH_DB_NAME } from "@/utils/config";

export const authOptions: NextAuthOptions = {
  adapter: MongoDBAdapter(dbClientPromise, { databaseName: AUTH_DB_NAME }),
  providers: [
    GithubProvider({
      clientId: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_SECRET,
    }),
  ],
};

export default NextAuth(authOptions);
