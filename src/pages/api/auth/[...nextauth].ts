import NextAuth, { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { GITHUB_CLIENT_ID, GITHUB_SECRET } from "@/utils/config";

export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_SECRET,
    }),
  ],
};

export default NextAuth(authOptions);
