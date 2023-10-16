<template>
  <section class="heading-page">
    <div class="heading-page__block-position">
      <div class="heading-page__block-head">
        <h1 class="heading-page__head">
          Articles & News
        </h1>
        <p class="heading-page__dsc">
          Home / Blog
        </p>
      </div>
    </div>
  </section>
  <section class="latest center">
    <h2 class="latest__head">Latest Post</h2>
    <div class="post">
      <img src="@/assets/img/latest-post.png" alt="image" class="post__img">
      <div class="post__right">
        <div class="post__right-div">
          <h3 class="post__head">
            Low Cost Latest Invented Interior Designing Ideas
          </h3>
          <p class="post__dsc">
            Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere
            in.Contrary to popular belief.
            <br>
            <br>
            Lorem Ipsum is not simply random text. It has roots in a piece of classica.
          </p>
        </div>
        <div class="post__div-link-date">
          <p class="post__date">
            26 December,2022
          </p>
          <a href="#" class="post__link">
            <svg class="articles__svg" xmlns="http://www.w3.org/2000/svg" width="52" height="53"
                 viewBox="0 0 52 53" fill="none">
              <circle cx="26" cy="26.267" r="26" fill="#F4F0EC"/>
              <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
  <section class="articles center">
    <div class="articles__head-div div-head-two">
      <h2 class="articles__head head-two">
        Articles & News
      </h2>
    </div>
    <div class="articles__block" id="articlesNews">
      <article class="articles__article" v-for="item in articlesData">
        <div class="articles__div">
          <img src="@/assets/img/article_img1.png" alt="" class="articles__img">
          <button class="articles__btn-img">
            {{item.design}}
          </button>
          <div class="articles__block-dsc">
            <h3 class="articles__head-three head-three">
              {{item.name}}
            </h3>
            <div class="articles__date-block">
              <p class="articles__date">
                {{item.date}}
              </p>
              <a href="#" class="articles__btn">
                <svg class="articles__svg" xmlns="http://www.w3.org/2000/svg" width="52" height="53"
                     viewBox="0 0 52 53" fill="none">
                  <circle cx="26" cy="26.267" r="26" fill="#F4F0EC"/>
                  <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </article>
      <div class="pagination center">
        <button class="pagination__count active-page">
          <span>01</span>
        </button>
        <button class="pagination__count">
          <span>02</span>
        </button>
        <button class="pagination__count">
          <span>03</span>
        </button>
        <button class="pagination__count">
          <svg xmlns="http://www.w3.org/2000/svg" width="53" height="52" viewBox="0 0 53 52" fill="none">
            <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274"/>
            <path d="M23.5571 32L29.5 25.3143L23.5571 18.6286" stroke="#292F36" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ArticlesNews",
  data() {
    return {
      articlesData: [
        {
          name: 'Let’s Get Solution For Building Construction Work',
          design: 'Kitchan Design',
          date: '26 December,2022',
        },
        {
          name: 'Low Cost Latest Invented Interior Designing Ideas.',
          design: 'Living Design',
          date: '22 December,2022',
        },
        {
          name: 'Best For Any Office & Business Interior Solution',
          design: 'Interior Design',
          date: '25 December,2022 ',
        },
        {
          name: 'Let’s Get Solution For Building Construction Work',
          design: 'Kitchan Design',
          date: '26 December,2022',
        },
        {
          name: 'BLow Cost Latest Invented Interior Designing Ideas.',
          design: 'Living Design',
          date: '22 December,2022',
        },
        {
          name: 'Best For Any Office & Business Interior Solution',
          design: 'Interior Design',
          date: '25 December,2022',
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../assets/styles/basic";
  %fontPageCount {
    color: $colorTitle;
    font-family: 'Jost', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
  }

  //heading-page
  .heading-page {
    background: url("../assets/img/articles-news-h-bg.jpg") no-repeat;
    background-size: cover;
    height: 356px;
    position: relative;

    &__block-position {
      position: absolute;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: end;
    }

    &__block-head {
      padding: 41px 78px;
      background-color: #FFFFFF;
      border-radius: 37px 37px 0 0;
      text-align: center;
    }

    &__head {
      @include fontComponentHeader(50px);
    }

    &__dsc {
      @extend %dscFont;
    }
  }

  //latest post
  .latest {
    margin-top: 200px;

    &__head {
      @include fontComponentHeader(50px);
    }
  }

  .post {
    margin-top: 27px;
    display: flex;
    gap: 65px;
    padding: 22px;
    border-radius: 60px;
    border: 1px $colorBorder solid;

    &__img {
      flex-basis: 765px;
      flex-grow: 1;
      border-radius: 50px;
    }

    &__right-div {
      padding-right: 60px;
      padding-top: 50px;
    }

    &__head {
      @include fontComponentHeadThree(25px);
    }

    &__dsc {
      margin-top: 22px;
      @extend %dscFont;
    }

    &__div-link-date {
      padding-right: 31px;
      margin-top: 41px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__date {
      @extend %fontDate;
    }
  }

  //articles

  .articles {
    margin-top: 150px;

    &__head {
      @include fontComponentHeader(50px);
    }

    &__block {
      margin-top: 52px;
      display: flex;
      flex-wrap: wrap;
      gap: 28px;
    }

    &__article {
      position: relative;
      max-width: 381px;
      min-height: 510px;
      padding: 21px;
      border-radius: 62px;
      border: $colorBorder 1px solid;
      box-shadow: 0 10px 30px 0 rgba(255, 255, 255, 0.25);
      @include animation(background-color);
    }

    &__article:hover {
      background: $colorBgArticlesHover;
    }

    &__div {
      height: 100%;
      border-radius: 61px;
      display: flex;
      justify-content: start;
      flex-direction: column;
      gap: 21px;
    }

    &__head-three {
      max-width: 260px;
      @include fontComponentHeadThree(25px);
    }

    &__block-dsc {
      display: flex;
      flex-direction: column;
      gap: 30px;
    }

    &__img {
      height: 281px;
      max-width: 340px;
      object-fit: cover;
      border-radius: 45px 45px 0 0;
    }

    &__btn-img {
      position: absolute;
      top: 249px;
      left: 41px;
      padding: 11px;
      background-color: #fff;
      border-radius: 8px 8px 8px 0;
      @extend %fontDate;
    }

    &__svg circle {
      @include animation(fill);
    }

    &__article:hover svg circle {
      fill: #FFFFFF;
    }

    &__date-block {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  .pagination {
    width: 100%;
    margin-top: 51px;
    display: flex;
    justify-content: center;
    gap: 20px;

    &__count:not(:last-child) {
      width: 52px;
      height: 52px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px $colorCounter solid;
      border-radius: 50%;
      @extend %fontPageCount;
    }

    &__count:first-child {
      border: transparent;
      background-color: $colorSelect;
    }
  }

  .active-page {

  }
</style>