<template>
  <div>
    <ul>
      <InfoItem 
        v-for="info of infoForRender"
        :key="info[0]"
        v-bind:info="info"
        v-bind:contact="contact"
        v-on:re-render="reRender"
      />
    </ul>
  </div>
</template>

<script>
import InfoItem from "@/components/InfoItem"
export default {
  props:['infoForRender', 'contact'],
  components: {
    InfoItem
  },
  methods: {
    reRender() {
      this.$emit('re-render')
    }
  }
}
</script>