<template>
  <div class="home_container">
    <el-row>
      <el-col :span="4">
       <Nav></Nav>
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
import Nav from '@/components/home/Nav.vue';
</script>

<style scoped lang="scss">
.home_container {
  width: 100%;
  height: 100vh;
  .home_content {
    height: 100vh;
  }
}
</style>
