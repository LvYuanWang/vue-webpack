<template>
  <div class="container">
    <div class="computer-number-container">
      <InputContainer
        @setLeftNum="(num) => (this.leftNumber = num * 1)"
        @setRightNum="(num) => (this.rightNumber = num * 1)"
      />
      <ButtonContainer
        @addNum="computeAddNum"
        @subtractNumber="computeSubtractNum"
      />
    </div>
    <div class="resultContent">result: {{ num }}</div>
  </div>
</template>

<script>
import ButtonContainer from "@/components/ButtonContainer";
import InputContainer from "@/components/InputContainer";
import { addNumber, subtractNumber } from "@/utils/getSumMethod";

export default {
  name: "ComputeNum",
  components: {
    ButtonContainer,
    InputContainer
  },
  data() {
    return {
      num: 0,
      leftNumber: 0,
      rightNumber: 0
    }
  },
  methods: {
    computeAddNum() {
      this.num = addNumber(this.leftNumber, this.rightNumber);
    },
    computeSubtractNum() {
      this.num = subtractNumber(this.leftNumber, this.rightNumber);
    }
  }
}
</script>

<style lang="less">
.container {
  width: var(--globalContainerSize);
  height: var(--globalContainerSize);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-size: var(--globalFontSize);
  .computer-number-container {
    width: var(--globalContainerSize);
    padding: 10px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
  }
}
</style>