<template>
  <div>

    <form @submit.prevent="onSubmit">
      <button class="btn blue" type="submit" >Add info</button>
      <router-link tag="button" class="btn black btn-home" :to="'/'">go home</router-link>
      
      
      <div class="row">
        <div class="input-field col s6">
          <input
            placeholder="Enter the name of the added or modified field"
            id="field_name"
            type="text"
            class="validate"
            v-model="infoField"
            maxlength="100"/>
        </div>
        <div class="input-field col s6">
          <input 
            placeholder="Enter field value"
            id="field_value" 
            type="text" 
            class="validate" 
            v-model="infoFieldValue"
            maxlength="100"/>
        </div>
        
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      infoField: "",
      infoFieldValue: "",
    };
  },
  methods: {
    onSubmit() {
      if (this.infoField.trim() && this.infoFieldValue.trim()) {
        const newInfo = {}
        newInfo[this.infoField] = this.infoFieldValue
        this.$emit('update-info', newInfo)
        this.infoField = ""
        this.infoFieldValue = ""
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .btn-home {
    margin-left: 10px;
  }
</style>