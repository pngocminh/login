
<template>
  <div id="app">
    <article>
      <div
        class="container"
        style="width: 860px;"
        :class="{ 'sign-up-active': signUp }"
      >
        <div class="overlay-container">
          <div class="overlay">
            <div
              class="overlay-left"
              style="
    width: 50%;
    height: 100%;
"
            >
              <h2>Welcome Back!</h2>
              <p>Please login with your personal info</p>
              <button class="invert" id="signIn" @click="signUp = !signUp">
                Sign In
              </button>
            </div>
            <div
              class="overlay-right"
              style="
    width: 50%;
    height: 100%;
"
            >
              <h2>Hello, Friend!</h2>
              <p>Please enter your personal details</p>
              <button class="invert" id="signUp" @click="signUp = !signUp">
                Sign Up
              </button>
            </div>
          </div>
        </div>
        <form class="sign-up" action="#">
          <h2>Create login</h2>
          <div>Use your email for registration</div>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign Up</button>
        </form>
        <form class="sign-in" action="#">
          <h2>Sign In</h2>
          <div>Use your account</div>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#">Forgot your password?</a>
          <button>Sign In</button>
              <div>
      <Google
        :params="params"
        :onSuccess="onSuccess"
        :onFailure="onFailure"
        >Google</Google
      >
    </div>
          <button class="btn btn-success" @click="logInWithFacebook">Facebook</button>
          <a
            class="btn btn-success"
            href="https://github.com/login/oauth/authorize?client_id=a55e459631bc7a1d7270"
            >Github</a
          >
        </form>
      </div>
    </article>
  </div>
</template>
<script>
import Google from "vue-google-login";
export default {
  data: () => {
    return {
      params: {
        client_id:
          "383309301336-1bhilrsn84mkbhdtrrli5g612mukmp1j.apps.googleusercontent.com"
      },
      renderParams: {
        width: 250,
        height: 50,
        longtitle: true
      },
      signUp: false
    };
  },
  component: {
Google
  },
  methods: {
     logInWithFacebook() {
       this.loadFacebookSDK(document, "script", "facebook-jssdk");
       this.initFacebook();
      window.FB.login(function(response) {
        if (response.authResponse) {
          alert("You are logged in &amp; cookie set!");
        } 
      });
      return false;
    },
     initFacebook() {
      window.fbAsyncInit = function() {
        window.FB.init({
          appId: "401898664556455",
          fields:"name,email",
          version: "v13.0",
        });
      };
    },
   loadFacebookSDK(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    },
        onSuccess(googleUser) {
      console.log(googleUser);
      console.log(googleUser.getBasicProfile());
    }
  }
};
</script>
<style lang="scss">
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

#app {
  font-family: Tahoma;
  font-size: 1rem;
  color: #222;
  background-color: #092525;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  position: relative;
  width: 768px;
  height: 480px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2), 0 10px 10px rgba(0, 0, 0, 0.2);
  background: linear-gradient(to bottom, #efefef, #ccc);

  .overlay-container {
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    overflow: hidden;
    transition: transform 0.5s ease-in-out;
    z-index: 100;
  }

  .overlay {
    position: relative;
    left: -100%;
    height: 100%;
    width: 200%;
    background: linear-gradient(to bottom right, #d69e25, #e9260c);
    color: #fff;
    transform: translateX(0);
    transition: transform 0.5s ease-in-out;
  }

  @mixin overlays($property) {
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    padding: 70px 40px;
    width: calc(50% - 80px);
    height: calc(100% - 140px);
    text-align: center;
    transform: translateX($property);
    transition: transform 0.5s ease-in-out;
  }

  .overlay-left {
    @include overlays(-20%);
  }

  .overlay-right {
    @include overlays(0);
    right: 0;
  }
}

h2 {
  margin: 0;
}

p {
  margin: 20px 0 30px;
}

a {
  color: #222;
  text-decoration: none;
  margin: 15px 0;
  font-size: 1rem;
}

button {
  border-radius: 20px;
  border: 1px solid #009345;
  background-color: #009345;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  padding: 10px 40px;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  transition: transform 0.1s ease-in;

  &:active {
    transform: scale(0.9);
  }

  &:focus {
    outline: none;
  }
}

button.invert {
  background-color: transparent;
  border-color: #fff;
}

form {
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  padding: 90px 60px;
  width: calc(50% - 120px);
  height: calc(100% - 180px);
  text-align: center;
  background: linear-gradient(to bottom, #efefef, #ccc);
  transition: all 0.5s ease-in-out;

  div {
    font-size: 1rem;
  }

  input {
    background-color: #eee;
    border: none;
    padding: 8px 15px;
    margin: 6px 0;
    width: calc(100% - 30px);
    border-radius: 15px;
    border-bottom: 1px solid #ddd;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.4), 0 -1px 1px #fff,
      0 1px 0 #fff;
    overflow: hidden;

    &:focus {
      outline: none;
      background-color: #fff;
    }
  }
}

.sign-in {
  left: 0;
  width: 50%;
  height: 100%;
  z-index: 2;
}

.sign-up {
  left: 0;
  width: 50%;
  height: 100%;
}
#signUp:hover {
  border: 2px solid #252222;
  border-radius: 10px;
}
.sign-up-active {
  .sign-in {
    transform: translateX(100%);
  }

  .sign-up {
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
    animation: show 0.5s;
  }

  .overlay-container {
    transform: translateX(-100%);
  }

  .overlay {
    transform: translateX(50%);
  }

  .overlay-left {
    transform: translateX(0);
  }
}

@keyframes show {
  0% {
    opacity: 0;
    z-index: 1;
  }
  49% {
    opacity: 0;
    z-index: 1;
  }
  50% {
    opacity: 1;
    z-index: 10;
  }
}

@keyframes showYtLink {
  0% {
    bottom: -200px;
  }
  100% {
    bottom: 20px;
  }
}
</style>