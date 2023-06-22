<template>
	<v-dialog v-model="dialogOpen" max-width="500px">
    <v-card>
      <div class="descriptionField">
				<p v-for="(p, index) in Object.entries(packageInfo)" :key="index">{{ p[0] }}: {{ p[1] }}</p>
			</div>
      <v-card-actions>
        <v-btn color="primary" text @click="closeModal">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>

export default {
	props: ['value'],
	data() {
		return {
			packageInfo: this.$store.state.packageInfo,
		}
	},
  computed: {
    dialogOpen: {
      get() {
        return this.value;
      },
      set(newValue) {
        this.$emit('input', newValue);
      }
    }
  },
  methods: {
    closeModal() {
      this.$emit('close-modal');
    },
	},
}
</script>

<style lang="scss" scoped>
	.descriptionField {
		margin: 20px;
	}
</style>