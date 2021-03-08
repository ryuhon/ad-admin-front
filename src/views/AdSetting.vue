<template>
  <div class="container-fluid" style="overflow-y:auto">
    <h1>
      광고 <span v-if="$route.params.mode != 'edit'">추가</span
      ><span v-if="$route.params.mode == 'edit'">수정</span>
    </h1>
    <div>
      <form  v-bind:class="{ 'was-validated': formError}"  >
        <div class="form-group">
          <label for="inputTitle">광고명</label>
          <input
            type="text"
            id="inputTitle"
            v-model="formData.title"
            v-bind:class="{ 'form-control': true ,   'is-invalid' : errMsg.title != undefined }"
            :required="errMsg.title != undefined"
          />
          <div class="invalid-feedback" v-if="errMsg.title != undefined">
            {{ errMsg.title }}
          </div>
        </div>
        <div class="form-group">
          <label for="inputDescription">설명</label>
          <input
            type="text"
            class="form-control"
            id="inputDescription"
            v-model="formData.description"
            v-bind:class="{ 'form-control': true ,   'is-invalid' : errMsg.description != undefined }"
            :required="errMsg.description != undefined"
          />
          <div class="invalid-feedback" v-if="errMsg.description != undefined">
            {{ errMsg.description }}
          </div>
        </div>
        <div class="form-group">
          <label for="radioBannerSize">배너사이즈</label>
          <div id="radioBannerSize">
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                id="inlineRadio1"
                value="1"
                v-model="formData.bannerSize"
                v-bind:class="{ 'form-check-input': true ,   'is-invalid' : errMsg.bannerSize != undefined }"
                :required="errMsg.bannerSize != undefined"
              />
              <label class="form-check-label" for="inlineRadio1"  >320x500</label>
            </div>
            <div class="form-check form-check-inline  invalid">
              <input
                class="form-check-input"
                type="radio"
                id="inlineRadio2"
                value="2"
                v-model="formData.bannerSize"
                v-bind:class="{ 'form-check-input': true ,   'is-invalid' : errMsg.bannerSize != undefined }"
                :required="errMsg.bannerSize != undefined"
              />
              <label class="form-check-label" for="inlineRadio2"  >300x250</label>
              <div class="invalid-feedback" v-if="errMsg.bannerSize != null">
                &nbsp;&nbsp;{{ errMsg.bannerSize }}
              </div>
            </div>

          </div>
        </div>
        <div class="form-group">
          <label for="fileBanner">배너이미지</label>
          <div id="fileBanner">
            <div id="preview">
              <img v-if="formData.bannerUrl" v-bind:src="formData.bannerUrl" />
            </div>
            <input id="banner" type="file" @change="onFileChange"
                   v-bind:class="{   'is-invalid' : errMsg.bannerUrl != undefined }"
                   :required="errMsg.bannerUrl != undefined"
            />
            <div class="invalid-feedback" v-if="errMsg.bannerUrl != undefined">
              {{ errMsg.bannerUrl }}
            </div>
            <span v-if="bannerWidth != null"
              >({{ bannerWidth }}x{{ bannerHeight }})</span
            >
          </div>
        </div>
        <div class="form-group">
          <label for="radioBannerSize">플랫폼</label>
          <div id="radioPlateform">
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                id="radioPlateform1"
                value="11"
                v-model="formData.platformType"
                v-bind:class="{ 'form-check-input': true ,   'is-invalid' : errMsg.platformType != undefined }"
                :required="errMsg.platformType != undefined"
              />
              <label class="form-check-label" for="radioPlateform1"
                >안드로이드 네이티브</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                id="radioPlateform2"
                value="12"
                v-model="formData.platformType"
                v-bind:class="{ 'form-check-input': true ,   'is-invalid' : errMsg.platformType != undefined }"
                :required="errMsg.platformType != undefined"
              />
              <label class="form-check-label" for="radioPlateform2"
                >안드로이드 웹</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input

                type="radio"
                id="radioPlateform3"
                value="21"
                v-model="formData.platformType"
                v-bind:class="{ 'form-check-input': true ,   'is-invalid' : errMsg.platformType != undefined }"
                :required="errMsg.platformType != undefined"
              />
              <label class="form-check-label" for="radioPlateform3"
                >iOS 네이티브</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input

                type="radio"
                id="radioPlateform4"
                value="22"
                v-model="formData.platformType"
                v-bind:class="{ 'form-check-input': true ,   'is-invalid' : errMsg.platformType != undefined }"
                :required="errMsg.platformType != undefined"
              />
              <label class="form-check-label" for="radioPlateform4"
                >iOS 웹뷰</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                id="radioPlateform5"
                value="31"
                v-model="formData.platformType"
                v-bind:class="{ 'form-check-input': true ,   'is-invalid' : errMsg.platformType != undefined }"
                :required="errMsg.platformType != undefined"
              />
              <label class="form-check-label" for="radioPlateform5"
                >PC 웹</label
              >
              <div class="invalid-feedback" v-if="errMsg.platformType != null">
                &nbsp;&nbsp;{{ errMsg.platformType }}
              </div>
            </div>
          </div>
        </div>
        <div class="form-group">
          <label for="inputTracking">노출 추적 URL</label>
          <input
            type="text"
            class="form-control"
            id="inputTracking"
            v-model="formData.impressionTrackingUrl"
            v-bind:class="{ 'form-control': true ,   'is-invalid' : errMsg.impressionTrackingUrl != undefined }"
            :required="errMsg.impressionTrackingUrl != undefined"
          />
          <div class="invalid-feedback" v-if="errMsg.impressionTrackingUrl != undefined">
            {{ errMsg.impressionTrackingUrl }}
          </div>
        </div>
        <div class="form-group">
          <label for="inputRedirect">리다이렉션 URL</label>
          <input
            type="text"
            class="form-control"
            id="inputRedirect"
            v-model="formData.redirectUrl"
            v-bind:class="{ 'form-control': true ,   'is-invalid' : errMsg.redirectUrl != undefined }"
            :required="errMsg.redirectUrl != undefined"
          />
          <div class="invalid-feedback" v-if="errMsg.redirectUrl != undefined">
            {{ errMsg.redirectUrl }}
          </div>
        </div>
      </form>
      <button
        v-if="$route.params.mode != 'edit'"
        type="button"
        class="btn btn-success btn-sm"
        @click="add()"
      >
        광고 추가
      </button>
      <button
        v-if="$route.params.mode == 'edit'"
        type="button"
        class="btn btn-success btn-sm"
        @click="edit()"
      >
        광고 수정
      </button>
    </div>
  </div>
