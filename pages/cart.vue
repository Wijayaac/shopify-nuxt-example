<script>
import { mapGetters } from 'vuex'

export default {
  head: () => ({
    title: 'Shoperoni - Cart',
  }),
  computed: {
    ...mapGetters({
      cartId: 'cart/id',
      cartItems: 'cart/items',
      checkoutUrl: 'cart/checkoutUrl',
    }),
  },
  async mounted() {
    // Get local cart id
    const localCart = window.localStorage.getItem('shopifyNuxtCart')
    const cartId = window.localStorage.getItem('shopifyNuxtCartId')

    if (localCart) {
      this.$store.dispatch('cart/updateBase', JSON.parse(localCart))
    } else {
      const shopifyResponse = await this.$http.$post('/api/get-cart', {
        cartId: this.cartId,
      })

      if (shopifyResponse) {
        this.$store.dispatch('cart/updateBase', shopifyResponse.cart)
      }
    }
    if (cartId) {
      const {
        cart: { checkoutUrl },
      } = await this.$http.$post('/api/get-checkout-url', {
        cartId,
      })

      this.$store.dispatch('cart/updateCheckoutURL', checkoutUrl)
    }
  },
}
</script>

<template>
  <main class="cart-page">
    <article class="cart-page-content">
      <h1>Your Cart</h1>
      <div v-if="cartItems.length > 0">
        <cart-table />
        <cart-total />
        <a
          v-if="checkoutUrl"
          class="cart-page-button is-dark checkout-button"
          :href="checkoutUrl"
          target="_blank"
          >Checkout</a
        >
      </div>
      <section v-else>
        <p class="cart-page-message">Your cart is empty, fill it up!</p>
        <nuxt-link to="/" class="cart-page-button is-dark">
          Back to Products
        </nuxt-link>
      </section>
    </article>
  </main>
</template>

<style lang="scss" scoped>
.cart-page {
  width: 80vw;
  margin: 0 auto;
}

.cart-page-button.is-dark {
  background: #222;
  color: #f8f8f8;
  padding: 10px 14px;
  display: inline-block;
}

.cart-page-button.checkout-button {
  margin-top: 2rem;
  margin-bottom: 2rem;
  margin-left: auto;
  padding-inline: 20px;
  display: block;
  max-width: max-content;
}

.cart-page-content {
  margin: 2rem 0 3rem;
  text-align: center;
}

.cart-page-message {
  margin-bottom: 1.5rem;
}
</style>
