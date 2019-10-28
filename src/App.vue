<template>
  <div id="app">
    <Header/>
    <router-view/>

  </div>
</template>

<script>

  import Header from '@/components/Header.vue';
  export default {
    name: 'app',
    data(){
      return{

      }
    },
    components: {
      Header
    }
  }
</script>

<style>

  body{
    width:100%;
    background: #953036;
  }
  #app{
    width: 70%;
    text-align: center;
    margin: 0 auto;
  }
  .body-bg-no-image{
    background: #953036;
  }
  .body-bg-image{
    background:  #953036 url('./assets/logo.png') no-repeat;
    background-position: top center;
    background-size: 40%;
  }
</style>
