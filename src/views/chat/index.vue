<template>
  <div class="chatHome">
    <el-row>
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
      <el-col :span="18"></el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import personItem from '@/components/chat/personItem.vue'
</script>

<style lang="scss" scoped>
.chatHome {
  .chatBar {
    padding: 10px;
    width: 100wh;
    height: 100vh;
    // display: flex;

    .title {
      position: relative;
      top: 50px;

      h1 {
        color: white;
        font-size: large;
      }
    }

    .chatPersion {
      height: 70%;
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
        .chatPersonListItem:hover {
          background-color: rgb(34, 102, 255);
        }
      }
    }
  }
}
</style>
