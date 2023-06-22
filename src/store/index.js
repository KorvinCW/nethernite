import Vue from 'vue'
import Vuex from 'vuex'
const vCompare = require('v-compare');

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    packages: [],
    packageName: null,
    packageInfo: {}
  },
  mutations: {
    setPackages(state, packages) {
      const getVersions = packages.versions.map(obj => obj.version);
      const sortedArray = getVersions.sort(vCompare.rCompare);
      
      state.packages = sortedArray;
    },
    clearPackages(state) {
      state.packages = [];
    },
    setPackageName(state, packageName) {
      state.packageName = packageName;
    },
    setPackageInfo(state, response) {
      state.packageInfo = { ...response };
    },
    clearPackageInfo(state) {
      state.packageInfo = null;
    },
  },
  actions: {
    async searchPackages(context, searchPackage) {
      try {
        const response = await fetch(`https://data.jsdelivr.com/v1/packages/npm/${searchPackage}`);
    
        if (!response.ok) {
          throw new Error('There is no such package');
        }
    
        const packageVersions = await response.json();
    
        context.commit('setPackages', packageVersions);
      } catch (error) {
        alert(error.message);
      }
    },
    async searchSelectedPackage(context, selectedVersion) {
      const url = new URL(`https://data.jsdelivr.com/v1/packages/npm/${context.state.packageName}/resolved`);
      url.searchParams.set('specifier', `${selectedVersion}`);

      const response = await fetch(url)
      const packageInfo = await response.json();

      context.commit('setPackageInfo', packageInfo);
    },
  }
})
