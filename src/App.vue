<template>
  <v-app>
    <AppHeader></AppHeader>
    <AppMain></AppMain>
    <AppFooter></AppFooter>
  </v-app>
</template>

<script>

import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
export default {
  components: {
    AppHeader,
    AppMain,
    AppFooter,
  }
};
</script>
