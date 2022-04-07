import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import RedisAdapter from '../../../lib/RedisAdapter';
import RedisClient from '../../../lib/RedisClient';

export default NextAuth({
  // Configure one or more authentication providers
  adapter: RedisAdapter(RedisClient),
  providers: [
    GithubProvider({
      clientId: '401fe81f9553e9c267b9',
      clientSecret: '5b9a55c51f15f70ea5f093a314146ede48ce6707',
    }),
    // ...add more providers here
  ],
  secret: 'secretsecretsecret'
})
