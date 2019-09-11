<template>
  <div class="box">
    <Head></Head>
    <div class="swiperBox">
      <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
        <swiper-slide v-for="(item,index) in dataImg" :key="index">
          <img :src="item.image" alt />
        </swiper-slide>
      </swiper>
    </div>

    <div class="qu">
        <span>免费专区</span>
        <span>女频精选</span>
    </div>

    <div class="jian">
        <h2>编辑力荐</h2>
        <div class="items">
            <div class="left">
              <img src="../assets/logo.png" alt="">
            </div>
            <div class="right">
              <h4>田园娘子</h4>
              <p>四季度大大大大大大的大大大大大大大大大大大大十多年男女</p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import Head from "../components/header/Head";
export default {
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        autoplay: true
      },
      dataImg: []
    };
  },
  components: {
    Head
  },
  mounted() {
    this.axios.get("api/data.json").then(res => {
      this.dataImg = res.data.imgs;
      console.log(this.dataImg)
    });
  }
};
</script>

<style scoped>
.box {
  width: 100%;
  height: 100%;
}
.swiperBox{
  width: 100%;
  height: 200px;
}
.swiperBox img{
  width: 100%;
  height: 200px;
}
.qu{
  width: 100%;
  height: 80px;
  border-bottom: 2px solid #eee;
  display: flex;
  padding: 10px 0;
}
.qu span{
  flex: 1;
  padding: 0 15px;
  margin: 0 10px;
  background: #cfc;
  text-align: center;
  line-height: 80px;
  border-radius: 5px;
  font-size: 24px;
  color: orange;
}
.jian{
  width: 100%;
  height: auto;
}
.items{
  width: 100%;
  height: 100px;
  display: flex;
}
.items .left{
  flex: 3;
  text-align: center;
}
.items .left img{
  width: 70px;
  height: 110px;
}
.items .right{
  flex: 7;
}
</style>