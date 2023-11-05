<template>
  <footer>
    <section class="testimonial">
      <h2>
        "The interplay of flavors between the cheese, meats and fruits is an
        absolute delight."
      </h2>
      <p>Paul Hotcakes</p>
    </section>
    <app-footer-links />
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.testimonial {
  width: 100%;
  height: 280px;
  background: url('/images/testimonial-bg.jpg') center center no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  h2 {
    padding: 0 30px;
    text-align: center;
  }
}
.project-credit {
  width: 100%;
  padding: 10px 30px;
  background: black;
  color: white;
  text-align: center;

  a,
  a:visited,
  a:active {
    color: #22aaff;
    font-weight: bold;
  }
}
</style>
