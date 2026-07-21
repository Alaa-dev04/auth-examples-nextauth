import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { getuserbyemail } from "./data/user";
import { User } from "./models/user";
import bcrypt from "bcryptjs";
import { dbconnect } from "./lib/mongodb";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        if (!credentials.email || !credentials.password) {
          return null;
        }
        try {
          await dbconnect();
          const user = await User.findOne({
            email: credentials.email,
          });
          if (!user) {
            return null;
          }
          const isMatch = await bcrypt.compare(
            credentials.password as string,
            user.password,
          );
          if(!isMatch){
            return null ;
          }
          return{
            email:user.email,
            name:user.name
          };
        } catch (err){
          console.log(err);
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
});
