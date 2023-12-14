<template>
  <div class="home_container">
    <el-row>
      <el-col :span="4">
        <div class="home_sidebar">
          <ul class="menu-list">
            <li
              v-for="(item, index) in iconList"
              :key="index"
              :class="nav"
              @click="changeMenu(index)"
            >
              <el-icon :size="iconSize" :color="iconColor">
                <component :is="item" />
              </el-icon>
              <div class="side-block"></div>
            </li>
          </ul>
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
//侧边栏样式
let iconSize = ref(30)
let iconColor = ref('white')
let iconList = reactive([ChatDotSquare, VideoCamera, Setting])
</script>

<style scoped lang="scss">
.home_container {
  width: 100%;
  height: 100vh;

  .home_sidebar {
    width: 100%;
    background-color: $base-coclor;
    height: 100vh;
    border-radius: 20px 0 0 20px;

    .menu-list {
      margin-left: 20px;

      li {
        margin: 40px 0 0 30px;
      }
    }
  }

  .home_content {
    height: 100vh;
  }
}
</style>
