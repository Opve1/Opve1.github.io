<template>
  <div class="my-component">


    <NavBar />
    <router-view />
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import NavBar from './components/NavBar';

export default {
  name: "App",
  components: {
    NavBar,
  }
}

</script>

<style scoped>
.my-component {
  background-image: url('https://cdn.pixabay.com/photo/2016/11/09/16/24/virus-1812092_1280.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  /* 确保组件填充整个页面，如果需要 */
  height: 100vh;
  width: 100%;
}
</style>