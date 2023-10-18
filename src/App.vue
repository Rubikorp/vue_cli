<template>
  <div class="main">
    <header-component></header-component>
<!--    <MainPage></MainPage>-->
<!--    <BlockDetails></BlockDetails>-->
    <articles-news></articles-news>
    <footer-component></footer-component>
  </div>
</template>

<script>
import ArticlesNews from "@/components/ArticlesNews";
import MainPage from "@/components/MainPage";
import BlockDetails from "@/components/BlockDetails";
import HeaderComponent from "@/components/HeaderComponent";
import FooterComponent from "@/components/FooterComponent";

export default {
  components: {
    MainPage,
    BlockDetails,
    ArticlesNews,
    HeaderComponent,
    FooterComponent,
  }
}
</script>

<style lang="scss">

</style>
