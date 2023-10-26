<template>
  <section class="page_404 center" >
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="col-sm-10 col-sm-offset-1 text-center">
            <div class="four_zero_four_bg">
              <h1 class="text-center">404</h1>
            </div>

            <div class="contant_box_404">
              <h3 class="h2">Look like you're lost</h3>
              <p>the page you are looking for not avaible!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "NotFoundPage",
};
</script>

<style scoped lang="scss">
@import '../assets/styles/basic';
.page_404 {
    margin-top: 40px;
    margin-bottom: 40px;
  background: #fff;
}

.page_404 img {
  width: 100%;
}

.four_zero_four_bg {
  background:  url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif) no-repeat;
  height: 400px;
  background-position: center;
}

.four_zero_four_bg h1 {
    text-align: center;
  font-size: 80px;
}

.four_zero_four_bg h3 {
    text-align: center;
  font-size: 80px;
}

.contant_box_404 {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
</style>
