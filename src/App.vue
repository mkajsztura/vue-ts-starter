<template>
  <div id="app" class="app-wrapper">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss" src="./app.scss"></style>
<script lang="ts" src="./app.ts"></script>
