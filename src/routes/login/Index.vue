<template>
    <div class="login-container">
      <Form class="login-form" ref="loginForm" :rules="loginRules" :model="loginForm">
        <h3 class="title">系统登录</h3>
        <Form-item prop="user">
          <Input type="text" v-model="loginForm.account" placeholder="用户帐号">
          </Input>
        </Form-item>
        <Form-item prop="password">
            <Input type="password" v-model="loginForm.password" placeholder="用户密码">
            </Input>
        </Form-item>
        <Form-item>
            <Button type="primary" :loading="loading" @click="handleSubmit('loginForm')" long size="large">登录</Button>
        </Form-item>
      </Form>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import cookie from 'js-cookie';
    export default {
      name: 'login',
      data() {
        return {
          loginForm: {
            account: 'admin@qq.com',
            password: ''
          },
          loginRules: {
            email: [
                { required: true, trigger: 'blur', message:'请输入帐号' }
            ],
            password: [
                { required: true, trigger: 'blur', message: '请输入密码' },
                { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
            ]
          },
          loading: false,
          showDialog: false
        }
      },
      computed: {
        ...mapGetters([
          'auth_type'
        ])
      },
      methods: {
        handleSubmit(name) {
          this.$refs[name].validate((valid) => {
            if(valid) {
              this.loading = true;
              this.$store.dispatch('DoLogin', this.loginForm).then((response) => {
                if(response) {
                  const {data} = response
                  if(data && data.httpCode == 200) {
                    const o = data.data
                    //设置权限信息到本地
                    localStorage.setItem('has_permissions', o.hasPermissions);
                    //设置角色信息到本地
                    localStorage.setItem('has_roles', o.hasRoles);
                    //设置菜单信息到本地
                    localStorage.setItem('has_menus', JSON.stringify(o.hasMenus));
                    //保存token
                    cookie.set('access_token', o.token, {expires: 7});

                    this.$router.push({ path: '/' })
                  }
                }
                this.loading = false;
              })
            } else {
                this.$Message.error('表单验证失败!');
            }
          })
        }
      },
      created() {
        // window.addEventListener('hashchange', this.afterQRScan);
      },
      destroyed() {
        // window.removeEventListener('hashchange', this.afterQRScan);
      }
    }
</script>

<style>
    .tips{
      font-size: 14px;
      color: #fff;
      margin-bottom: 5px;
    }

    .login-container {
        position: relative;
        width: 100%;
        height: 100%;
        height: 100vh;
        background-color: #2d3a4b;

    }

    .login-container input {
      background: transparent;
      /*border: 0px;*/
      border-radius: 5px !important;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: #eeeeee;
      height: 47px;
    }

    .login-container input:-webkit-autofill {
      -webkit-box-shadow: 0 0 0px 1000px #293444 inset !important;
      -webkit-text-fill-color: #fff !important;
    }

    .svg-container {
        padding: 6px 5px 6px 15px;
        color: #889aa4;
    }

    .title {
        font-size: 26px;
        font-weight: 400;
        color: #eeeeee;
        margin: 0px auto 40px auto;
        text-align: center;
        font-weight: bold;
    }

    .login-form {
        position: absolute;
        left: 0;
        right: 0;
        width: 400px;
        padding: 35px 35px 15px 35px;
        margin: 120px auto;
    }

    .el-form-item {
        border: 1px solid rgba(255, 255, 255, 0.1);
        background: rgba(0, 0, 0, 0.1);
        border-radius: 5px;
        color: #454545;
    }

    .forget-pwd {
        color: #fff;
    }

</style>
