<template>
  <div class="todo-container">
    <Menu active-name="all" class="nav-bar" :open-names="['1']" @on-select="getSelect">
      <Submenu name="1">
        <template slot="title">
          <Icon type="md-checkmark" />
          完成情况
        </template>
        <MenuItem name="toFinish">待完成</MenuItem>
        <MenuItem name="finished">已完成</MenuItem>
        <MenuItem name="all">全部</MenuItem>
        <MenuItem name="marking">标记中</MenuItem>
      </Submenu>
      <Submenu name="2">
        <template slot="title">
         <Icon type="ios-analytics" />
          设置
        </template>
        <MenuItem name="tubiao">图表</MenuItem>
        <MenuItem name="other">其他设置</MenuItem>
      </Submenu>
    </Menu>
    <div class="todo-list">
      <div class="addItem">
        <input type="text" value="" placeholder="请输入要做的事情" v-model="addText">
        <Button type="default" style="display:inline-block;margin:0 0 0 20px" @click="addList">添加</Button>
      </div>
      <div class="show-area">
        <div id="toFinish" style="position: absolute;top:0;left:0" class="todo-block">
          <Card style="height: 100%;padding:10px">
            <p slot="title">待完成</p>
            <ul>
              <li v-for="(item,index) in prolist" v-bind:key="index" v-if="!item.status">
                  <span @click="item.status = !item.status" :class="item.status ? 'finished' : 'toFinish'"></span>
                  {{ item.status ? '' : item.name }}
                  <span class="closed" @click="removeList(index)">X</span>
              </li>
            </ul>
          </Card>
        </div>
        <div id="finished" style="position: absolute;top:0;right:0;text-decoration:line-through" class="todo-block">
          <Card style="height: 100%;padding:10px">
            <p slot="title">已完成</p>
            <ul>
              <li v-for="(item,index) in prolist" v-bind:key="index" v-if="item.status">
                <span @click="item.status = !item.status" :class="item.status ? 'finished' : 'toFinish'"></span>
                {{ item.status ? item.name : null }}
                <span class="closed" @click="removeList(index)">X</span>
              </li>
            </ul>
          </Card>
        </div>
        <div id="marking" style="position: absolute;bottom:0;left:0" class="todo-block">
          <Card style="height: 100%;padding:10px">
            <p slot="title">标记中</p>
            <ul>
              <li v-for="(item,index) in prolist" v-bind:key="index">{{ item.marked ? item.name : null }}</li>
            </ul>
          </Card>
        </div>
        <div id="tubiao" class="todo-block">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      addText: '', // 输入框内容
      prolist: [],
      tempEdit: undefined,
      picked: ''
    }
  },
  methods: {
    getSelect: function (name) {
      this.picked = name
    },
    addList: function () {
      if (this.addText !== '') {
        this.prolist.push({
          name: this.addText,
          status: false,
          marked: false
        })
      }
      this.addText = undefined
    },
    removeList: function (index) {
      this.prolist.splice(index, 1)
    }
  },
  mounted () {
    // localStorage取数据
    this.prolist = JSON.parse(window.localStorage.getItem('prolist') || '[]')
  },
  watch: {
    picked: function (val) {
      var todoBLocks = document.getElementsByClassName('todo-block')
      if (val === 'all') {
        for (let i = 0; i < todoBLocks.length; i++) {
          todoBLocks[i].style.height = '49%'
          todoBLocks[i].style.width = '49%'
        }
      } else {
        for (let i = 0; i < todoBLocks.length; i++) {
          todoBLocks[i].style.height = '0'
          todoBLocks[i].style.width = '0'
        }
        document.getElementById(val).style.width = '100%'
        document.getElementById(val).style.height = '100%'
      }
    },
    prolist: { //  localStroge存数据
      handler: function () {
        if (window.localStorage) {
          localStorage.setItem('prolist', JSON.stringify(this.prolist))
        } else {
          window.Cookie.write('menuTitle', this.prolist)
        }
      },
      deep: true
    }
  }
}
</script>

<style>
.todo-container {
  height: 100%;
  width: 100%;
}
.nav-bar {
  height: 100%;
}
.todo-list {
  height: 100%;
  position: absolute;
  left: 240px;
  top: 0%;
  right: 0%;
  display: flex;
  flex-direction: column;
}
.addItem {
  display: block;
  padding: 100px 0 100px 0;
  text-align: center;
  height: 250px;
}
.addItem > input{
  display: inline-block;
  width: 300px;
  border-top: none;
  border-left: none;
  border-right: none;
  outline: none;
  padding-left: 30px;
  font-size: 2em;
}
.show-area {
  flex: 1;
  overflow: hidden;
  position: relative;
  margin: 20px;
}
.todo-block {
  width: 49%;
  height: 49%;
  margin: 0;
  overflow: hidden;
  /* border: 1px solid red; */
  transition: height 1s,width 1s;
  display: inline-block;
  /* 解决div内出现文字然后下沉的情况 */
  float: left;
  padding: 1px;
}
li {
  font-size: 20px;
  list-style: none;
}
.finished,.toFinish {
  display: inline-block;
  width: 13px;
  height: 13px;
  border: 1px solid #1f1f1f;
}
.finished {
  border: none;
  background-color: aqua;
}
.closed {
  float: right;
  color: red;
}
</style>
