<template>
  <div>
    <ul v-for="key in Object.keys(objectData)" :key="key">
      <li>Ваш {{ key }}: {{ objectData[key] }}</li>
    </ul>
    <button @click="$store.commit('increment')">Показать данные</button>
  </div>
</template>
<script>
export default {
  computed: {
    objectData() {
      return this.$store.state.dataJson;
    },
  },
};
</script>
<style>
</style>
