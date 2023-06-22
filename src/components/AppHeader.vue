<template>
  <v-app-bar app>
    <v-container>
      <v-text-field
        v-model="searchItem"
        label="Search for a package"
        @input="handleSearch"
        clearable
        class="search-field"
      ></v-text-field>
    </v-container>
  </v-app-bar>
</template>

<script>
import { mapActions, mapMutations } from 'vuex';

export default {
  data() {
    return {
      searchItem: '',
			searchTimeout: null
    };
  },
  methods: {
    ...mapActions(['searchPackages']),
    ...mapMutations(['setPackageName']),
    handleSearch() {
      clearTimeout(this.searchTimeout);

      this.searchTimeout = setTimeout(() => {
        this.searchPackages(this.searchItem);
        this.setPackageName(this.searchItem);
      }, 1000);
    }
  }
};
</script>

<style scoped>
.search-field {
  max-width: 300px;
}
</style>

