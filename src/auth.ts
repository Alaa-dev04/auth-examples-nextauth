
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { getuserbyemail } from "./data/user";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
    session : {strategy:"jwt"},
  providers: [
    CredentialsProvider({
        credentials:{
            email:{},
            password:{},
        },
        async authorize(credentials) {
            if (credentials === null ) return null;
            try{
                const user = await  getuserbyemail(credentials?.email as string );
                if (user){
                    const isMatch = user?.password === credentials?.password ;
                    if (isMatch) {return user ;} else{
                        return null;
                    }
                }else{
                    return null;
                }

            } catch (error){
                 return null;
            }
        }
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
