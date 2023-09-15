<template>
  <nav class="navbar navbar-expand-lg navbar-light ">
    <div class="container">
      <router-link class="navbar-brand" :to="{ name: 'home' }">ATDbase</router-link>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'home' }"></router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'home' }"></router-link>
          </li>
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'search' }">搜索</router-link>
          </li>



          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              支持
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="https://www.kegg.jp/">KEGG</a></li>
              <li><a class="dropdown-item" href="https://ctdbase.org/">CTD</a></li>
              <li><a class="dropdown-item" href="https://hmdb.ca/">HMDB</a></li>

            </ul>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'service' }">科研服务</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'analyze' }">分析</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'about' }">关于</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'login' }">登录</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'register' }">注册</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>


<script>


export default {
  name: "NavBar",
}
</script>

<style scoped>
.navbar {
  background-color: rgb(34, 34, 34);
}

.navbar-brand {
  color: rgb(157, 157, 157);
}

.nav-link {
  color: rgb(157, 157, 157);
}
</style>