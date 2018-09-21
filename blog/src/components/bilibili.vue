<template>
  <div class="bilibili-container">
    <div class="video-list">
      <ul>
          <li v-for="(item,index) in videoList" :key="index">
              <Card class="video-info" title="true" id="video-info">
                <p slot="title">{{item.title}}</p>
                <div class="des-area" v-show="item.showDes"  @click="spread(index)">
                  <div class="img-box">
                    <img :src="item.pic">
                  </div>
                  <p class="video-body">{{item.description}}</p>
                </div>
                <div class="video-area" v-if="!item.showDes">
                  <iframe class="bilibili-player" :src="item.src" height="100px" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
                </div>
              </Card>
        </li>
      </ul>
    </div>
    <Button @click="getList" type="default">加载更多</Button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      videoList: [],
      recommendListPage: 0,
      spreaded: 0

    }
  },
  methods: {
    getList: function () {
      var _this = this
      this.recommendListPage++
      // this.$axios.get(`http://139.180.192.153:9000/api/recommend?page=${this.recommendListPage}`) // 生产环境用
      this.$axios.get(`/bapi/recommend?page=${this.recommendListPage}`) // 开发环境用
        .then(res => {
          res.data.list.forEach(function (item) {
            _this.videoList.push({
              id: item.aid,
              typename: item.typename,
              title: item.title,
              play: item.play,
              author: item.author,
              description: item.description,
              pic: item.pic,
              src: `//player.bilibili.com/player.html?aid=${item.aid}&cid=${item.cid}page=1`,
              showDes: true // 是否展示描述内容，切换视频显示
            })
          })
        })
        .catch(function (err) {
          console.log(err)
          alert('api不稳定，刷新重试')
        })
    },
    spread: function (index) {
      var videoInfo = document.getElementsByClassName('video-info')
      videoInfo[this.spreaded].style.height = '300px'
      videoInfo[this.spreaded].style.width = '600px'
      this.videoList[this.spreaded].showDes = true
      videoInfo[index].style.height = '700px'
      videoInfo[index].style.width = '100%'
      this.videoList[index].showDes = false
      this.spreaded = index
    },
    refresh: function () {
      console.log('get')
    }
  },
  mounted () {
    this.getList()
    this.$store.commit('navSelectChange', 1)
  },
  activated () {
    this.$store.commit('navSelectChange', 1)
    var videoInfo = document.getElementsByClassName('video-info')
    videoInfo[this.spreaded].style.height = '300px'
    videoInfo[this.spreaded].style.width = '600px'
    this.videoList[this.spreaded].showDes = true
  },
  deactivated () {
  }
}
</script>

<style>
.bilibili-container {
  position: relative;
}
.video-info {
  width: 600px;
  height: 300px;
  transition: height, 0.5s,width, 0.5s;
  margin: 30px auto;
  overflow: auto;
}
.img-box {
  width: 200px;
}
.img-box > img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
}
.video-area {
  height: 600px;
}
.bilibili-player {
  width: 100%;
  height: 100%;
}
</style>
