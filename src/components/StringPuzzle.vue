<template>
  <div>
    <div v-for="(row, ri) in strings_" :key="ri" class="row">
      <button @click="slideH(ri, 1)">←</button>

      <div v-for="(col, ci) in row" :key="ci" class="col">
        <button v-if="ri === 0" class="up" @click="slideV(ci, 1)">↑</button>
        <div :class="{ isMatched: col === strings[ri][ci] }">
          {{ col }}
        </div>
        <button
          v-if="ri === strings_.length - 1"
          class="down"
          @click="slideV(ci, -1)"
        >
          ↓
        </button>
      </div>

      <button @click="slideH(ri, -1)">→</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { slideH, slideV } from '~/utils/stringMatrix.ts'

export default Vue.extend({
  props: {
    strings: {
      type: Array,
      required: true
    } as PropOptions<string[]>,
    shuffleCount: {
      type: Number,
      required: true
    },
    renderId: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      strings_: [] as string[]
    }
  },
  watch: {
    shuffleCount: {
      immediate: true,
      handler() {
        this.init()
      }
    },
    strings: {
      immediate: true,
      handler() {
        this.init()
      }
    },
    renderId: {
      immediate: true,
      handler() {
        this.init()
      }
    }
  },
  methods: {
    init() {
      this.strings_ = [...this.strings]

      console.log('*** shuffle')
      ;[...Array(this.shuffleCount)].forEach(() => {
        this.shuffle()
      })
    },
    shuffle() {
      const rowLength = this.strings_.length
      const colLength = this.strings_[0].length
      this.slideH(
        Math.floor(Math.random() * rowLength),
        Math.floor(1 + Math.random() * (colLength - 1))
      )
      this.slideV(
        Math.floor(Math.random() * colLength),
        Math.floor(1 + Math.random() * (rowLength - 1))
      )
    },
    slideH(rowIndex: number, slideIndex: number) {
      console.log('h', rowIndex, slideIndex)
      this.strings_.splice(
        rowIndex,
        1,
        slideH(this.strings_[rowIndex], slideIndex)
      )
    },
    slideV(colIndex: number, slideIndex: number) {
      console.log('v', colIndex, slideIndex)
      this.strings_ = slideV(this.strings_, colIndex, slideIndex)
    }
  }
})
</script>
<style lang="scss" scoped>
.row {
  display: flex;
  flex-direction: row;
}
.col {
  width: 180px;
  font-size: 160px;
  position: relative;
}
.up {
  position: absolute;
  top: 0;
  transform: translateY(-100%);
}
.down {
  position: absolute;
  bottom: 0;
  transform: translateY(100%);
}
.isMatched {
  color: green;
}
</style>
