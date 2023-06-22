<template>
  <v-app-bar app>
    <v-container class="headerContainer">
      <v-text-field
        v-model="searchItem"
        label="Search for a package"
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
    ...mapMutations(['setPackageName', 'clearPackages']),
    searchData() {
        clearTimeout(this.searchTimeout);
        this.searchTimeout = setTimeout(() => {
          this.searchPackages(this.searchItem);
          this.setPackageName(this.searchItem);
        }, 1000);
    }
  },
  watch: {
    searchItem(newSearchItem) {
      if (newSearchItem) {
        this.searchData();
      } else {
        this.clearPackages();
        clearTimeout(this.searchTimeout);
        
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.headerContainer {
  margin-top: 20px;
  .search-field {
    max-width: 300px;
  }
}
</style>

