<template>
    <div>
         <Head></Head>
         <div class="item" v-for="(item,index) in piaoList" :key="index">
             <h4>{{item.name}}</h4>
             <div v-for="(item,index) in arrList[index].arr" :key="index">
                 <p>{{item}}</p>
             </div>
         </div>
    </div>
</template>

<script>
import Head from "../components/header/Head"
export default {
    data(){
        return{
            piaoList:[],
            arrList:[]
        }
    },
    components:{
        Head
    },
    mounted(){
        this.axios.get('/api/data.json').then(res =>{
            this.piaoList = res.data.piao;
            this.arrList = res.data.piao;
            console.log(this.arrList)
        })
    }
}
</script>

<style scoped>
    .box{
        width: 100%;
        height: 100%;
    }
</style>