<template>
  <div class="container">
    <h1 class="title">Sort strings as {{ strings }}.</h1>
    <div class="levelSelector">
      <button @click="setCount(1)">easy</button>
      <button @click="setCount(2)">medium</button>
      <button @click="setCount(3)">hard</button>
    </div>
    <string-puzzle
      :strings="strings"
      :shuffle-count="shuffleCount"
      :render-id="renderId"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import StringPuzzle from '~/components/StringPuzzle.vue'

export default Vue.extend({
  components: {
    StringPuzzle
  },
  data() {
    return {
      shuffleCount: 1,
      renderId: 0
    }
  },
  computed: {
    strings(): string[] {
      // Mon, 08/26/2019, 00:30
      const dateString = new Date().toLocaleDateString('en', {
        weekday: 'short',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      })
      const [wday, ymd] = dateString.split(', ')
      const yyyymmdd = ymd.replace(/[^\d]/g, '')
      return [
        `${wday},`,
        yyyymmdd.slice(0, 4),
        yyyymmdd.slice(4, 8)
        // , yyyymmdd.slice(8, 12)
      ]
    }
  },
  methods: {
    setCount(count: number) {
      this.shuffleCount = count
      this.renderId++
    }
  }
})
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.levelSelector {
  display: flex;
  flex-direction: row;
  margin: 50px;
}
</style>
