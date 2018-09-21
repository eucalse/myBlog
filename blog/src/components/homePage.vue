<template>
  <div class="container">
    <button class="login" id="login" @click="toggleLogin" v-show="!userStatus">登录</button>
    <button class="login" id="login" @click="logOut" v-show="userStatus">注销</button>
    <div class="loginPageContainer" id="loginPageContainer">
      <div class="loginPage" id="loginPage" v-if="loginPageTemp">
        <form action="" method="" style="position:relative;text-align:center">
        <a style="position:absolute;top:10px;right:20px;font-size:20px" @click="toggleLogin">x</a>
          <h1 style="position:absolute;left:0;right:0;top:40px"> {{username}} </h1>
          <div class="input-area">
            <Input placeholder="Enter name" v-model="username" style="width: auto"><Icon type="ios-contact" slot="prefix" /></Input><br/><br/>
            <Input placeholder="Enter password" v-model="password" type="password" style="width: auto"><Icon type="md-eye-off" slot="prefix" /></Input><br/><br/>
            <div style="text-align:center">
              <Button @click="login" @keyup.enter="login">登录</Button><Button @click="changeLoginTemp">去注册</Button>
            </div>
          </div>
        </form>
      </div>
      <div class="loginPage" v-if="!loginPageTemp">
        <form action="" method="" style="position:relative;text-align:center">
            <a style="position:absolute;top:10px;right:20px;font-size:20px" @click="toggleLogin">x</a>
          <h1 style="position:absolute;left:0;right:0;top:40px"> {{username}} </h1>
          <div class="input-area">
            <Input placeholder="Enter name" v-model="username" key="register-un" style="width: auto"><Icon type="ios-contact" slot="prefix" /></Input><br/><br/>
            <Input placeholder="Enter password" v-model="password" type="text" key="register-pw" style="width: auto"><Icon type="md-eye" slot="prefix"/></Input><br/><br/>
            <div style="text-align:center">
              <Button @click="register" @keyup.enter="register">注册</Button><Button @click="changeLoginTemp">去登录</Button>
            </div>
          </div>
        </form>

      </div>
    </div>
    <div class="user-nav" id="user-nav">
      <h1>welcome</h1>
    </div>
    <h1 class="pageTitle" id="pageTitle">
      {{pageTitle}}
    </h1>
    <div id="container-head">
      <div id="head-img" class='head-img'>
        <img src="../assets/head.jpg">
      </div>
    </div>
    <div id="container-body">
      <div class="page-nav-left">
        <router-link to="/homePage/js"><div @click="navToggle(0)" class="nav-item">javaScript</div></router-link>
        <router-link to="/homePage/bilibili"><div @click="navToggle(1)" class="nav-item">bilibili </div></router-link>
        <router-link to="/homePage/html"><div @click="navToggle(2)" class="nav-item">html5</div></router-link>
        <router-link to="/homePage/vue"><div @click="navToggle(3)" class="nav-item">vue</div></router-link>
        <router-link to="/homePage/nodejs"><div @click="navToggle(4)" class="nav-item">nodejs</div></router-link>
      </div>
      <div class="page-nav-right">
        <router-link to="/adminPage" :class="userStatus == 2 ? null : 'disabled'"><div @mouseover="hoverChange(0)" class="nav-item-right">管理中心</div></router-link>
        <div class="show-demo" style="height: 100px;max-height:100px">
          <h1> {{this.userStatus ? this.user : '游客模式'}} </h1>
        </div>
        <router-link to="/homePage/postbar"><div @mouseover="hoverChange(1)" class="nav-item-right">留言板</div></router-link>
        <div class="show-demo"></div>
        <router-link to="/todolist"><div @mouseover="hoverChange(2)" class="nav-item-right">todolist</div></router-link>
        <div class="show-demo"></div>
        <router-link to="/selfCon"><div @mouseover="hoverChange(3)" class="nav-item-right">个人作品</div></router-link>
        <div class="show-demo"></div>
      </div>
    </div>
    <div id="content" class="content" ref="content">
      <keep-alive>
    <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    </div>
    <Button :size="buttonSize" class="backToTop" icon="ios-arrow-dropup-circle" type="default" shape="circle" @click="toTop"></Button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      scrollTop: 0,
      scrollChange: true, // 切换是否在展开页面
      navColor: ['#dddddd', '#bbbbbb', '#999999', '#777777', '#555555'],
      navItem: ['javaScript', 'bilibili', '个人文章', 'vue', 'nodeJs'],
      navSelect: 0, // 标签选择的控制
      pageTitle: 'javaScript', // 当前页标题
      loginPageTemp: true, // 切换显示注册页
      buttonSize: 'large',
      username: '',
      password: '',
      userStatus: 0, // 0:未登录 1:已登录 2:管理员
      user: {}
    }
  },
  methods: {
    // 过渡动画
    pageScroll: function () {
      var containerHead = document.getElementById('container-head')
      var content = document.getElementById('content')
      var headImg = document.getElementById('head-img')
      var navItems = document.getElementsByClassName('nav-item')
      var showDemo = document.getElementsByClassName('show-demo')
      var pageTitle = document.getElementById('pageTitle')
      if (this.scrollTop > 0 && this.scrollChange) {
        this.scrollChange = false
        containerHead.style.height = '60px'
        content.style.top = '0'
        content.style.height = '100%'
        headImg.style.opacity = '0'
        for (let i = 0; i < navItems.length; i++) {
          navItems[i].style.transform = 'rotate(45deg)'
        }
        pageTitle.style.opacity = '1'
      } else if (this.scrollTop === 0) {
        this.scrollChange = true
        containerHead.style.height = '40%'
        content.style.top = '30%'
        content.style.height = '70%'
        headImg.style.opacity = '1'
        for (let i = 0; i < navItems.length; i++) { // 回流问题待解决
          navItems[i].style.transform = 'none'
          navItems[i].style.margin = '3px auto'
        }
        // 右侧预览窗口在scrollTop为0时不显示
        for (let i = 1; i < showDemo.length; i++) {
          showDemo[i].style.height = '0'
        }
        this.hoverChange(0) // 管理中心预览常开
        pageTitle.style.opacity = '0'
      }
      this.navToggle(this.navSelect)
    },
    handleScroll: function () { // 监听sroll改变
      let content = document.getElementById('content')
      this.scrollTop = content.scrollTop
      this.scrollBottom = content.offsetHeight - content.clientHeight
    },
    toggleLogin: function () { // 切换login显示
      let loginPageContainer = document.getElementById('loginPageContainer')
      loginPageContainer.style.display === 'block' ? loginPageContainer.style.display = 'none' : loginPageContainer.style.display = 'block'
    },
    changeLoginTemp: function () { // 切换注册与登录
      this.loginPageTemp = !this.loginPageTemp
      this.username = ''
      this.password = ''
    },
    hoverChange: function (val) { // 悬浮预览内容
      let showDemo = document.getElementsByClassName('show-demo')
      if (this.scrollTop !== 0) {
        for (let i = 0; i < showDemo.length; i++) {
          showDemo[i].style.height = '0'
        }
        showDemo[val].style.height = '300px'
      } else {
        showDemo[0].style.height = '100px'
      }
    },
    navToggle: function (val) { // 标签控制
      this.navSelect = val
      let content = document.getElementById('content')
      content.style.backgroundColor = this.navColor[val]
      if (this.scrollTop !== 0) {
        let navItems = document.getElementsByClassName('nav-item')
        for (let i = 0; i < navItems.length; i++) {
          navItems[i].style.margin = '40px auto'
        }
        if (val !== 5) navItems[val].style.margin = '0px 0px 0px 150px'
        this.pageTitle = this.navItem[val]
      }
    },
    toTop: function () { // 回到顶层
      this.$refs.content.scrollTop = 0
    },
    register: function () { // 注册
      let _this = this
      // 正则校验
      let regu = /\s/
      let reg = new RegExp(regu)
      if (reg.test(this.username) || reg.test(this.password)) {
        alert('用户名和密码中不能包含空格')
        this.username = ''
        this.password = ''
        return 0
      }
      let parm = {
        username: this.username,
        password: this.password,
        status: 1
      }
      this.$axios.post('/api/register', parm).then(res => { // 开发环境
        if (res.data.idStatus === false) {
          alert('用户名已经被注册')
        } else {
          alert('注册成功')
          // 清除表单内容
          _this.username = ''
          _this.password = ''
          _this.loginPageTemp = !_this.loginPageTemp
        }
      })
    },
    login: function () {
      let _this = this
      // 正则校验
      let regu = /\s/
      let reg = new RegExp(regu)
      if (reg.test(this.username) || reg.test(this.password)) {
        alert('用户名和密码中不能包含空格')
        this.username = ''
        this.password = ''
        return 0
      }
      let parm = {
        username: this.username,
        password: this.password
      }
      this.$axios.post('/api/login', parm).then(res => { // 开发环境
        if (res.data.status) {
          // 更新登录信息
          _this.userStatus = res.data.status.status
          _this.user = res.data.status.username
          _this.toggleLogin()
          sessionStorage.setItem('user', _this.user)
          sessionStorage.setItem('userStatus', _this.userStatus)
          this.$store.commit('user', {'user': _this.user, 'userStatus': _this.userStatus})
        } else {
          alert('用户名或密码错误')
        }
      }).then(function () {
        _this.username = ''
        _this.password = ''
      })
    },
    logOut: function () { // 登出
      this.username = ''
      this.password = ''
      this.user = ''
      this.userStatus = 0
      this.$store.commit('user', this.username)
      sessionStorage.clear()
    }
  },
  mounted () {
    document.getElementById('content').addEventListener('scroll', this.handleScroll)
    var navItems = document.getElementsByClassName('nav-item')
    for (let i = 0; i < navItems.length; i++) {
      navItems[i].style.backgroundColor = this.navColor[i]
    }
    this.navSelect = this.$store.state.navSelect
    if (sessionStorage.userStatus) {
      this.userStatus = sessionStorage.userStatus
      this.user = sessionStorage.user
    }
    this.$store.commit('user', {'user': this.user, 'userStatus': this.userStatus}) // 登录状态传递到到vuex
  },
  watch: {
    scrollTop: function () {
      this.pageScroll()
    }
  }
}
</script>

