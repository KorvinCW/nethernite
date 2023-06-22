<template>
  <div v-if="packages.length" class="packages-container">
    <v-container class="table-container">
      <v-data-table :items="pagedPackages" hide-default-footer>
        <template slot="header">
          <thead>
            <tr>
              <th class="text-left">Version</th>
            </tr>
          </thead>
        </template>
        <template v-slot:item="{ item }">
          <tr @click="openModal(item)">
            <td>{{ item }}</td>
          </tr>
        </template>
      </v-data-table>
      <v-pagination v-model="currentPage" :total-visible="10" :items-per-page="10" :length="pagesCount" @input="changePage" />
    </v-container>
    <AppDialog v-if="modalOpen" v-model="modalOpen" @close-modal="closeModal"></AppDialog>
  </div>
</template>
  
<script>
import { mapState, mapMutations } from 'vuex';
import AppDialog from './AppDialog.vue';
export default {
  components: {
    AppDialog
  },
  computed: {
    ...mapState(['packages']),
    ...mapMutations(['clearPackageInfo']),
    pagedPackages() {
      const start = (this.currentPage - 1) * 10;
      const end = start + 10;
      return this.packages.slice(start, end);
    },
    pagesCount() {
      return Math.ceil(this.packages.length / 10);
    },
  },
  data() {
    return {
      currentPage: 1,
      modalOpen: false
    };
  },
  methods: {
    changePage(page) {
      this.currentPage = page;
    },
    openModal(packageVersion) {
      this.$store.dispatch('searchSelectedPackage', packageVersion)
      .then(() => {
        this.modalOpen = true;
      })
    },
    closeModal() {
      this.modalOpen = false;

      this.clearPackageInfo;
    },
  },
};
</script>

<style lang="scss" scoped>
.packages-container {
  margin-top: 65px;
  .table-container {
    max-width: 450px;
    margin: 0 auto;
  }
}
</style>  