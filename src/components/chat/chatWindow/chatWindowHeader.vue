<template>
  <div class="headerContainer">
    <div class="userInfo">
      <div class="avatar">
        <img src="../../../assets/images/background.jpg" alt="" />
      </div>
      <div class="personInfo">
        <span>name</span>
        <span>title</span>
      </div>
    </div>
    <div class="chatTools">
      <el-icon color="white" size="25" class="svgItem"><VideoCamera /></el-icon>
      <el-icon color="white" size="25" class="svgItem"><Tickets /></el-icon>
      <el-icon color="white" size="25" class="svgItem"><Picture /></el-icon>
    </div>
  </div>
</template>

<script setup lang="ts">
import { VideoCamera, Tickets, Picture } from '@element-plus/icons-vue'
</script>

<style lang="scss" scoped>
.headerContainer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;

  .userInfo {
    display: flex;
    // position: relative;
    // top: 10px;
    align-items: center;
    .avatar {
      position: relative;
      width: 35px;
      height: 35px;
      display: flex;
      justify-content: center;
      /* 水平居中 */
      align-items: center;
      /* 垂直居中 */

      img {
        border-radius: 50%;
        border-style: solid;
        border-color: white;
        border-width: 2px;
        overflow: hidden;
        width: 100%;
        height: 100%;
      }
    }

    .personInfo {
      margin-left: 5px;
      gap: 5px;
      padding: 5px;
      display: flex;
      flex-direction: column;

      span {
        color: white;
        font-size: small;
      }
    }
  }

  .chatTools {
    display: flex;
    gap: 10px;
    // justify-content: center;
    align-items: center;
    .svgItem {
      width: 30px;
      height: 30px;
      :hover {
        color: aqua;
      }
    }
  }
}
</style>
