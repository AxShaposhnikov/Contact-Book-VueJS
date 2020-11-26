<template>
  <div>

    <popup 
      v-if="isConfirmPopupVisible" 
      @close-popup="closePopup"
      @agree="agree"
      
      >
      <p>Do you want to delete this contact?<br><strong>({{contact.name}})</strong></p>
    </popup>

    <li>
    <div class="wrapper">
      <strong>{{index + 1}}</strong>
      {{contact.name}}
      
    </div>
    <div>
      <router-link tag="button" class="btn" :to="'/' + contact.id">Info</router-link>
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
  props: {
    contact: {
      type: Object
    },
    index: Number
  },
  data() {
    return {
      isConfirmPopupVisible: false,
    }
  },
  methods: {
    //Метод показывает модальное окно
    showPopup() {
      this.isConfirmPopupVisible = true
    },
    //Метод закрывает модальное окно
    closePopup() {
      this.isConfirmPopupVisible = false
    },
    //Метод удаляет контакт (диспатчит экшен для удаления контакта из стора)
    agree() {
      this.$store.dispatch('removeContact', this.contact.id)
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