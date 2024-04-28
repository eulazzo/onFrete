<script lang="ts" setup>
// import { z } from 'zod'
// import type { FormSubmitEvent } from '#ui/types'
// import { useI18n } from 'vue-i18n'
// const { t } = useI18n()
import { reactive,computed  } from 'vue';
// import AuthService from '../../common/services/AuthService'
const form = reactive({
  data: {
    email: '',
    password: '',
    rememberMe: false,
  },
  error: '',
  pending: false,
})

const enabledAccess = computed(() => form.data.email && form.data.password)

// const createTranslatedSchema = () => {
  // return z.object({
  //   email: z.string().email(t('informe_endereco_email_valido')),
  //   password: z.string().min(8, t('informe_caracteres_minimo')),
  //   rememberMe: z.boolean(),
  // })
// }
// const schema = reactive(createTranslatedSchema())
// const translatedSchema = computed(createTranslatedSchema)

// type Schema = z.output<typeof schema>

async function onLoginClick() {
  if (!enabledAccess) return
  form.pending = true
  // AuthService.auth(form.data)
  // .then((res: any) => {
  // const encoded = JSON.parse(atob(res.data.token.split('.')[1]));
  // localStorage.setItem(
  //   'participanteLogadoId',
  //   encoded.participante_logado_id
  // );
  // this.$store.dispatch('Autenticacao/autenticar', res.data);
  // if(this.$route?.params?.redirect)
  //   this.$router.push(this.$route.params.redirect);
  // else
  //   this.$router.push('/dashboard');
  // })
  // .catch((erro: any) => {
  // if (erro?.response?.data.errors !== undefined) form.error = erro.response.data.errors[0]
  // })
  // .finally(() => {
  // form.pending = false
  // })
  
}
</script>

<template>
  <div class="flex min-h-screen flex-col  ">
    
    <header class="pt-10 flex flex-col mt-5">
      <div class="flex justify-center">
        <img src="../../assets/img/logo-login.svg" alt="Logo" />
      </div>
      <span class="primary-text text-center text-primary-text">Maintenance: Be the Best, with the Best</span>
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
            <span class="text-primary-text  text-sm">Welcome back. We only need your email and password, and you'll be on your way.</span>
          </div>
        </div>
        <form class="space-y-4" @submit="onLoginClick">
          <div class="flex flex-col gap-2">
            <label for="email">E-mail</label>
            <InputText
              type="email"
              id="email"
              v-model="form.data.email"
              aria-describedby="email-help"
            />
          </div>
          <div class="flex flex-col gap-2">
            <label for="password">Password</label>
            <InputText
              type="password"
              id="password"
              v-model="form.data.password"
              aria-describedby="password-help"
            />
          </div>
          <div class="flex text-black">
            <Checkbox
              name="rememberMe"
              inputId="rememberMe"
              value="rememberMe"
              v-model="form.data.rememberMe"
            />
            <label for="rememberMe" class="ml-2 text-sm"> Permanecer conectado? </label>
          </div>

          <Button class="w-full" severity="danger"   type="submit" :disabled="form.pending" :loading="form.pending"  >{{
            'login'
          }}</Button>
          <p  >
            <span class="font-thin text-sm">Don't have an account yet?</span>
            <strong class="text-primary-base-red ml-2 text-sm cursor-pointer font-medium">Sign up for free.</strong>
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
