<template>
  <div class="demo1"  @click="handleClick">
    这是首页，点击进入列表页不缓存
  </div>
</template>

<script>
export default {
  name: 'index',
  data() {
    return {
      arr: 20
    }
  },
  beforeRouteLeave(to, from, next) {
    if(to.name === 'detail') {
      from.meta.keepAlive = true
    } else {
      from.meta.keepAlive = false
    }
    next()
  },
  activated() {
    if(!this.$route.meta.keepAlive) {
      this.arr = 25
    }
  },
  methods: {
    handleClick() {
      this.$router.push({
        name: 'index'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.demo1 {
  height: 150vh;
  background: #CCC;
}
</style>
