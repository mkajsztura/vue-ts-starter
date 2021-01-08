<template>
  <div class="users">
    <h4>Lista użytkowników przekazana jako props</h4>
    <transition-group name="fade" mode="out-in" appear>
      <div v-for="(user, userIndex) in users" :key="user.id">
        {{userIndex +1 }}.
        <span>{{ user.fullName }}</span>
      </div>
    </transition-group>
  </div>
</template>

<script lang="ts" src="./user-list-simple.component.ts"></script>
<style lang="scss" src="./user-list-simple.component.scss"></style>
