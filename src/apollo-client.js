import ApolloClient from 'apollo-boost'

export const apolloClient = new ApolloClient({
  uri: 'https://sls-sandbox.zizoo.com/graphql'
})
