<template>
  <div class="head-img-details"></div>
  <div class="block-details center">
    <div class="details">
      <span id="target-up"></span>
      <article class="art-det" v-for="detail in currenDetails">
        <h2 class="art-det__head">{{ detail.title }}</h2>
        <img :src="detail.img1" alt="" class="art-det__img">
        <div class="art-det__date-tags">
          <p class="art-det__date">
            {{ detail.date }}
          </p>
          <p class="art-det__tags">
            Interior / Home / Decore
          </p>
        </div>
        <p class="art-det__dsc">
          {{ detail.text1 }}
        </p>
        <div class="quote">
                    <span class="quote__span">
                        “
                    </span>
          <p class="quote__dsc">
            {{ detail.quote }}
          </p>
        </div>
        <h2 class="art-det__head two-head-mb">{{ detail.title2 }}</h2>
        <p class="art-det__dsc">
          {{ detail.text2 }}
        </p>
        <ol class="art-det__list">
          <li class="art-det__item" v-for="item in detail.item">{{ item }}</li>
        </ol>
        <img :src="detail.img2" alt="" class="art-det__img img2-mb">
        <p class="art-det__dsc">
          {{ detail.text3 }}
        </p>
      </article>
    </div>
    <div class="tags-div">
      <aside class="tags">
        <h3 class="tags__head">Tags</h3>
        <ul class="tags__list">
          <li
              class="tags__item"
              v-for="(tag, index) in tags" :key="index">
            <a
                href="#target-up"
                :class="[ tag.isActive ? 'active' : '' ] + ' ' + 'tags__button'"
                :id="tag.id"
                @click="changeButton(tag.id)"
            >
              {{ tag.tag }}
            </a>
          </li>
        </ul>
      </aside>
    </div>

  </div>
</template>

<script>
export default {
  name: "BlockDetails",
  data() {
    return {
      currenDetails: [
        {
          tag: "Kitchen",
          date: "26 December,2022 ",
          title: "Let’s Get Solution for Building\n" +
              "Construction Work",
          img1: `@/assets/img/block-details/art-1.png`,
          text1: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
          quote: "The details are not the details. They make the design.",
          title2: "The details are not the details. They make the design.",
          text2: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          item: ["Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.", "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.", "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered."],
          img2: "@/assets/img/block-details/art-1-1.png",
          text3: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        },
      ],
      tags: [
        {tag: 'Kitchen', isActive: true, id: 1},
        {tag: 'Bedroom', isActive: false, id: 2},
        {tag: 'Building', isActive: false, id: 3},
        {tag: 'Architecture', isActive: false, id: 4},
        {tag: 'Kitchen Planning', isActive: false, id: 5},
        {tag: 'Bedroom', isActive: false, id: 6},
      ],
      details:
          [
            {
              tag: "Kitchen",
              date: "26 December,2022 ",
              title: "Let’s Get Solution for Building\n" +
                  "Construction Work",
              img1: `@/assets/img/block-details/art-1.png`,
              text1: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
              quote: "The details are not the details. They make the design.",
              title2: "The details are not the details. They make the design.",
              text2: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
              item: ["Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.", "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.", "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered."],
              img2: "@/assets/img/block-details/art-1-1.png",
              text3: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
            },
            {
              tag: "Bedroom",
              date: "26 December,2022 ",
              title: "Let’s Get Solution for Building\n" +
                  "Это Bedroom",
              img1: `@/assets/img/moder_kitch_img1.png`,
              text1: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
              quote: "The details are not the details. They make the design.",
              title2: "The details are not the details. They make the design.",
              text2: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
              item: ["Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.", "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.", "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered."],
              img2: "@/assets/img/moder_kitch_img1.png",
              text3: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
            },
            {
              tag: "Building",
              date: "26 December,2022 ",
              title: "Let’s Get Solution for Building\n" +
                  "Это Building",
              img1: `@/assets/img/moder_kitch_img2.png`,
              text1: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
              quote: "The details are not the details. They make the design.",
              title2: "The details are not the details. They make the design.",
              text2: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
              item: ["Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.", "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.", "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered."],
              img2: "@/assets/img/moder_kitch_img2.png",
              text3: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
            },
            {
              tag: "Architecture",
              date: "26 December,2022 ",
              title: "Let’s Get Solution for Building\n" +
                  "Это Architecture",
              img1: `@/assets/img/block-details/art-1.png`,
              text1: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
              quote: "The details are not the details. They make the design.",
              title2: "The details are not the details. They make the design.",
              text2: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
              item: ["Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.", "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.", "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered."],
              img2: "@/assets/img/block-details/art-1-1.png",
              text3: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
            },
            {
              tag: "Kitchen Planning",
              date: "26 December,2022 ",
              title: "Let’s Get Solution for Building\n" +
                  "Это Kitchen Planning",
              img1: `@/assets/img/block-details/art-1.png`,
              text1: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
              quote: "The details are not the details. They make the design.",
              title2: "The details are not the details. They make the design.",
              text2: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
              item: ["Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.", "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.", "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered."],
              img2: "@/assets/img/block-details/art-1-1.png",
              text3: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
            },
            {
              tag: "Bedroom",
              date: "26 December,2022 ",
              title: "Let’s Get Solution for Building\n" +
                  "Это Bedroom",
              img1: `@/assets/img/block-details/art-1.png`,
              text1: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
              quote: "The details are not the details. They make the design.",
              title2: "The details are not the details. They make the design.",
              text2: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
              item: ["Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.", "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.", "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered."],
              img2: "@/assets/img/block-details/art-1-1.png",
              text3: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
            },
          ]
    }
  },
  methods: {
    changeButton(id) {
      for (let i = 0; i < this.tags.length; i++) {
        if (this.tags[i].id === id) {
          this.tags[i].isActive = true
          this.currenDetails = this.details.filter((detail) => detail.tag === this.tags[i].tag)
        } else if (this.tags[i].isActive === true) {
          this.tags[i].isActive = false
        }
      }
    }
  },
}
</script>

