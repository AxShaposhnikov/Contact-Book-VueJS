<template>
  <div>
    <form @submit.prevent="onSubmit">
      <input
        placeholder="Enter contact name"
        id="contact_name"
        type="text"
        v-model="name"
        maxlength="100"
      />
      <button class="btn blue" type="submit">Add contact</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
    };
  },
  methods: {
    //Создаём новый контакт
    onSubmit() {
      if (this.name.trim()) {
        const newContact = {
          id: Date.now(),
          name: this.name,
          info: {},
        };
        //Диспатчим в стор
        this.$store.dispatch('createContact', newContact)
        this.name = ''
      }
    }
  }
};
</script>