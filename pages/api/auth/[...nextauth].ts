import NextAuth, { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";

/**
 * There is a need to modify the cookies
 * We need to set sameSite to none, as we make requests from a subdomain, which is not considered as same site scenario
 * We need to set domain to our API host, with a dot before it, which tells the browser that we want to use cookies on subdomains too
 * Options httpOnly and secure both need to be set to true as it's recommended and potentinally dangerous if they are set to false
 */
const useSecureCookies = true;
export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  cookies: {
    sessionToken: {
      name: `${useSecureCookies ? "__Secure-" : ""}next-auth.session-token`,
      options: {
        httpOnly: true,
        sameSite: "none",
        path: "/",
        domain: `.next-auth-capacitor.vercel.app`,
        secure: useSecureCookies,
      },
    },
  },
  theme: {
    colorScheme: "light",
  },
};

export default NextAuth(authOptions);
