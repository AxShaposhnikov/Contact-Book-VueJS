<template>
 <div class="popup-shadow" @click.self="closePopup">
    <div class="popup">
    <div class="popup__header">
      <span>Caution!</span>
    </div>
    <div class="popup__content">
      <slot></slot>
    </div>
    <div class="popup__footer">
      <button class="btn blue" @click="agree">Yes</button>  
      <button class="btn grey" @click="closePopup">No</button>
    </div>
  </div>
 </div>
</template>
 
<script>
export default {
  name: "Modal",
  methods: {
    closePopup() {
      this.$emit("close-popup")
    },
    agree() {
      this.$emit("agree")
    }
  }
};
</script>
 
<style scoped lang="scss">
  .popup-shadow {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.39);
    position: fixed;
    z-index: 10;
  }
  .popup {
    padding: 20px;
    position: fixed;
    top: 100px;
    left: 40%;
    background: #ffffff;
    box-shadow: 0 0 17px 0 #e7e7e7;
    width: 400px;
    z-index: 10;

    &__header, &__footer {
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
    
    &__content {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>