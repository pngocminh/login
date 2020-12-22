<template>
  <div>
    <div>
      <GoogleLogin
        :params="params"
        :onSuccess="onSuccess"
        :onFailure="onFailure"
        >Google</GoogleLogin
      >
    </div>
  </div>
</template>

<script>
import GoogleLogin from "vue-google-login";
export default {
  name: "App",
  data() {
    return {
      params: {
        client_id:
          "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
      },
      renderParams: {
        width: 250,
        height: 50,
        longtitle: true
      }
    };
  },
  components: {
    GoogleLogin
  },
  methods: {
    onSuccess(googleUser) {
      console.log(googleUser);
      console.log(googleUser.getBasicProfile());
    }
  }
};
</script>
<style>
#google-signin-btn-0{
  color:white;
  min-width: 150px;
  background-color: #000000a1;
  height: 2.5rem;
  border-radius: 2rem;
  font-weight: 400;
  font-size: 0.8rem;
}

</style>