<style scoped lang="scss">
@import "../assets/styles/basic";

.head-img-details {
  height: 351px;
  background: url("../assets/img/block-details/head-img-block-det.jpg") no-repeat;
  background-size: cover;
}

.block-details {
  margin-top: 200px;
  margin-bottom: 96px;
}

.block-details {
  display: flex;
  gap: 57px;
}

.art-det {
  max-width: 800px;

  &__head {
    @include fontComponentHeader(50px);
  }

  &__img {
    max-width: 800px;
    border-radius: 50px;
  }

  &__dsc {
    @extend %dscFont;
  }

  &__date-tags {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 46px;
    margin-bottom: 48px;
  }

  &__date, &__tags {
    @extend %fontDate
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 32px;
    counter-reset: myCounter;
    margin-top: 32px;
    margin-bottom: 44px;
  }

  &__item {
    @extend %dscFont;
    list-style: none;
    display: flex;
  }

  &__item:before {
    counter-increment: myCounter;
    content: counter(myCounter);
    padding-right: 14px;
    color: #CDA274;
    font-family: "DM Serif Display", serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 25px */
    letter-spacing: 0.4px;
  }
}

.quote {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 35px;
  margin-bottom: 27px;
  padding: 53px 217px;
  border-radius: 50px;
  background-color: #F4F0EC;

  &__span {
    height: 90px;
    color: #CDA274;
    text-align: center;
    font-family: "DM Serif Display", serif;
    font-size: 200px;
    transform: rotate(180deg);
    cursor: default;
    pointer-events: none;
  }

  &__dsc {
    text-align: center;
    color: #CDA274;
    font-family: "DM Serif Display", serif;
    font-size: 25px;
    font-style: italic;
    font-weight: 400;
    line-height: 125%; /* 31.25px */
    letter-spacing: 0.5px;
  }
}

.two-head-mb {
  margin-bottom: 20px;
}

.img2-mb {
  margin-bottom: 35px;
}
.tags-div {
  max-width: 330px;
  height: available;
  position: relative;
}

.tags {
  top:0;
  position: sticky;
    &__head {
    @include fontComponentHeader(25px);
    margin-bottom: 24px;
  }

  &__list {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  &__button {
    display: block;
    border-radius: 10px;
    padding: 9px 30px;
    background: #F4F0EC;
    color: #292F36;
    font-family: "Jost", serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
  }
}

.active {
  background: #292F36;
  color: #F4F0EC;
}
</style>