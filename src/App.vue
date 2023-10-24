<template>
  <div class="main">
<!--    <HeaderComponent/>-->
<!--    <MainPage/>-->
<!--    <BlockDetails/>-->
<!--    <ArticlesNews/>-->
    <!-- <ProjectPage/> -->
    <ProjectDetail />
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
import ProjectDetail from "./pages/ProjectDetail.vue";

export default {
  components: {
    MainPage,
    BlockDetails,
    ArticlesNews,
    ProjectPage,
    ProjectDetail,
    HeaderComponent,
    FooterComponent,
  }
}
</script>

<style lang="scss">

</style>
