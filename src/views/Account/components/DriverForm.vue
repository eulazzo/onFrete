<script setup lang="ts">
import InputText from "../../../components/inputs/InputText.vue";
import { Icon } from "@iconify/vue";
</script>

<template>
  <form class="h-full space-y-10">
    <div>
      <!-- <input-select
              label="Localização"
              v-model="state.user.location"
              :options="locations"
              required
              :error="errors.location"
              placeholder="Selecione localização"
            /> -->
      <p class="flex items-center">
        <Icon class="size-5 opacity-75" icon="heroicons-document-chart-bar" />
        Informações Pessoais
      </p>
      <div class="my-3 flex flex-col gap-2 md:flex-row">
        <input-text
          labelInput="Nome"
          placeholder="Digite seu nome"
          type="text"
          required
          class="flex-1"
        />
        <input-text
          labelInput="Sobrenome"
          placeholder="Digite seu Sobrenome"
          type="text"
          required
          class="flex-1"
        />
      </div>
      <div class="my-3 flex flex-col gap-2 md:flex-row">
        <input-text
          labelInput="CPF"
          placeholder="Digite seu CPF"
          type="text"
          required
          class="flex-1"
        />
        <input-text
          labelInput="Endereço"
          placeholder="Digite seu Endereço"
          type="text"
          required
          class="flex-1"
        />
      </div>

      <p class="flex items-center">
        <Icon class="size-5 opacity-75" icon="heroicons-phone" />
        Informações de Contato
      </p>
      <div class="my-3 flex flex-col gap-2 md:flex-row">
        <input-text
          labelInput="Whatsaap"
          placeholder="Número de telefone"
          type="text"
          required
          class="flex-1"
        />
        <input-text
          labelInput="E-mail"
          placeholder="Digite seu email"
          type="text"
          required
          class="flex-1"
        />
      </div>
    </div>

    <div class="space-x-4">
      <Button label="Salvar" type="submit" icon="pi pi-check" />
    </div>
  </form>
</template>
