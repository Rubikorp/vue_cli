<template>
  <header class="header center">
    <div class="logo">
      <a href="index.html" class="logo__link">
        <svg class="logo__svg" xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34"
             fill="none">
          <path d="M0 34.0003H13.4588V24.499C13.4588 22.4853 15.0898 20.8543 17.1035 20.8543C19.1172 20.8543 20.7482 22.4853 20.7482 24.499V34.0003H33.9975V0C15.2211 0 0 15.2211 0 34.0003Z"
                fill="#CDA274"/>
        </svg>
        <p class="logo__name">
          Inferno
        </p>
      </a>
    </div>
    <nav class="nav">
      <ul class="nav__list">
        <li class="nav__item"><a href="#" class="nav__link">Home</a></li>
        <li class="nav__item"><a href="#" class="nav__link">Project</a></li>
        <li class="nav__item"><a href="#" class="nav__link">Blog</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent"
}
</script>

<style scoped>

</style>