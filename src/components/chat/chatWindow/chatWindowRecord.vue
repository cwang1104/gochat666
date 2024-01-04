<template>
  <div class="messageItem">
    <div class="messageOther" v-if="msg.isOther">
      <div class="messageInfo">
        {{ msg.message }}
      </div>
      <div class="messageUser">
        <img class="avatar" :src="msg.avatar" alt="" />
        <div class="messageUserText">
          <span class="sendName">{{ msg.username }}</span>
          <span class="sendTime">{{ msg.createdTime }}</span>
        </div>
      </div>
    </div>

    <div class="messageMe" v-else>
      <div class="messageInfoMe">
        {{ msg.message }}
      </div>
      <div class="messageUser">
        <div class="messageUserText">
          <span class="sendName">{{ msg.username }}</span>
          <span class="sendTime">{{ msg.createdTime }}</span>
        </div>
        <img class="avatar" :src="msg.avatar" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import MsgInfo from '@/components/chat/chatWindow/msg.ts'

// const msg = defineProps<MessageInfo>();
defineProps({
  msg: {
    type: Object as () => MsgInfo,
    required: true,
  },
})
</script>

<style lang="scss" scoped>
.messageUser {
  display: flex;
  align-items: center;
  padding: 10px;

  .avatar {
    // object-fit: cover;
    border-radius: 50%;
    border-style: solid;
    border-color: white;
    border-width: 1px;
    overflow: hidden;
    width: 30px;
    height: 30px;
  }

  .messageUserText {
    margin-left: 5px;

    .sendName {
      font-weight: bold;
      color: rgb(176, 178, 189);
    }

    .sendTime {
      margin-left: 10px;
      font-size: small;
    }
  }
}

.messageItem {
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 5px;

  .messageOther {
    .sendName {
      margin-left: 5px;
    }
  }

  .messageMe {
    justify-content: flex-end;
    text-align: right;

    .messageUser {
      justify-content: flex-end;
      text-align: right;

      .sendTime {
        margin-right: 10px;
      }
    }
  }
}

.messageInfo,
.messageInfoMe {
  margin-top: 10px;
  // margin-left: 10px;
  // margin-right: 10px;
  padding: 10px;
  border-radius: 15px;
  max-width: 90%;
  background-color: rgb(56, 60, 75);
  word-wrap: break-word;
  padding: 10px;
  color: #fff;
  display: inline-block;
  text-align: justify;
  line-height: 1.5;
}
</style>
