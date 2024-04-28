<script lang="ts" setup>
import InputEmail from "../../components/inputs/InputEmail.vue";
import InputText from "../../components/inputs/InputText.vue";
import InputPassword from "../../components/inputs/InputPassword.vue";
import { reactive } from "vue";

const form = reactive({
  user: {
    email: "",
    name: "",
    password: "",
    userType: false,
  },
  pending: false,
  error: false,
});
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <header class="pt-10 flex flex-col mt-5">
      <div class="flex justify-center">
        <img src="../../assets/img/logo-login.svg" alt="Logo" />
      </div>
      <span class="primary-text text-center text-primary-text"
        >Conectando Cargas, Encurtando Distâncias!
      </span>
    </header>
    <main class="mx-auto w-full max-w-sm">
      <div class="mb-6 rounded bg-white p-8 shadow-lg">
        <div class="text-center py-4">
          <p class="text-primary-base-red text-2xl">SignUp</p>
          <div class="mt-2">
            <span class="text-primary-text text-sm"
              >Welcome back. We only need your email, password and email, and
              you'll be on your way.</span
            >
          </div>
        </div>
        <form class="space-y-4">
          <div class="my-3 flex flex-col">
            <input-email
              labelInput="E-mail"
              placeholder="Digite seu email"
              type="email"
              required
              class="flex-1"
              v-model="form.user.name"
            />
            <input-text
              labelInput="Nome"
              placeholder="Digite seu nome"
              type="text"
              required
              class="flex-1"
              v-model="form.user.name"
            />
            <input-password
              labelInput="Password"
              placeholder="Digite sua senha"
              type="password"
              required
              class="flex-1"
              v-model="form.user.password"
            />
            <div class="mt-2">
              <p class="text-md text-gray-500">
                Informe o tipo de perfil você se encaixa
              </p>
              <div class="flex gap-2 mt-2">
                <RadioButton
                  name="driver"
                  value="driver"
                  inputId="driver"
                  v-model="form.user.userType"
                />
                <label class="text-sm text-gray-500" for="driver"
                  >Sou Motorista</label
                >
              </div>
              <div class="flex gap-2 mt-2">
                <RadioButton
                  name="userType"
                  value="client"
                  inputId="client"
                  v-model="form.user.userType"
                  class="rounded-full"
                />
                <label for="client" class="text-sm text-gray-500"
                  >Sou Cliente</label
                >
              </div>
            </div>
          </div>
          <Button label="Login" class="w-full space-x-4" type="submit" />
          <p>
            <span class="font-thin text-sm">Already have an account?</span>
            <router-link to="/login">
              <strong
                class="text-primary-base-red ml-2 text-sm cursor-pointer font-medium"
                >Login.</strong
              >
            </router-link>
          </p>
        </form>
      </div>
    </main>

    <footer class="mt-auto bg-zinc-900 text-zinc-300">
      <div class="flex justify-center p-3 text-xs">
        <p>&copy; lzRk</p>
      </div>
    </footer>
  </div>
</template>
