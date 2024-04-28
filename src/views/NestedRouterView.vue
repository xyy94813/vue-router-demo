<template>
  <section>
    <h1>Nested Router</h1>
    <h2>{{ $route.name }}</h2>
    <h2>{{ $route.fullPath }}</h2>
    <h2>{{ $route.path }}</h2>
    <h2>{{ JSON.stringify($route.params) }}</h2>
    <div><button onclick="console.log($route.matched)">see matched in console</button></div>
    <hr />
    <section>
      <h1>sub routes</h1>
      <router-view />
    </section>
  </section>
</template>

<style></style>
