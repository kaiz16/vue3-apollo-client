import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client/core";
import { setContext } from "apollo-link-context";

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: "http://pathforge-genesis-dev.herokuapp.com/v1/graphql",
});

const headers = async () => {
  return {
    Authorization:
      "Bearer " +
      "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjRnQXQteGhYc3BhN3AtV2UwQmktVSJ9.eyJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWRlZmF1bHQtcm9sZSI6InVzZXIiLCJ4LWhhc3VyYS1hbGxvd2VkLXJvbGVzIjpbInVzZXIiXSwieC1oYXN1cmEtdXNlci1pZCI6ImF1dGgwfDYwOTk1OTU3NTdhZjIxMDA2OWE3MzA0YyIsIngtaGFzdXJhLXVzZXItZW1haWwiOiJyZWFsa2FpejdAZ21haWwuY29tIn0sIm5pY2tuYW1lIjoicmVhbGthaXo3IiwibmFtZSI6InJlYWxrYWl6N0BnbWFpbC5jb20iLCJwaWN0dXJlIjoiaHR0cHM6Ly9zLmdyYXZhdGFyLmNvbS9hdmF0YXIvNTUxZmMwMjAxMjY0MmVlYTA2NzRkOTlmOWU4YTkzZDU_cz00ODAmcj1wZyZkPWh0dHBzJTNBJTJGJTJGY2RuLmF1dGgwLmNvbSUyRmF2YXRhcnMlMkZyZS5wbmciLCJ1cGRhdGVkX2F0IjoiMjAyMS0wOS0wOVQyMTo0Mjo0Ny4zMTVaIiwiZW1haWwiOiJyZWFsa2FpejdAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJpc3MiOiJodHRwczovL3BhdGhmb3JnZS1kZXYudXMuYXV0aDAuY29tLyIsInN1YiI6ImF1dGgwfDYwOTk1OTU3NTdhZjIxMDA2OWE3MzA0YyIsImF1ZCI6IjBZVXJHSEJ3WHdvSmI2em1jUm1aaUhpTjdzakVUWDA2IiwiaWF0IjoxNjMxMjg0NzM5LCJleHAiOjE2MzEzMjA3MzksIm5vbmNlIjoiZWt4T2VXcG1hVGRwVTJJMWVsUjZSMnArTURsSU5sVXpNVUpsV0dSVFNFMDVjSEpuVlVsbVpEWklZUT09In0.qrXIm9EPYIJiivu4YPUc19kYO7vc1s0z8hDJ568pN5GXvde_LrgiRFLIXplAYvsPXANaIYw4tdyn5QIDNhcpAfF6UvzU8ugI-YBDJJgwRe121JDBVehbaZYOe6xC8rigXilPFou6UBpI1xB94yCkdQv3_pFGs9jn6-G29shtOPkFCIrtJadJjNjcbT-_Zaw3JYSHZC_FC1oy9daeUgwSl1mdDwnZSdskKPEMDUwi6G7KALIu5tnXgi2kVGSyVbE6jSPzYkyZM7HHh9c3TQA2C2gc8NF_RcVg-JWMRxLCly1vu5-udRyJHnPOR2up2dco6F92aAqSQ26mVHKuTGOFCw",
  };
};

/*eslint-disable*/
// getting headers for http
const authLink = setContext(async (_) => {
  return {
    headers: await headers(),
  };
});
/*eslint-enable*/
// Cache implementation
const cache = new InMemoryCache();

// Create the apollo client
export const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
});
