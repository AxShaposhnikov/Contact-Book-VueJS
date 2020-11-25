<template>
  <div>

    <popup 
      v-if="isConfirmPopupVisible" 
      @close-popup="closePopup"
      @agree="agree"
      
      >
      <p>Do you want to delete this info?<br><strong>({{info[0]}})</strong></p>
    </popup>

    <li>
    <div class="wrapper">
      <strong>{{info[0]}}:</strong>
      {{info[1]}}
    </div>
    <div>
      <button class="btn btn-delete red" @click="showPopup">Delete</button>
    </div>    
  </li>
  </div>
</template>

<script>
import Popup from "@/components/Popup"
export default {
  components: {
    Popup
  },
  props: ['info', 'contact'],
  data() {
    return {
      isConfirmPopupVisible: false,
      removeInfoData: []
    }
  },
  methods: {
    showPopup() {
      this.isConfirmPopupVisible = true
    },
    closePopup() {
      this.isConfirmPopupVisible = false
    },
    agree() {
      this.removeInfoData.push(this.contact.id)
      this.removeInfoData.push(this.info[0])
      this.$emit('step-back')
      this.$store.dispatch('removeContactInfo', this.removeInfoData)
      this.$emit('re-render')
      
      
      this.isConfirmPopupVisible = false
      
    }
  }
}
</script>

<style scoped>
  .wrapper {
    margin-top: 0.5rem;
  }
  li {
    border: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    padding: .5rem 2rem;
    margin-bottom: 1rem;
  }

  button {
    margin: 0 0.5rem;
  }
</style>