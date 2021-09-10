<template>
  <img alt="Vue logo" src="./assets/logo.png" />
</template>

<script>
import { watch } from 'vue'
import { useQuery } from "@vue/apollo-composable";
import { GetTags } from './getTags'
export default {
  name: "App",
  setup() {
    const { result } = useQuery(GetTags);
    watch(() => {
      console.log(result.value);
    });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
