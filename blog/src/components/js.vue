<template>
  <div class="js-container">
    <div class="article-list">
      <ul>
          <li v-for="(item,index) in articleList" :key="index">
              <Card class="article-info" title="true" id="article-info">
                <p slot="title">{{item.title}}</p>
                <div style="height:210px;" @click="spread(index)">
                <p class="article-body">{{item.content}}</p>
                </div>
              </Card>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      articleList: []
    }
  },
  methods: {
    getList: function () { // 获取文章列表信息
      let _this = this
      _this.$axios.post('/api/jsPage', {page: 1}).then(res => {
        res.data.forEach(function (item) {
          _this.articleList.push({
            title: item.title,
            content: item.content,
            body: item.body
          })
        })
      })
    },
    spread: function (index) { // 点击展开卡片的动画处理
      let articleInfo = document.getElementsByClassName('article-info')
      let articleBody = document.getElementsByClassName('article-body')
      for (let i = 0; i < articleInfo.length; i++) {
        if (i !== index) {
          articleInfo[i].style.height = '300px'
          articleBody[i].innerHTML = this.articleList[i].content
        }
      }
      articleInfo[index].style.height = '500px'
      articleBody[index].innerHTML = this.articleList[index].body
    }
  },
  mounted () {
    this.getList()
  },
  activated () {
    this.$store.commit('navSelectChange', 0)
  }
}
</script>

<style>
.article-info {
  width: 600px;
  height: 300px;
  transition: height, 1s;
  margin: 30px auto;
  overflow: auto;
}
</style>
