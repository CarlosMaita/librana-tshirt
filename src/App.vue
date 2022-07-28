<script setup lang="ts">

  import MenuMobile from './components/MenuMobile.vue';
  import InputSearch from './components/InputSearch.vue';
  import ProductCard from './components/ProductCard.vue';
  import ProductDetail from './components/ProductDetail.vue';
</script>

<template>
  <div class="container ">
    <menu-mobile></menu-mobile>
    
    <div class="container-inner py-1 px-3">
      <setcion class="items grid grid-cols-1 gap-5">
        <product-detail></product-detail>
      </setcion>
    </div>
</div>

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  background: #000;
}

</style>
