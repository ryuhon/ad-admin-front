<template>
  <div style="width:100%;height:100%;top:0px;position:fixed;overflow-y: auto;" >
    <!-- 상단 네비 -->
    <nav class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
      <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">광고 관리자</a>
      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
          <a class="nav-link" @click="logout()" style="cursor:pointer">로그아웃</a>
        </li>
      </ul>
    </nav>

    <div class="container-fluid">
      <div class="row">

      <!-- 왼쪽 네비 -->

        <nav class="col-md-2 d-none d-md-block bg-light sidebar">
          <div class="sidebar-sticky">
            <ul class="nav flex-column">
              <li class="nav-item">
                <a class="nav-link active" href="#/ad">
                  <span data-feather="home"></span>
                  광고 관리 <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/report">
                  <span data-feather="file"></span>
                  레포트
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <!-- 메인 -->
        <main role="main" class="main-area container-fluid">
          <router-view ref="main-view"></router-view>
        </main>
      </div>
    </div>
  </div>
</template>
<style>
body {
  font-size: .875rem;
}

.feather {
  width: 16px;
  height: 16px;
  vertical-align: text-bottom;
}
.main-area {
  margin-left: 200px;
  padding-top: 48px;
  width: 100%;
  height: 100%;

}
/*
 * Sidebar
 */

.sidebar {
  width: 200px;
  min-width: 200px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 100; /* Behind the navbar */
  padding: 48px 0 0; /* Height of navbar */
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);
}

.sidebar-sticky {
  width: 200px;
  min-width: 200px;
  position: relative;
  top: 0;
  height: calc(100vh - 48px);
  padding-top: .5rem;
  overflow-x: hidden;
  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
}

/*@supports ((position: -webkit-sticky) or (position: sticky)) {*/
/*  .sidebar-sticky {*/
/*    position: -webkit-sticky;*/
/*    position: sticky;*/
/*  }*/
/*}*/

.sidebar .nav-link {
  font-weight: 500;
  color: #333;
}

.sidebar .nav-link .feather {
  margin-right: 4px;
  color: #999;
}

.sidebar .nav-link.active {
  color: #007bff;
}

.sidebar .nav-link:hover .feather,
.sidebar .nav-link.active .feather {
  color: inherit;
}

.sidebar-heading {
  font-size: .75rem;
  text-transform: uppercase;
}

/*
 * Content
 */



/*
 * Navbar
 */

.navbar-brand {
  width: 200px;
  min-width: 200px;
  max-width: 200px;
  padding-top: .75rem;
  padding-bottom: .75rem;
  font-size: 1rem;
  background-color: rgba(0, 0, 0, .25);
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .25);
}

.navbar .form-control {
  padding: .75rem 1rem;
  border-width: 0;
  border-radius: 0;
}

.form-control-dark {
  color: #fff;
  background-color: rgba(255, 255, 255, .1);
  border-color: rgba(255, 255, 255, .1);
}

.form-control-dark:focus {
  border-color: transparent;
  box-shadow: 0 0 0 3px rgba(255, 255, 255, .25);
}
.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}
</style>

<script>

export default {
  name: "Main",
  components: {},
  beforeMount() {
    this.$axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.$session.get("token");
  },
  methods: {
    logout() {
      this.$session.remove("token");
      this.$router.push({
        name: 'Login',
      });
    }
  }
};
</script>
