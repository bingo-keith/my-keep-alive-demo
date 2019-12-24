<template>
  <div class="demo1">
    这是详情页
    <div v-for="item in 80" :key="item" style="line-height: 40px;">
      {{item}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'detail',
  data () {
    return {
    }
  },
  methods: {
    handleClick() {
      this.$router.push({
        name: 'detail'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.demo1 {
  height: 10vh;
}
</style>
