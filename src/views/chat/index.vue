<template>
  <el-row class="chatHome">
    <el-col :span="6" class="chatBar">
      <div class="title">
        <h1>聊天室</h1>
      </div>
      <div class="chatPersion">
        <span class="chatPersonTitle">聊天列表</span>
        <div class="chatPersonList">
          <personItem class="chatPersonListItem"></personItem>
          <personItem class="chatPersonListItem"></personItem>
          <personItem class="chatPersonListItem"></personItem>
          <personItem class="chatPersonListItem"></personItem>
        </div>
      </div>
    </el-col>
    <el-col :span="18" class="chatWindowContainer">
      <div class="chatHeader">
        <chatWindowHeader></chatWindowHeader>
      </div>
      <div class="chatWindow">
        <div class="chatWindowRecord">聊天记录</div>
        <div class="chatWindowSendBar">发送框</div>
      </div>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import personItem from '@/components/chat/personItem.vue'
import chatWindowHeader from '@/components/chat/chatWindow/chatWindowHeader.vue'
</script>

<style lang="scss" scoped>
.chatHome {
  width: 100wh;
  height: 100vh;
  padding: 10px;

  .chatBar {
    padding: 10px;

    // display: flex;

    .title {
      position: relative;
      top: 10px;

      h1 {
        color: white;
        font-size: large;
      }
    }

    .chatPersion {
      // height: 100%;
      // width:100%;
      position: relative;
      top: 20%;
      padding: 10px;

      .chatPersonTitle {
        color: white;
        font-size: large;
      }

      .chatPersonList {
        margin-top: 10px;

        .chatPersonListItem {
          margin-top: 10px;
        }

        .chatPersonListItem:hover {
          background-color: rgb(34, 102, 255);
        }
      }
    }
  }

  .chatWindowContainer {
    height: 80%;

    .chatWindow {
      margin-top: 20px;
      margin-left: 10px;
      margin-right: 10px;
      height: 100%;
      border-style: solid;
      border-radius: 10px;
      background-color: rgb(50, 54, 68);
    }
  }
}
</style>
