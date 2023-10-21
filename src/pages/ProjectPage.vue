<template>
  <section class="heading-page">
    <div class="heading-page__block-position">
      <div class="heading-page__block-head">
        <h1 class="heading-page__head">
          Our Project
        </h1>
        <p class="heading-page__dsc">
          Home / Blog
        </p>
      </div>
    </div>
  </section>
  <div class="tags-div center">
    <nav class="tags">
      <button
          :class="[tag.isActive ? 'btn-active' : ''] + ' ' + 'tags__btn' "
          v-for="tag in tags"
          @click="clickTag(tag.id)">
        {{tag.name}}
      </button>
    </nav>
  </div>
  <div class="project-comp center">
    <ProjectComponent
        v-for="article in currenTagArticles" :article="article"
        :clickFav="clickFav"/>
  </div>
  <PaginationComponent/>

</template>

<script>
import { v4 as uuidv4 } from 'uuid'
import PaginationComponent from "@/components/PaginationComponent";
import ProjectComponent from "@/components/ProjectComponent";

export default {
  name: "ProjectPage",
  components: {
    PaginationComponent,
    ProjectComponent
  },
  data() {
    return {
      tags: [
        {
          id: 1,
          name: "Bathroom",
          isActive: true,
        },
        {
          id: 2,
          name: "Bed Room",
          isActive: false,
        },
        {
          id: 3,
          name: "Kitchan",
          isActive: false,
        },
        {
          id: 4,
          name: "Living Area",
          isActive: false,
        },
      ],
      currenTagArticles: [],
      favoriteArticles: [],
      articles: [
        {
          id: uuidv4(),
          tag: "Bathroom",
          img: './src/assets/img/ourproject/art-1.png',
          head: "Minimal Bedroom",
          dsc: "Decor / Artchitecture",
          favorite: false,
        },
        {
          id: uuidv4(),
          tag: "Bathroom",
          img: './src/assets/img/ourproject/art-2.png',
          head: "Minimal Bedroom",
          dsc: "Decor / Artchitecture",
          favorite: true,
        },
        {
          id: uuidv4(),
          tag: "Bathroom",
          img: './src/assets/img/ourproject/art-3.png',
          head: "Classic Minimal Bedroom",
          dsc: "Decor / Artchitecture",
          favorite: false,
        },
        {
          id: uuidv4(),
          tag: "Bathroom",
          img: './src/assets/img/ourproject/art-4.png',
          head: "Minimal Bedroom",
          dsc: "Decor / Artchitecture",
          favorite: false,
        },
        {
          id: uuidv4(),
          tag: "Bathroom",
          img: './src/assets/img/ourproject/art-5.png',
          head: "Minimal Bedroom table",
          dsc: "Decor / Artchitecture",
          favorite: false,
        },
        {
          id: uuidv4(),
          tag: "Bathroom",
          img: './src/assets/img/ourproject/art-6.png',
          head: "Minimal Bedroom",
          dsc: "Decor / Artchitecture",
          favorite: false,
        },
        {
          id: uuidv4(),
          tag: "Bathroom",
          img: './src/assets/img/ourproject/art-7.png',
          head: "Minimal Bedroom",
          dsc: "Decor / Artchitecture",
          favorite: false,
        },
        {
          id: uuidv4(),
          tag: "Bathroom",
          img: './src/assets/img/ourproject/art-8.png',
          head: "Minimal Bedroom",
          dsc: "Decor / Artchitecture",
          favorite: false,
        },
      ],
    }
  },
  methods: {
    clickTag(id) {
      const tags = this.tags
      for (let i = 0; i < tags.length; i++) {
        tags[i].isActive = tags[i].id === id;
        if(tags[i].id === id) {this.filterTagArticles(tags[i].name)};
      }


    },
    clickFav(id) {
      const articles = this.articles;
      for (let i = 0; i < articles.length; i++) {
        if(articles[i].id === id) {
          articles[i].favorite = !articles[i].favorite;
        }
      }
      this.filterFavArticles()
    },
    filterFavArticles() {
      return this.favoriteArticles = this.articles.filter((art) => art.favorite === true);
    },
    filterTagArticles(tag) {
      return this.currenTagArticles = this.articles.filter((art) => art.tag === tag);
    }
  },
  created() {
    this.currenTagArticles = this.articles;
  }
}
</script>

<style scoped lang="scss">
@import "./src/assets/styles/basic";

%btnTagFont {
  color: $colorTitle;
  font-family: 'Jost', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 125%; /* 33px */
  letter-spacing: 0.36px;
}

//heading-page
.heading-page {
  background: url("../assets/img/ourproject/bg-head.jpg") no-repeat;
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

//tags div
.tags-div {
  display: flex;
  justify-content: center;
}

.tags {
  max-width: 835px;
  margin-top: 200px;
  margin-bottom: 61px;
  border: $colorMain 1px solid;
  border-radius: 18px;
  &__btn {
    padding: 22px 66px;
    @extend %btnTagFont;
    border-radius: 18px;
    @include animation(color);
    @include animation(background-color);
  }
}

.btn-active {
  color: #FFFFFF;
  background-color: $colorMain;
}

//project comp
.project-comp {
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  gap: 30px;
}
</style>