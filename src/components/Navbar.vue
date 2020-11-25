<template>
    <nav class="blue darken-2">
    <div class="nav-wrapper">
      <router-link to="/" class="brand-logo">Contact Book</router-link>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <router-link
            tag="li"
            to="/"
            exact
            active-class="active"
        >
            <a href="#">Contacts</a>
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
    nav {
        padding: 0 2rem;
    }
</style>