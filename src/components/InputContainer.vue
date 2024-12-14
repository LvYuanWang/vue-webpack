<template>
  <div class="inputContainer">
    <div class="numberContainer">
      <div class="numberTitle">leftNumber:</div>
      <input type="number" class="numberInput" v-model="leftNumber" />
    </div>
    <div class="numberContainer">
      <div class="numberTitle">rightNumber:</div>
      <input type="number" class="numberInput" v-model="rightNumber" />
    </div>
  </div>
</template>

<script>
import debounceFunc from "@/utils/debounceFunc";

export default {
  data() {
    return {
      leftNumber: 0,
      rightNumber: 0,
      timerId: null
    }
  },
  methods: {},
  watch: {
    leftNumber(val) {
      this.timerId = debounceFunc(() => {
        this.$emit('setLeftNum', val);
      }, 300, this.timerId)
    },
    rightNumber(val) {
      this.timerId = debounceFunc(() => {
        this.$emit('setRightNum', val);
      }, 300, this.timerId)
    }
  }
}
</script>

<style lang="less">
.inputContainer {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  .numberContainer {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .numberTitle,
    .numberInput {
      color: var(--globalFontColor);
      font-size: var(--globalFontSize);
    }
    .numberTitle {
      width: 15%;
      padding-right: 20%;
    }

    .numberInput {
      padding: 10px;
      flex-grow: 1;
    }
  }
}
</style>