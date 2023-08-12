<template>
  <div>
    <h1>{{ id }}</h1>
  </div>
</template>

<script>
export default {
  created() {
    this.id = this.$route.params.id
  },
  mounted() {
    console.log(this.id)
  },
}
</script>

<style lang="scss" scoped></style>
