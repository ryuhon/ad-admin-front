<template>
  <div class="container-fluid">
    <h1>광고 관리</h1>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col" style="width: 10%">#</th>
          <th scope="col" style="width: 30%">광고명</th>
          <th scope="col" style="width: 15%">사이즈</th>
          <th scope="col" style="width: 10%">등록일</th>
          <th scope="col" style="width: 10%"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="ad in adList" v-bind:key="ad.aid">
          <th scope="row">{{ ad.aid }}</th>
          <td>{{ ad.title }}</td>
          <td>
            <span v-if="ad.bannerSize == 1" >320x500</span>
            <span v-if="ad.bannerSize == 2" >300x250</span>
          </td>
          <td>{{ ad.regDate.substring(0,16).replace("T"," ") }}</td>
          <td>
            <button type="button" class="btn btn-primary btn-sm" @click="edit(ad.aid)">수정</button>&nbsp;
            <button type="button" class="btn btn-danger btn-sm" @click="del(ad.aid)">삭제</button>
          </td>
        </tr>
      </tbody>
    </table>
    <button type="button" class="btn btn-success btn-sm" @click="add()">추가</button>
  </div>
</template>

<script>
export default {
  name: "Ad",
  data: () => ({
    param: {
      offset: 1,
      limit: 1000,
      sort: null,
      order: null
    },
    adList: []
  }),
  mounted() {},
  beforeMount() {
    this.list();
  },
  methods: {
    list() {
      this.$axios
        .get("ads", this.param)
        .then(response => {
          if (response.data.success) {
            this.adList = response.data.data;
          }
        })
        .catch(ex => {
          console.log(ex);
          //this.$alert.show(ex.message);
        });
    },
    edit(aid) {
      console.log("edit :" + aid);
      this.$router.push({ name: 'AdSetting', params:{aid: aid,mode:"edit"} })
    },
    add(aid) {
      console.log("add :" + aid);
      this.$router.push({ name: 'AdSetting', params:{aid: null,mode:"add"} })
    },
    del(aid) {

      this.$axios
          .delete("ads/" + aid)
          .then(response => {
            if (response.data.success) {
              this.$alert.show(response.data.message);
              this.list();
            } else {
              this.$alert.show(response.data.message);
            }
          })
          .catch(ex => {

            this.$alert.show(ex.response.data.message);
          });
    }
  }
};
</script>
