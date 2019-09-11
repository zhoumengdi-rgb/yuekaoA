<template>
    <div class="wrap">
        <Head></Head>
         <div class="head">
             <span v-for="(item,index) in titleList"
             :class=" index === ind ? 'active':'' "
             @click="changeInd(index)"
             :key="index"
             >
                 {{item}}
             </span>

         </div>
    </div>
</template>

<script>
import Head from "../components/header/Head"
export default {
    data(){
        return{
            titleList:['热门','新书','免费','完本'],
            ind:0
        }
    },
    components:{
        Head
    },
    methods:{
        changeInd(index){
            this.ind = index;
            console.log(this.ind)
        }
    }
}
</script>

<style scoped>
    .head{
        width: 100%;
        height: 44px;
        display: flex;
    }
    .head span{
        flex:1;
        text-align: center;
        line-height: 44px;
        background: #ccc;
    }
    .head span.active{
        background: #f00;
        color: #fff;
    }
</style>