<style lang="less">
@import "../css/styles.less";
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
#container-head {
  height: 40%;
  width: 100%;
  background-color: @mainthemeColor;
  transition: height 1s;
  margin: 0;
  padding: 0;
}
#container-body {
  position: relative;
  width: 100%;
  flex: 1;
  background-color: @containerColor;
  overflow: hidden;
}
.content {
  position: absolute;
  transition: top 1s, height 1s,background-color 1s;
  top: 30%;
  left: 20%;
  width: 60%;
  height: 70%;
  background-color: white;
  overflow: auto;
}
.lists-item {
  margin: 100px;
}
.head-img {
  display: block;
  transition: opacity 1s ease-in-out;
  background-color: @mainthemeColor;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.user-nav {
  position: absolute;
  top: 25%;
  right: 25%;
  z-index: inherit;
}
.login {
  width: 60px;
  height: 40px;
  position: fixed;
  top:1%;
  right: 1%;
  background-color: white;
  border: none;
  border-radius: 5px;
  /* 重叠时置高 */
  z-index: 1;
}
.loginPage {
  position: fixed;
  width: 500px;
  height: 300px;
  margin: -150px 0 0 -250px;
  border-radius: 10px;
  top: 50%;
  left: 50%;
  background-color: @mainthemeColor;
  z-index: inherit;
}
.loginPageContainer {
  display: none;
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /*设置半透明背景 */
  z-index: 1;
}
.page-nav-right {
  position: absolute;
  top: 50px;
  right: 2%;
  width: 15%;
}
.page-nav-left {
  position: absolute;
  top: 50px;
  left: 20px;
  width: 15%;
}
.nav-item-right {
  display: block;
  width: 100%;
  height: 40px;
  background-color: @mainthemeColor;
  text-align: center;
  margin: 0 0 10px 0;
  padding: 10px 0 0 0;

}
.nav-item {
  font-size: 16px;
  line-height: 100px;
  width: 100px;
  height: 100px;
  text-align: center;
  background-color:@mainthemeColor;
  margin: 3px auto;
  /* 旋转动画 */
  transition: transform 1s,margin 1s;
  /* transform: rotate(45deg); */
}
a, a:focus, s:hover {
  text-decoration:none;
  color: black;
}
.show-demo {
  position: relative;
  display: true;
  background-color: @mainthemeColor;
  width: 100%;
  transition: height 0.5s;
  height: 0px;
  margin: 15px 0 15px 0 ;
  overflow: hidden;
  text-align: center;
}
.show-demo > h1 {
  margin: 30px auto;
}
.pageTitle {
  opacity: 0;
  position: absolute;
  top: 6px;
  left: 20px;
}
.backToTop {
  position: fixed;
  bottom: 20px;
  right: 10%;
}
// 登录页面输入框
.input-area {
  width: auto;
  height: 200px;
  position: absolute;
  margin: 0 0 0 -102px;
  top: 120px;
  left: 50%;
}
Button {
  margin: 0 20px 0 20px;
}
.disabled {
  pointer-events: none;
  cursor: default;
  opacity: 0.6;
}
</style>
