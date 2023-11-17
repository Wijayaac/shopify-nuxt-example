<template>
  <footer class="footer">
    <div class="footer-campaign">
      <div class="container">
        <h2 class="h1">Get 20% off your first order</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
        <form>
          <div class="field" ref="email-field">
            <label for="email-subscription">Email</label>
            <input type="email" id="email-subscription" />
            <button>
              <icons-arrow class="icon" width="24" height="auto" />
            </button>
          </div>
        </form>
      </div>
    </div>
    <app-footer-links />
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  mounted() {
    // add focus/active and blur/inactive classes to email field
    this.$refs['email-field']
      .querySelector('input')
      .addEventListener('focus', () => {
        this.$refs['email-field'].classList.add('active')
      })
    this.$refs['email-field']
      .querySelector('input')
      .addEventListener('blur', () => {
        if (this.$refs['email-field'].querySelector('input').value === '') {
          this.$refs['email-field'].classList.remove('active')
        }
      })
  },
}
</script>

<style lang="scss" scoped>
.footer {
  background-color: $color-stabilo;
}
.footer-campaign {
  padding-top: 80px;
  padding-bottom: 20px;
  text-align: center;
  h2 {
    margin-bottom: 20px;
  }
  p {
    margin-bottom: 20px;
  }
  form {
    max-width: 400px;
    margin: 0 auto;
    .field {
      margin-bottom: 20px;
      position: relative;
      label {
        display: block;
        position: absolute;
        left: 20px;
        top: 50%;
        transform: translateY(-50%);
        transition: all 0.3s ease;
        font-size: 16px;
      }
      input {
        width: 100%;
        padding: 15px 20px;
        border-radius: 8px;
        border: 1px solid $color-text;
        background-color: $color-stabilo;
      }
      button {
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
      }
      &.active {
        label {
          font-size: 12px;
          transform: translateY(-120%);
        }
      }
    }
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
