<template>

      <div>
    <button class="button" @click="logInWithFacebook">Facebook</button>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
     logInWithFacebook() {
       this.loadFacebookSDK(document, "script", "facebook-jssdk");
       this.initFacebook();
      window.FB.login(function() {
      });
      return false;
    },
     initFacebook() {
      window.fbAsyncInit = function() {
        window.FB.init({
          appId: "xxxxxxxxxxxxxxx",
          cookie: true,
          version: "v13.0"
        });
      };
    },
    async loadFacebookSDK(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }
  }
};
</script>
<style>
.button{
  color:white;
  min-width: 150px;
  background-color: #000000a1;
  height: 2.5rem;
  border-radius: 2rem;
  font-weight: 400;
  font-size: 0.8rem;
}
</style>