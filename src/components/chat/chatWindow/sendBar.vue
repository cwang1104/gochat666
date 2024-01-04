<template>
  <div class="sendBar">
    <el-input
      v-model="sendInfo"
      placeholder="please input"
      :autosize="{ minRows: 1, maxRows: 2 }"
      type="textarea"
      resize="none"
      input-style="color: rgb(66, 70, 86);"
    ></el-input>

    <!-- <input class="inputs" v-model="sendInfo"/> -->

    <el-button type="info">Info</el-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const sendInfo = ref('')
</script>

<style lang="scss" scoped>
.sendBar {
  display: flex;
  width: 80%;
  gap: 10px;

  .inputs {
    width: 90%;
    height: 50px;
    background-color: rgb(66, 70, 86);
    border-radius: 15px;
    border: 2px solid rgb(34, 135, 225);
    padding: 10px;
    box-sizing: border-box;
    transition: 0.2s;
    font-size: 20px;
    color: #fff;
    font-weight: 100;
    margin: 0 20px;
    &:focus {
      outline: none;
    }
  }
}
</style>
