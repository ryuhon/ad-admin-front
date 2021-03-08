<template>
  <div class="text-center" id="login-body">
    <form class="form-signin">
      <div style="height: 72px; width: 100%;"></div>
      <h1 class="h3 mb-3 font-weight-normal">광고 관리자</h1>
      <label for="memberID" class="sr-only">아이디</label>
      <input
        type="text"
        ref="memberID"
        id="memberID"
        class="form-control"
        placeholder="아이디"
        required
        autofocus
        v-model="memberID"
      />
      <label for="password" class="sr-only">패스워드</label>
      <input
        type="password"
        id="password"
        class="form-control"
        placeholder="패스워드"
        required
        v-model="password"
      />

      <button
        class="btn btn-lg btn-primary btn-block"
        type="button"
        @click="login()"
      >
        로그인
      </button>
    </form>
  </div>
</template>
<style>
html,
#login-body {
  height: 100%;
  width: 100%;
}

body {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}

.form-signin .form-control:focus {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
<script>
export default {
  name: "Login",
  data: () => ({
    memberID: null,
    password: null
  }),
  mounted() {
    this.$refs["memberID"].focus();
  },
  methods: {
    login() {
      console.log(this.memberID);
      console.log(this.password);

      this.$axios
        .post("login", {
          memberID: this.memberID,
          password: this.password
        })
        .then(response => {
          if (response.data.success ){

            this.storeToken(response.data.data.token);
            this.$router.push({
              name: 'Main',
            });

          }

        })
        .catch(ex => {
          console.log(ex);
          //this.$alert.show(ex.message);
        });
    },
    storeToken(token) {
      this.$session.set("token", token);
      this.$axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;

    }
  }
};
</script>
