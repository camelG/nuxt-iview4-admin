<template>
  <div id="bg-image">
    <!-- <img src="/dahlia-4351122_1920.jpg" class="overflow-hidden" /> -->
    <Card class="my-login pt-3">
      <Input
        id="loginID"
        prefix="ios-contact"
        v-model="payload.id"
        :style="{margin: '10px auto'}"
        required
      />
      <Input
        id="loginPW"
        prefix="md-key"
        v-model="payload.pw"
        type="password"
        :style="{marginBottom: '20px'}"
        password
      />
      <Button :disabled="processing" type="primary" @click.prevent="submitForm" long>ログイン</Button>
    </Card>
  </div>
</template>

<script>
import { loginAuth } from "@/api";

export default {
  layout: "login",
  data() {
    return {
      payload: { id: "", pw: "" },
      error: false,
      processing: false
    };
  },
  computed: {
    loginID() {
      return this.payload.id;
    },
    password() {
      return this.payload.pw;
    }
  },
  methods: {
    submitForm() {
      if (!this.loginID || !this.password) {
        this.error = true;
        setTimeout(() => {
          this.error = false;
        }, 1000);
        return;
      }
      this.processing = true;
      return this.$auth.loginWith("google");

      return this.$auth
        .loginWith("local", {
          data: {
            username: this.username,
            password: this.password
          }
        })
        .then(data => {
          console.log(data);
        });

      // loginAuth(this.payload)
      //   .then(data => {
      //     if (data.result === true) {
      //       // data
      //       console.log(data)
      //     } else {
      //       return this.$Notice.error({
      //         title: "ログインIDまたはパスワードが一致しません"
      //       });
      //     }

      //     this.$router.push("/dashboard");
      //   })
      //   .catch(error => {
      //     console.log(error);
      //     return this.$Notice.error({
      //       title: "システムエラー"
      //     });
      //   });

      this.$router.push("/dashboard");

      setTimeout(() => {
        this.$set(this, "processing", false);
      }, 500);
    }
  }
};
</script>

<style scoped>
#bg-image {
  background-image: url("/img/bg.jpg");
  position: fixed;
  min-width: 100%;
  min-height: 100%;
}
.my-login,
.my-login input {
  background-color: rgba(255, 255, 255, 0.5) !important;
}
.my-login {
  max-width: 280px;
  width: 100%;
  position: fixed;
  left: 50%;
  transform: translate(-50%, -50%);
  bottom: 40%;
}
.content {
  position: fixed;
  bottom: 0;
  max-width: 258px;
}
</style>
