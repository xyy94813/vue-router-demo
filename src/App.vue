<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/dynamic/custom">dynamic params</RouterLink>
        <RouterLink to="/dynamic/1111">dynamic params match all num regexp</RouterLink>
        <RouterLink to="/dynamic/custom-222">dynamic params match sub num regexp</RouterLink>
        <RouterLink to="/optional/">optional params not exist</RouterLink>
        <RouterLink to="/optional/id123">optional params exist</RouterLink>
        <RouterLink to="/repeat/a/b/c/d">repeat +</RouterLink>
        <RouterLink to="/repeat/">repeat *</RouterLink>
        <RouterLink to="/Sensitive">/Sensitive 404</RouterLink>
        <RouterLink to="/sensitive/">/sensitive/ working well</RouterLink>
        <RouterLink to="/strict/">/strict/ slash 404</RouterLink>
        <RouterLink to="/Strict">/Strict working well</RouterLink>
        <RouterLink to="/sub-routes/dynamic">sub routes</RouterLink>
        <RouterLink to="/omitting-parent-components/dynamic">omitting-parent-components</RouterLink>
        <RouterLink to="/omitting-parent-components">
          404 not working when match "/omitting-parent-components"
        </RouterLink>
        <RouterLink to="/named-views">named-views</RouterLink>
        <RouterLink to="/alias/index">relative alias</RouterLink>
        <RouterLink to="/aliasA">absolute alias</RouterLink>
        <RouterLink to="/alias/123">relative params alias(独立 active)</RouterLink>
        <RouterLink to="/redirect-to-about">redirect to about</RouterLink>
        <RouterLink to="/redirect-to-about-with-query-idXXX"
          >redirect to /about with the query from params</RouterLink
        >
        <RouterLink to="/Symbol('404')/123123?a=1#id">404</RouterLink>
      </nav>
    </div>
  </header>
  <main>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <keep-alive :max="10">
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
}

nav a.router-link-exact-active {
  color: var(--color-text);
  background-color: hsla(160, 100%, 37%, 0.6);
}

/* nav a.router-link-exact-active:hover {
  background-color: transparent;
} */

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}

.fade-leave-active,
.fade-enter-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
