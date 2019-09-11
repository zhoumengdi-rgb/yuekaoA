<template>
    <div class="head">
        <router-link to="/home" tag="span">首页</router-link>
        <router-link to="/list" tag="span">分类</router-link>
        <router-link to="/pai" tag="span">排行</router-link>
        <router-link to="/book" tag="span">书架</router-link>
    </div>
</template>

<style scoped>
    .head{
        width: 100%;
        height: 44px;
        background: #666;
        display: flex;
    }
    .head span{
        flex: 1;
        text-align: center;
        line-height: 44px;
    }
    .router-link-active{
        color: orange;
        background: #fff;
    }
</style>