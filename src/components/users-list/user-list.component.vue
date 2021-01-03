<template>
  <div class="users">
    <h4>Lista użytkowników bezpośrednio ze Stora</h4>
    <select v-model="selectedGender" class="form-group">
      <option value="" selected>Wszyscy</option>
      <option :value="Gender.MALE">Mężczyźni</option>
      <option :value="Gender.FEMALE">Kobiety</option>
    </select>
    <transition name="fade" mode="out-in" appear>
      <table v-if="users.length" class="table table-striped">
        <thead>
          <tr>
            <th>Imię i nazwisko</th>
            <th>Płeć</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <app-user v-for="(user, index) in users" :key="user.id" :user="user" :userIndex="index" />
        </tbody>
      </table>
      <div v-else>Brak użytkowników</div>
    </transition>
  </div>
</template>

<script lang="ts" src="./user-list.component.ts"></script>
<style lang="scss" src="./user-list.component.scss"></style>
