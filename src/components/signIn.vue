<template>
  <div>
    <section class="signin">
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-4">
            <div class="single-sign">
              <div class="sign-bg">
              </div><!--/.sign-bg -->
            </div><!--/.single-sign -->
          </div><!--/.col -->
          <div class="col-sm-8">
            <div class="single-sign">
              <div class="sign-content">
                <h2>sign in</h2>
                <div class="signin-form">
                  <div class=" ">
                    <div class=" ">
                      <form action="">
                        <div class="form-group">
                          <label for="tel">TEL</label>
                          <input type="email" class="form-control" id="tel" placeholder="178xxxxxxxx">
                        </div><!--/.form-group -->
                        <div class="form-group">
                          <label for="password">PASSWORD</label>
                          <input type="password" class="form-control" id="password" placeholder="Password">
                        </div><!--/.form-group -->
                      </form><!--/form -->
                    </div><!--/.col -->
                  </div><!--/.row -->
                </div><!--/.signin-form -->
                <div class="signin-footer">
                  <button type="button" class="btn signin_btn" data-toggle="modal" data-target=".signin_modal" @click="signIn">
                    sign in
                  </button>
                  <p>
                    Don’t have an Account ?
                    <a href=""><router-link :to="{path: '/signUp' }">register</router-link></a>
                  </p>
                </div><!--/.signin-footer -->
              </div><!--/.sign-content -->
            </div><!--/.single-sign -->
          </div><!--/.col -->
        </div><!--/.row-->
      </div><!--/.container -->
    </section><!--/.signin -->
    <!-- signin end -->
    <!--footer copyright start -->
    <footer class="footer-copyright">
      <div id="scroll-Top">
        <i class="fa fa-angle-double-up return-to-top" id="scroll-top1" data-toggle="tooltip" data-placement="top" title="" data-original-title="Back to Top" aria-hidden="true"></i>
      </div><!--/.scroll-Top-->
    </footer><!--/.hm-footer-copyright-->
    <!--footer copyright  end -->
  </div>
</template>
<script>import axios from 'axios'
// 如果要跨域的话, 对axios进行一些设置,当前使用的是跨域的
const axiosInstance = axios.create({
  headers: {'Content-Type': 'application/json;charset=utf-8'}, // 设置传输内容的类型和编码
  withCredentials: true// 指定某个请求应该发送凭据。允许客户端携带跨域cookie，也需要此配置
})
export default {
  name: 'signIn.vue',
  methods: {
    signIn () {
      var that = this
      var tel = document.getElementById('tel').value
      var password = document.getElementById('password').value
      let param = new URLSearchParams()
      param.append('username', tel)
      param.append('password', password)
      axiosInstance({
        method: 'post',
        url: 'http://www.test.com:8080/user/login',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: param
      }).then(function (res) {
        console.log(res.data.status)
        if (res.data.status === 'success') {
          alert('登录成功')
          that.$router.replace({ path: '/map' })
        }
      }).catch(res => {
        alert('登录失败')
      })
    }
  }
}
</script>

<style scoped>

</style>