</template>
<style>

.form-check-input.is-invalid~.form-check-label, .was-validated .form-check-input:invalid~.form-check-label {
  color: #dc3545 !important;
}
</style>
<script>
export default {
  name: "AdSetting",
  data: () => ({
    formError: false,
    errMsg: {

    },
    formData: {
      aid: null,
      title: null,
      description: null,
      bannerSize: null,
      bannerUrl: null,
      platformType: null,
      impressionTrackingUrl: null,
      redirectUrl: null
    },
    bannerWidth: null,
    bannerHeight: null
  }),
  beforeMount() {
    this.formData.aid = this.$route.params.aid;
    if (this.$route.params.mode == "edit") {
      this.getAd();
    }
  },
  methods: {
    onFileChange(e) {
      const file = e.target.files[0];
      this.formData.bannerUrl = URL.createObjectURL(file);
      this.upload();
    },
    upload() {
      console.log("this.formData.bannerSize : " + this.formData.bannerSize);
      if (this.formData.bannerSize == "1") {
        this.bannerWidth = 320;
        this.bannerHeight = 500;
      } else if (this.formData.bannerSize == "2") {
        this.bannerWidth = 300;
        this.bannerHeight = 250;
      } else {
        this.bannerWidth = 320;
        this.bannerHeight = 500;
      }
      var frm = new FormData();
      //var fileInput = document.getElementById('fileInput');
      var fileInput = document.getElementById("banner");
      var width = this.bannerWidth;
      var height = this.bannerHeight;

      frm.append("file", fileInput.files[0]);
      frm.append("width", width);
      frm.append("height", height);

      this.$axios
        .post("upload", frm)
        .then(response => {
          if (response.data.success) {
            this.formData.bannerUrl = response.data.data;
          } else {
            this.$alert.show(response.data.message);
          }
        })
        .catch(ex => {
          this.$alert.show("에러 : " + ex);
        });
    },
    add() {
      this.$axios
        .post("ads", this.formData)
        .then(response => {
          if (response.data.success) {
            this.$alert.show(response.data.message);
            this.$router.push({
              name: "Ad"
            });
          } else {
            this.$alert.show(response.data.message);
          }
        })
        .catch(ex => {
          if ( ex.response.data.message.constructor == Object ){
            this.errMsg = ex.response.data.message;
            this.formError = true;

          }
        });
    },
    edit() {
      this.$axios
        .put("ads/" + this.formData.aid, this.formData)
        .then(response => {
          if (response.data.success) {
            this.$alert.show(response.data.message);
            this.$router.push({
              name: "Ad"
            });
          } else {
            this.$alert.show(response.data.message);
          }
        })
        .catch(ex => {

          if ( ex.response.data.message.constructor == Object ){
            this.errMsg = ex.response.data.message;
            this.formError = true;

          }
        });
    },
    getAd() {
      this.$axios
        .get("ads/" + this.formData.aid)
        .then(response => {
          if (response.data.success) {
            this.formData = response.data.data;
          } else {
            this.$alert.show(response.data.message);
          }
        })
        .catch(ex => {
          // console.log(ex.response.data.message );
          this.$alert.show(ex.response.data.message);
        });
    }
  }
};
</script>
