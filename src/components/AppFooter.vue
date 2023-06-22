<template>
    <v-footer app fixed>
      <v-row align="center" justify="center">
        <v-col class="text-center">
          <v-avatar size="64">
            <img :src="photo" alt="Photo">
          </v-avatar>
          <div>{{ name }}</div>
          <div>
            <a :href="github" target="_blank">GitHub</a>
          </div>
        </v-col>
      </v-row>
    </v-footer>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: 'Oleksandr Batychko',
        photo: 'path/to/your/photo.jpg',
        github: 'https://github.com/yourusername'
      };
    }
  };
  </script>
  
  <style>
    footer {
      background-color: #f5f5f7;
    }
  </style>