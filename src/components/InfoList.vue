<template>
  <div>
    <ul>
      <InfoItem 
        v-for="info of infoForRender"
        :key="info[0]"
        v-bind:info="info"
        v-bind:contact="contact"
        v-on:re-render="reRender"
        v-on:step-back="stepBack"
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
    //Метод эмитит событие перерисовки
    reRender() {
      this.$emit('re-render')
    },
    //Метод эмитит событие для "Шага назад"
    stepBack() {
      this.$emit('step-back')
    }
  }
}
</script>