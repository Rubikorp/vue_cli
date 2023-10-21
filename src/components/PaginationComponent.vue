<template>
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
</template>

<script>
export default {
  name: "PaginationComponent"
}
</script>

<style scoped lang="scss">
@import "./src/assets/styles/basic";
%fontPageCount {
  color: $colorTitle;
  font-family: 'Jost', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
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
</style>