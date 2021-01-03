<template>
  <tr>
    <td>
      <template v-if="!isEditMode">{{ user.fullName }}</template>
      <template v-else>
        <input 
          type="text" 
          :value="user.fullName" 
          @change="updateUser('fullName', $event.target.value)" 
        />
      </template>
    </td>
    <td>{{ user.gender }}</td>
    <td>
      <template v-if="!isEditMode">
        <button class="btn btn-warning" @click="isEditMode=true">Edytuj</button>        
      </template>
      <template v-else>
        <button class="btn btn-success" @click="isEditMode=false">OK</button>
      </template>
      <button class="btn btn-danger ml-1" @click="removeUser()">Usuń</button>
    </td>
  </tr>
</template>

<script lang="ts" src="./user.component.ts"></script>
