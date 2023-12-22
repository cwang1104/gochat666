<template>
    <div class="itemContainer">
        <div class="avatar">
            <img src="../../assets/images/background.jpg" alt="" />
            <div class="login_dot"></div>
        </div>
        <div class="personInfo">
            <span>name</span>
            <span>title</span>
        </div>
    </div>
</template>

<script setup lang="ts">


</script>

<style lang="scss" scoped>
.itemContainer {
    padding: 5px;
    display: flex;
    // justify-content: center;
    align-items: center;
    border-radius: 7px;
    

    .personInfo{
        margin-left: 5px;
        gap: 5px;
        padding: 5px;
        display: flex;
        flex-direction: column;
        span{
            color: white;
        }
    }
    .avatar {
        position: relative;
        width: 40px;
        height: 40px;
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

        .login_dot {
            position: absolute;
            top: 0;
            right: 0;
            width: 13px;
            height: 13px;
            background-color: rgb(32, 221, 32);
            border-radius: 50%;
            z-index: 10;
        }
    }
}
</style>