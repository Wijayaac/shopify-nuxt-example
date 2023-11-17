<template>
  <div class="product-category">
    <div class="container">
      <div class="wrapper">
        <div class="column">
          <div class="card">
            <div class="image">
              <img src="/images/skin-care.jpg" alt="" />
            </div>
            <div class="text">
              <nuxt-link class="h3" to="/products?category=skincare">
                Skin care
                <icons-arrow width="32" height="18" />
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="image">
              <img src="/images/body-care.jpg" alt="" />
            </div>
            <div class="text">
              <nuxt-link class="h3" to="/products?category=skincare">
                body care
                <icons-arrow width="32" height="18" />
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="image">
              <img src="/images/nail-polish.jpg" alt="" />
            </div>
            <div class="text">
              <nuxt-link class="h3" to="/products?category=skincare">
                Skin care
                <icons-arrow width="32" height="18" />
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.product-category {
  position: relative;
  padding: 60px 0;
  .wrapper {
    display: flex;
    flex-wrap: wrap;
    @include breakpoint(992px) {
      justify-content: space-between;
    }

    .column {
      max-width: 31%;
      flex: 0 0 31%;

      .card {
        border-radius: 24px;
        overflow: hidden;
        box-shadow: 10px 20px 20px rgba(0, 0, 0, 0.1);

        .image {
          position: relative;
          width: 100%;
          padding-top: 85%;

          img {
            @include img-ratio();
          }
        }
        .text {
          padding: 20px 0;
          text-align: center;
          background-color: $color-white;

          a {
            color: $color-text;
          }
        }
      }
    }
  }
}
</style>
