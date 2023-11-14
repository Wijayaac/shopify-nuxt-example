<template>
  <div class="hero container">
    <div class="wrapper">
      <div class="column column-overlap">
        <div class="card">
          <h1>Glowing skin, naturally</h1>
          <p>Shop our collection of natural skincare products</p>
          <nuxt-link to="/products" class="button dark">Shop now</nuxt-link>
        </div>
      </div>
      <div class="column column-bigger">
        <img src="/images/home-banner.jpg" alt="Hero image" />
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.hero {
  padding-top: 40px;
  padding-bottom: 80px;

  @include breakpoint(992px) {
    padding-top: 60px;
    padding-bottom: 120px;
  }
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;

    .column {
      position: relative;
      img {
        @include img-ratio();
      }

      &-bigger {
        padding-top: 55%;
        overflow: hidden;
        border-radius: 50px;

        @include breakpoint(992px) {
          flex: 0 0 65%;
          max-width: 65%;
        }
      }
      &-overlap {
        z-index: 2;
        @include breakpoint(992px) {
          max-width: 35%;
          flex: 0 0 35%;
          margin-right: -60px;
        }
      }
    }
  }
}
.card {
  display: flex;
  flex-direction: column;
  padding: 60px;
  background-color: $color-stabilo;
  border-radius: 32px;
  gap: 20px;
}
</style>
