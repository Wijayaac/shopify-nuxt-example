<script>
export default {
  data() {
    return {
      showDescription: false,
    }
  },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  computed: {
    featuredImage() {
      return this.product.images.edges[0]
        ? this.product.images.edges[0].node
        : null
    },
    shortDescription() {
      return this.product.description.substring(0, 60) + '...'
    },
  },
}
</script>

<template>
  <NuxtLink :to="`/products/${product.handle}`" class="product-card">
    <div class="product-card-frame">
      <img
        v-if="featuredImage"
        class="prodimg"
        :src="featuredImage.url"
        :alt="featuredImage.altText"
      />
      <p v-else>Image not loaded</p>
    </div>
    <div class="product-card-text">
      <h3 class="product-card-title">{{ product.title }}</h3>
      <p v-if="showDescription" class="product-card-description">
        {{ shortDescription }}
      </p>
      <p class="button">View details</p>
    </div>
  </NuxtLink>
</template>

<style lang="scss" scoped>
.product-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  border-radius: 12px;
  overflow: hidden;
  background-color: $color-white;

  .button {
    width: 100%;
  }
}

.product-card-description {
  margin-top: 0;
  margin-bottom: 1rem;
  overflow: hidden;
  width: 100%;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.product-card-frame {
  position: relative;
  width: 100%;
  min-height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  text-align: center;
  background-color: $color-burgundy;
  color: $color-white;

  img {
    @include img-ratio();
  }
}

.product-card-text {
  padding: 7.5px 15px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
}

.product-card-title {
  margin: 0.5rem 0;
  color: $color-text;
  text-align: center;
  font-weight: 700;
}
</style>
