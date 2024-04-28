<script lang="ts" setup>
import { reactive, computed } from "vue";
import InputEmail from "../../components/inputs/InputEmail.vue";
import InputPassword from "../../components/inputs/InputPassword.vue";
const form = reactive({
  data: {
    email: "",
    password: "",
    rememberMe: false,
  },
  error: "",
  pending: false,
});

const enabledAccess = computed(() => form.data.email && form.data.password);

async function onLoginClick() {
  if (!enabledAccess) return;
}
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
        <p
          v-if="form.error"
          class="mb-3 w-full rounded border border-red-400 px-3 py-1.5 text-center text-sm text-red-400"
        >
          {{ form.error }}
        </p>
        <div class="text-center py-4">
          <p class="text-primary-base-red text-2xl">Login</p>
          <div class="mt-2">
            <span class="text-primary-text text-sm"
              >Welcome back. We only need your email and password, and you'll be
              on your way.</span
            >
          </div>
        </div>
        <form class="space-y-4" @submit="onLoginClick">
          <input-email
            label="Email"
            v-model="form.data.email"
            required
            placeholder="E-mail"
            :show-icon="true"
          />
          <input-password
            type="password"
            label="Password"
            v-model="form.data.password"
            required
            placeholder="password"
            :isLoginPage="true"
          />
          <Button
            class="w-full"
            severity="danger"
            type="submit"
            :disabled="form.pending"
            :loading="form.pending"
            >{{ "login" }}</Button
          >
          <p>
            <span class="font-thin text-sm">Don't have an account yet?</span>
            <router-link to="/account">
              <strong
                class="text-primary-base-red ml-2 text-sm cursor-pointer font-medium"
                >Sign up for free.</strong
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
