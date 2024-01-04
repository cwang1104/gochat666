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
        <div class="chatWindowRecord">
          <chatWindowRecord :msg="msg1"></chatWindowRecord>
          <chatWindowRecord :msg="msg2"></chatWindowRecord>
          <chatWindowRecord :msg="msg1"></chatWindowRecord>
          <chatWindowRecord :msg="msg2"></chatWindowRecord>
          <chatWindowRecord :msg="msg1"></chatWindowRecord>
          <chatWindowRecord :msg="msg2"></chatWindowRecord>
          <chatWindowRecord :msg="msg1"></chatWindowRecord>
          <chatWindowRecord :msg="msg2"></chatWindowRecord>
        </div>
        <div class="chatWindowSendBar">
          <sendBar class="sendBar" />
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import personItem from '@/components/chat/personItem.vue'
import chatWindowHeader from '@/components/chat/chatWindow/chatWindowHeader.vue'
import chatWindowRecord from '@/components/chat/chatWindow/chatWindowRecord.vue'
import sendBar from '@/components/chat/chatWindow/sendBar.vue'
import MsgInfo from '@/components/chat/chatWindow/msg.ts'

let msg1 = <MsgInfo>{
  message:
    'jackjackjackjackjackjackjackjackjackjackjackjackjackjackjackjackjackjackjackjackjackjackjackjackjackjackjackjackjackjackjackjackjackjackjackjackjackjackjackjackjackjackjackjackjackjackjackjackjackjackjackjack',
  createdTime: '10 pm',
  avatar: '../../../images/background.png',
  username: 'jack',
  isOther: true,
}

let msg2 = <MsgInfo>{
  message:
    'tomtomtomtomtomtomtomtomtomtomtomtomtomtomtomtomtomtomtomtomtomtomtomtomtomtomtomtomtomtomtom',
  createdTime: '10 pm',
  avatar: '../../../images/background.png',
  username: 'tom',
  isOther: false,
}
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

      .chatWindowRecord {
        // margin-top: 20px;
        width: 100%;
        height: 85%;
        overflow-y: auto;
      }

      .chatWindowSendBar {
        width: 100%;
        // height: 15%;
        display: flex;
        align-items: center;
        margin-top: px;

        .sendBar {
          padding: 10px;
          border-style: solid;
          border-radius: 10px;
          background-color: rgb(54, 65, 73);
          margin-left: auto;
          margin-right: auto;
        }
      }
    }
  }
}

/* 适用于基于 WebKit 的浏览器 */
.chatWindowRecord::-webkit-scrollbar,
.chatWindowRecord::-webkit-scrollbar {
  width: 0;
  /* 移除滚动条空间 */
}

/* 可选：适用于基于 WebKit 的浏览器 */
.chatWindowRecord::-webkit-scrollbar-thumb,
.chatWindowRecord::-webkit-scrollbar-thumb {
  background-color: transparent;
  /* 使滚动条拇指不可见 */
}
</style>
