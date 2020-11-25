<template>
 <div>
    <h1>Contacts</h1>
    <AddContact />
    <ContactList 
      v-if="contacts.length"
      v-bind:contacts="contacts"
    />
    <p v-else class="no-contacts-dicription">You have no contacts</p>
  
    
 </div>
</template>

<script>
import AddContact from "@/components/AddContact"
import ContactList from "@/components/ContactList"
export default {
  name: 'contacts',
  computed: {
    contacts() {
      return this.$store.getters.contacts
    }
  },
  components: {
    AddContact, ContactList
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
  h1 {
    text-align: center;
  }
  .no-contacts-dicription {
    text-align: center;
    font-size: 1.2rem;
    font-style: italic;
    color: #90a4ae;
  }
</style>