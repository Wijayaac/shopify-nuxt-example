<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      cartSize: 'cart/size',
      headerMenu: 'header-menu/items',
    }),
  },
  // add function to show header when scrolling up
  mounted() {
    let prevScrollpos = window.pageYOffset
    const header = this.$refs.header
    window.onscroll = function () {
      const currentScrollPos = window.pageYOffset
      if (prevScrollpos < currentScrollPos) {
        header.classList.add('header-hidden')
      } else {
        header.classList.remove('header-hidden')
      }
      prevScrollpos = currentScrollPos
    }
  },
}
</script>

<template>
  <header ref="header" class="app-header">
    <div class="logo">
      <div class="logo-search">
        <button aria-label="Search Items">
          <icons-search />
        </button>
      </div>
      <h1 class="logo-name">Sense</h1>
      <div class="logo-cart">
        <div v-if="cartSize > 0" class="cart-size">{{ cartSize }}</div>
        <nuxt-link to="/cart">
          <icons-shopping-bag />
        </nuxt-link>
      </div>
    </div>
    <nav class="main-nav">
      <ul>
        <li v-for="menu in headerMenu" :key="menu.id" class="main-nav-item">
          <nuxt-link exact to="/">{{ menu.title }}</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.app-header {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 40px 40px 0;
  transition: transform 0.3s ease-in-out;
  position: sticky;
  top: 0;
  z-index: 999;
  background-color: $color-grayish;
  border-bottom: $color-text;
  &.header-hidden {
    transform: translateY(-100%);
    transition: transform 0.3s ease-in-out;
  }
}
.logo {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1080px;
  &-search {
    padding: 0;

    button {
      padding: 5px 10px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    svg {
      width: 18px;
      height: 18px;
    }
  }
  &-cart {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    a {
      color: #000;
    }
    svg {
      width: 40px;
      height: 40px;
    }
    .cart-size {
      position: absolute;
      bottom: 10px;
      right: 0;
      width: 20px;
      height: 20px;
      padding: 3px 6px;
      border-radius: 1000px;
      background: $color-burgundy;
      text-align: center;
      color: white;
      font-size: 10px;
      font-weight: bold;
    }
  }
  &-name {
    text-transform: uppercase;
    font-size: 24px;
    letter-spacing: 0.2em;
    font-weight: 700;
  }
}
.main-nav {
  display: flex;
  width: 100%;
  max-width: 1080px;
  margin-top: 30px;
  justify-content: center;
  align-items: center;
  padding: 8px 0;

  ul {
    padding-left: 0;
  }
}

.main-nav-item {
  position: relative;
  display: inline;
  padding: 0 3px;
  text-transform: capitalize;

  @include breakpoint($deviceXs) {
    padding: 0 8px;
  }

  @include breakpoint($deviceSm) {
    padding: 0 10px;
  }

  a {
    font-size: 1rem;
    letter-spacing: 0.1em;
    color: $color-text;
    &:hover {
      color: #000;
    }
  }
}
</style>
