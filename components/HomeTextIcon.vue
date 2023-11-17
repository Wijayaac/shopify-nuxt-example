<template>
  <div class="text-icon">
    <div class="container">
      <div class="wrapper">
        <div class="column">
          <div class="icon">
            <img src="/images/vegan.png" alt="icon" />
          </div>
          <div class="text">
            <h3>Vegan</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
              libero facere obcaecati
            </p>
          </div>
        </div>
        <div class="column">
          <div class="icon">
            <img src="/images/natural.png" alt="icon" />
          </div>
          <div class="text">
            <h3>natural</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
              libero facere obcaecati
            </p>
          </div>
        </div>
        <div class="column">
          <div class="icon">
            <img src="/images/recyclable.png" alt="icon" />
          </div>
          <div class="text">
            <h3>Recyclable</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
              libero facere obcaecati
            </p>
          </div>
        </div>
        <div class="column">
          <div class="icon">
            <img src="/images/compostable.png" alt="icon" />
          </div>
          <div class="text">
            <h3>compostable</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
              libero facere obcaecati
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.text-icon {
  background-color: $color-grayish;
  padding: 60px 0;

  .wrapper {
    display: flex;
    flex-wrap: wrap;
    @include breakpoint(992px) {
      justify-content: space-between;
    }

    .column {
      text-align: center;
      padding: 10px 20px;
      @include breakpoint(992px) {
        max-width: 24%;
        flex: 0 0 24%;
      }

      .icon {
        position: relative;
        width: 100%;
        padding-top: 60%;
        img {
          @include img-ratio();
          object-fit: contain;
        }
      }

      h3 {
        margin-bottom: 12px;
        text-transform: capitalize;
      }
    }
  }
}
</style>
