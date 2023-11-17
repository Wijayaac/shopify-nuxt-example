<script>
import HomeBanner from '~/components/HomeBanner.vue'
import HomeProductCategory from '~/components/HomeProductCategory.vue'
import HomeQuote from '~/components/HomeQuote.vue'
import HomeTextIcon from '~/components/HomeTextIcon.vue'

export default {
  async asyncData({ $http, $route }) {
    const productListResponse = await $http.$post('/api/get-product-list')
    return {
      productList: productListResponse.products.edges,
    }
  },
  head: () => ({
    title: 'Shoperoni',
  }),
  computed: {
    filteredProductList() {
      if (this.$route.query.type) {
        return this.productList.filter(
          (product) => product.node.productType === this.$route.query.type
        )
      } else {
        return this.productList
      }
    },
  },
  mounted() {
    // Get local cart
    const localCart = window.localStorage.getItem('shopifyNuxtCart')
    if (localCart) {
      this.$store.dispatch('cart/updateBase', JSON.parse(localCart))
    }
  },
  components: { HomeProductCategory, HomeTextIcon, HomeQuote, HomeBanner },
}
</script>

<template>
  <main class="home-page">
    <HomeBanner />
    <product-grid :product-list="filteredProductList" />
    <HomeQuote />
    <!-- TODO: Add product layout here -->
    <HomeTextIcon />
    <HomeProductCategory />
  </main>
</template>

<style lang="scss" scoped>
.home-page {
  margin: 30px 0 45px;
}
</style>
