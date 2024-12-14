<template>
  <div class="buttonContainer">
    <button class="button" @click="addNumber">addNumber</button>
    <button class="button" @click="subtractNumber">subtractNumber</button>
  </div>
</template>

<script>

export default {
  methods: {
    addNumber() {
      this.$emit('addNum');
    },
    subtractNumber() {
      this.$emit('subtractNumber');
    }
  }
}
</script>

<style lang="less">
.buttonContainer {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  padding: 5px;
  .button {
    padding: 10px;
    background-color: var(--globalBackgroundColor);
    color: var(--globalFontColor);
    cursor: pointer;
    border: 1px solid var(--globalFontColor);
    border-radius: 10px;
    font-size: var(--globalFontSize);
    &:hover {
      background-color: var(--globalFontColor);
      color: var(--globalBackgroundColor);
      transition: all 0.5s;
    }

    &:active {
      background-color: var(--globalFontColor);
      color: var(--globalBackgroundColor);
    }
  }
}
</style>