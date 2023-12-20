<template>
  <div class="home_container">
    <el-row>
      <el-col :span="4">
        <div class="home_sidebar">
          <ul class="menu_list">
            <li v-for="(item, index) in iconList" :key="index" :class="{ activeNav: index == current }" class="iconItem"
              @click="changeMenu(index)">
              <div class="side_block"></div>
              <component :is="item" class="svgItem" />
              <span class="iconfont" :class="item"></span>
            </li>
          </ul>
          <div class="my_avatar">
            <img src="../../assets/images/background.jpg" alt="" />
            <div class="login_dot"></div>
          </div>
        </div>
      </el-col>
      <el-col :span="20">
        <div class="home_content">
          <router-view></router-view>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { ChatDotSquare, VideoCamera, Setting } from '@element-plus/icons-vue'
import { useRouter, useRoute } from 'vue-router'
import { ElMessage } from 'element-plus'
//侧边栏样式
let iconList = reactive([ChatDotSquare, VideoCamera, Setting])

let current = ref(0)
let $route = useRoute()
let redirect: any = $route.query.redirect
let $router = useRouter()

const changeMenu = (index: number) => {
  switch (index) {
    case 0:
      $router.push({ name: 'ChatHome' } || redirect)
      break
    case 1:
      ElMessage('该功能还没有开发哦，敬请期待一下吧~🥳')
      break
    case 2:
      ElMessage('该功能还没有开发哦，敬请期待一下吧~🥳')
      break
    case 3:
      ElMessage('该功能还没有开发哦，敬请期待一下吧~🥳')
      break
    case 4:
      ElMessage('该功能还没有开发哦，敬请期待一下吧~🥳')
      break
    default:
      $router.push({
        name: 'ChatHome',
      })
  }

  current.value = index
}
</script>

<style scoped lang="scss">
.home_container {
  width: 100%;
  height: 100vh;

  .home_sidebar {
    width: 100%;
    // background-color: $base-coclor;
    height: 100vh;
    border-radius: 20px 0 0 20px;

    // transform: translate(0, -50%);
    .menu_list {
      position: relative;
      top: 25%;

      // margin-left: 20px;
      li {
        margin-bottom: 15px;

        // margin: 40px 0 0 30px
        &:hover {
          span {
            color: rgb(29, 144, 245);
          }

          .svgItem {
            color: rgb(29, 144, 245);
          }

          .side_block {
            // opacity: 1;
            background-color: rgb(29, 144, 245);
          }
        }
      }
    }

    .my_avatar {
      position: relative;
      top: 60%;
      text-align: center;

      img {
        border-radius: 50%;
        border-style: solid;
        border-color: white;
        border-width: 2px;
        overflow: hidden;
        width: 50px;
        height: 50px;
      }

      .login_dot {
        position: absolute;
        top: 0;
        right: 34%;
        width: 15px;
        height: 15px;
        background-color: rgb(32, 221, 32);
        border-radius: 50%;
        // z-index: 10;
      }
    }


  }

  .home_content {
    height: 100vh;
  }

  .activeNav {
    // background-color: rgb(29, 144, 245);
    color: rgb(29, 144, 245);

    div {
      background-color: rgb(29, 144, 245);
    }
  }

  .iconItem {
    // width: 30px;
    // height: 30px;
    display: flex;

    .side_block {
      width: 8px;
      height: 30px;
      // background-color: red;
    }

    .svgItem {
      position: relative;
      left: 25%;
      width: 30px;
      height: 30px;
      margin-left: 15px;
    }
  }
}
</style>
