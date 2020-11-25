<template>
  <div>
    <ul>
      <ContactItem 
        v-for="(contact, i) of contacts"
        :key="contact.id"
        v-bind:contact="contact"
        v-bind:index="i"
      />
    </ul>
  </div>
</template>

<script>
import ContactItem from "@/components/ContactItem"
export default {
  props:['contacts'],
  components: {
    ContactItem
  }
}
</script>