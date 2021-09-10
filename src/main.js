import { createApp } from "vue";
import App from "./App.vue";
import { DefaultApolloClient } from "@vue/apollo-composable";
import { apolloClient } from "./vue-apollo";
// some comment
createApp(App)
  .provide(DefaultApolloClient, apolloClient)
  .mount("#app");
