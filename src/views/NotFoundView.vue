<template>
  <section>
    <h2>404!</h2>
    <h2>{{ $route.name }}</h2>
    <h2>{{ $route.path }}</h2>
    <h2>{{ $route.fullPath }}</h2>
    <h2>{{ JSON.stringify($route.query) }}</h2>
    <h2>{{ $route.hash }}</h2>
  </section>
</template>

<style></style>
