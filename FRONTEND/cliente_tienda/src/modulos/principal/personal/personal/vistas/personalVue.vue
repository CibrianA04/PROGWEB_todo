<template>
  <div>
    <h1>Personal</h1>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Clave</th>
          <th>Nombre</th>
          <th>Direccion</th>
          <th>Telefono</th>
          <th>Estatus</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="persona in personal" :key="persona.id">
          <td>{{ persona.id }}</td>
          <td>{{ persona.nombre }}</td>
          <td>{{ persona.direccion }}</td>
          <td>{{ persona.telefono }}</td>
          <td>{{ persona.estatus }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

interface Personal {
  id: number;
  nombre: string;
  direccion: string;
  telefono: string;
  estatus: number;
}

const personal = ref<Personal[]>([]);

const cargarPersonal = async () => {
  try {
    const response = await fetch('http://localhost:3001/api/personal');
    personal.value = await response.json();
  } catch (error) {
    console.error('Error al cargar personal:', error);
  }
};

onMounted(() => {
  cargarPersonal();
});
</script>

<style scoped>

</style>