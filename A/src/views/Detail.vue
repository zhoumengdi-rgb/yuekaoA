<template>
    <div>
        详情页
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    created(){
        console.log(this)
        console.log(this.$route.params.id)
    }
}
</script>