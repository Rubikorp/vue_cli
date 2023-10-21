<template>
  <div class="main">
<!--    <HeaderComponent/>-->
<!--    <MainPage/>-->
<!--    <BlockDetails/>-->
<!--    <ArticlesNews/>-->
    <ProjectPage/>
    <FooterComponent/>
  </div>
</template>

<script>
import ArticlesNews from "@/pages/ArticlesNews";
import MainPage from "@/pages/MainPage";
import BlockDetails from "@/pages/BlockDetails";
import HeaderComponent from "@/components/HeaderComponent";
import FooterComponent from "@/components/FooterComponent";
import ProjectPage from "@/pages/ProjectPage";

export default {
  components: {
    MainPage,
    BlockDetails,
    ArticlesNews,
    ProjectPage,
    HeaderComponent,
    FooterComponent,
  }
}
</script>

<style lang="scss">

</style>
