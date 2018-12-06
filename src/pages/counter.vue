<template>
  <div class="counter-warp">
    <p>Vuex counter：{{ count }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>

    <a href="/pages/index" class="home">去往首页</a>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState([
      'count'
    ])
  },
  methods: {
    ...mapMutations([
      'increment',
      'decrement'
    ])
  },
  created() {
    console.log('created', this)
  },
  mounted() {
    console.log('mounted', this)
  },
  onLoad() {
    console.log('onLoad', this)
  },
  onReady () {
    console.log('onReady', this)
  },
  onShow() {
    console.log('onShow', this)
  },
  onUnload() {
    console.log('onUnload', this)
  },
  onHide() {
    console.log('onHide', this)
  }
}
</script>

<style>
.counter-warp {
  text-align: center;
  margin-top: 100px;
}
.home {
  display: inline-block;
  margin: 100px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>
