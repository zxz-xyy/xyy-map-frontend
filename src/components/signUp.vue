<template>
  <div id="app" style="padding: 0;margin: 0;">
    <section class="signin signup" style="padding: 0;margin: 0;">
      <div class="container-fluid" style="padding: 0;margin: 0;">
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
                <h2>sign up</h2>

                <div class="signin-form">
                  <form action="">
                    <div class="row">
                      <div class="col-sm-6">
                        <div class="form-group">
                          <label for="username">USERNAME</label>
                          <input type="text" class="form-control" id="username" placeholder="Shane" name="username">
                        </div><!--/.form-group -->
                      </div><!--/.col -->
                      <div class="col-sm-6">
                        <div class="form-group">
                          <label for="gender">GENDER</label>
                          <input type="text" class="form-control" id="gender" placeholder="男/女" name="gender">
                        </div><!--/.form-group -->
                      </div><!--/.col -->
                    </div>
                    <div class="form-group">
                      <label for="tel">TEL</label>
                      <input type="email" class="form-control" id="tel" placeholder="178xxxxxxxx" name="tel" >
                    </div>
                    <div class="form-group">
                      <div class="input-group">
                        <label for="otpCode">OTP CODE</label>
                        <input type="text" class="form-control" placeholder="PLEASE FILL TELPHONE FIRST" id="otpCode">
                        <span class="input-group-btn">
                         <button class="btn btn-default" type="button" @click="getOtpCode" style="height: 46px;margin-top: 37px;">GET OTPCODE</button>
                        </span>
                      </div><!-- /input-group -->
                    </div><!-- /.col-lg-6 -->
                    <div class="row">
                      <div class="col-lg-6">
                        <label for="city">CITY</label>
                        <input type="text" class="form-control" id="city" placeholder="HANGZHOU">
                      </div><!-- /input-group -->
                      <div class="col-sm-6">
                        <div class="form-group xtra-margin-left">
                          <label for="age">AGE</label>
                          <input type="text" class="form-control" id="age" placeholder="18" name="age">
                        </div><!--/.form-group -->
                      </div><!--/.col -->
                    </div>
                    <div class="form-group">
                      <label for="password">password</label>
                      <input type="password" class="form-control" id="password" placeholder="Password" name="password">
                    </div><!--/.form-group -->
                  </form><!--/form -->
                </div><!--/.signin-form -->
                <div class="signin-footer">
                  <button type="button" class="btn signin_btn" @click="signUp">
                    <router-link :to="{path: '/signIn' }">
                    sign up
                    </router-link>
                  </button>
                  <p>
                    Already a Member ? <a><router-link :to="{path: '/signIn' }">signIn</router-link></a>
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
  name: 'index.vue',
  methods: {
    signUp () {
      console.log('点击事件触发')
      var tel = document.getElementById('tel').value
      var username = document.getElementById('username').value
      var otpCode = document.getElementById('otpCode').value
      var gender = document.getElementById('gender').value
      var age = document.getElementById('age').value
      var city = document.getElementById('city').value
      var password = document.getElementById('password').value
      console.log(tel)
      let param = new URLSearchParams()
      param.append('telphone', tel)
      param.append('name', username)
      param.append('otpCode', otpCode)
      param.append('gender', gender)
      param.append('age', age)
      param.append('city', city)
      param.append('password', password)
      axiosInstance({
        method: 'post',
        url: 'http://www.test.com:8080/user/register',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: param
      }).then(function (res) {
        console.log(res.data.status)
        if (res.data.status === 'success') {
          alert('注册成功')
        }
      }).catch(res => {
        alert('注册失败')
      })
    },
    getOtpCode () {
      console.log('点击事件触发')
      var tel = document.getElementById('tel').value
      console.log(tel)
      let param = new URLSearchParams()
      param.append('telphone', tel)
      axiosInstance({
        method: 'post',
        url: 'http://www.test.com:8080/user/getotp',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: param
      }).then((res) => {
        console.log(res.data.status)
        if (res.data.status === 'success') {
          alert('验证码发送成功')
        } else {
          alert('验证码发送失败')
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
