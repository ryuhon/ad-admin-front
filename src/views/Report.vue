<template>
  <div class="container-fluid">
    <h1>광고 통계</h1>
    <table class="table table-striped">
      <thead>
      <tr>
        <th scope="col" style="width: 10%">#</th>
        <th scope="col" style="width: 30%">광고명</th>
        <th scope="col" style="width: 15%">요청</th>
        <th scope="col" style="width: 10%">노출</th>
        <th scope="col" style="width: 10%">클릭</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="ad in adList" v-bind:key="ad.aid">
        <th scope="row">{{ ad.aid }}</th>
        <td>{{ ad.title }}</td>
        <td>{{ ad.request }}</td>
        <td>{{ ad.impression }}</td>
        <td>{{ ad.click }}</td>
      </tr>
      </tbody>
    </table>
   </div>
</template>

<script>

export default {
  name: "Report",
  data: () => ({

    adList: []
  }),
  mounted() {},
  beforeMount() {
    this.list();
  },
  methods: {
    list() {
      this.$axios
          .get("report")
          .then(response => {
            if (response.data.success) {
              this.adList = response.data.data;
            }
          })
          .catch(ex => {
            console.log(ex);
            //this.$alert.show(ex.message);
          });
    }

  }
};
</script>