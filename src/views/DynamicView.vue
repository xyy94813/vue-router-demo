<template>
  <div>
    <h1>This is an dynamic page</h1>
    <h2>{{ $route.name }}</h2>
    <h2>{{ $route.fullPath }}</h2>
    <h2>{{ $route.path }}</h2>
    <h2>{{ JSON.stringify($route.params) }}</h2>
  </div>
</template>

<style></style>
