<template>
  <div class="container">
    <section class="footer-links">
      <div class="wrapper">
        <div class="column">
          <h3 class="h4">Menu</h3>
          <ul>
            <li>About</li>
            <li>Company</li>
            <li>Locations</li>
            <li>Contact</li>
            <li>Hours</li>
          </ul>
        </div>
        <div class="column">
          <h3 class="h4">Our Store</h3>
          <ul>
            <li>About</li>
            <li>Company</li>
            <li>Locations</li>
            <li>Contact</li>
            <li>Hours</li>
          </ul>
        </div>
        <div class="column">
          <h3 class="h4">Image</h3>
        </div>
        <div class="column">
          <h3 class="h4">Our Promise</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
            ipsam voluptas omnis iusto deleniti recusandae.
          </p>
        </div>
      </div>
    </section>
    <ul class="footer-social">
      <li><icons-twitter /></li>
      <li><icons-facebook /></li>
      <li><icons-pinterest /></li>
      <li><icons-instagram /></li>
      <li><icons-tiktok /></li>
    </ul>
    <div class="footer-copyright">
      &copy;
      <span ref="year">{{ year }}</span>
      , All rights reserved
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppFooterLinks',
  data() {
    return {
      year: new Date().getFullYear(),
    }
  },
}
</script>

<style lang="scss" scoped>
.footer-links {
  padding-top: 20px;
  padding-bottom: 30px;
  .wrapper {
    display: flex;
    flex-wrap: wrap;

    .column {
      flex: 0 0 25%;
      max-width: 25%;
    }
  }
}
.footer-social {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding-bottom: 20px;
}
.footer-copyright {
  text-align: center;
  padding: 10px 0;
}
</style>
