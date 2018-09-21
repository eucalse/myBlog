<template>
  <div class="post-container">
    <div class="post-list">
      <ul>
          <li v-for="(item,index) in postList" :key="index">
              <Card class="post-info" title="true" id="post-info">
                <p slot="title">{{item.title}}</p>
                <div style="height:210px;" @click="spread(index)">
                <p class="post-body">{{item.content}}</p>
                </div>
              </Card>
        </li>
      </ul>
    </div>
    <Row class="post-area">
      <Col span="22"><Input v-model="postText" type="textarea" placeholder="Enter something..." /></Col>
      <Col span="2"><Button type="primary" @click="postMessage()">提交</Button></Col>
    </Row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      userStatus: 0,
      postList: [],
      postText: ''
    }
  },
  methods: {
    postMessage: function () {
      let _this = this
      let parm = {
        username: _this.username,
        message: _this.postText
      }
      this.$axios.post('/api/postMessage', parm).then(res => {
        console.log('success')
      })
    }
  },
  mounted () {
    // 获取登录状态
    this.$nextTick(function () {
      this.username = this.$store.state.username
      this.userStatus = this.$store.state.userStatus
    })

    this.$store.commit('navSelectChange', 5) // 标签控制
  }
}
</script>

<style>
.post-area {
  width: 600px;
  position: absolute;
  margin: 0 0 0 -300px;
  bottom: 0;
  left: 50%;
}
</style>
