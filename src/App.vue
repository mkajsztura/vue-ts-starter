<template>
  <div id="app" class="app-wrapper">
    <div id="nav">
      <!-- link po ścieżce -->
      <router-link to="/">Home</router-link> |
      <!-- link po nazwie w routerze -->
      <router-link :to="{name: 'About'}">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss" src="./app.scss"></style>
<script lang="ts" src="./app.ts"></script>
