<template>
  <div class="bg">
    <div class="cont">
      <div class="aside">
        <img src="../../assets/images/loginAside.png" alt="">
      </div>
      <div class="main">
        <div class="logo">
          <img src="../../assets/images/loginLogo.png" alt="">
        </div>
        <a-form :form="form" @submit="handleSubmit">
          <a-form-item>
            <a-input v-decorator="['userName',
          { rules: [{ required: true, message: '请输入用户名!' }] }
        ]" placeholder="用户名">
              <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)"/>
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-input v-decorator="['password', { rules: [{ required: true, message: '请输入密码' }]}]"
                     type="password" placeholder="密码">
              <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)"/>
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-button type="primary" html-type="submit" block>登录</a-button>
          </a-form-item>
        </a-form>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'Login',
    data() {
      return {}
    },
    methods: {
      handleSubmit(e) {
        e.preventDefault();
        this.form.validateFields((err, values) => {
          if (!err) {
            console.log(values);
            sessionStorage.setItem('userName', JSON.stringify(values.userName))
            this.$router.push({path: '/home'})
          }
        });
      },
    },
    beforeCreate() {
      this.form = this.$form.createForm(this);
    }
  }

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .bg {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url("../../assets/images/loginBg.png");
  }

  .cont {
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    align-items: center;
    width: 1200px;
    height: 700px;
    border-radius: 26px;
    box-shadow: 0 0 20px 20px #4057f9;
    background: #fff;
  }

  .logo {
    margin-bottom: 90px;
    width: 90%;
    height: 90%;
  }

  .logo img {
    width: 100%;
    height: 100%;
  }
</style>
