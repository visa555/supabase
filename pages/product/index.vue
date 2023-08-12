<template>
  <div></div>
</template>

<script>
import supabase from '~/lib/supabaseClient'
export default {
  async mounted() {
    await this.getProduct()
  },
  methods: {
    async getProduct() {
      const { data } = await supabase
        .from('product')
        .select('title,category(title)')
      console.log(data)
    },
  },
}
</script>

<style lang="scss" scoped></style>
