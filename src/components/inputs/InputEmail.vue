<template>
  <div class="container-input">
    <label class="text-md text-gray-500" :for="labelInput">{{ labelInput }}</label>
    <InputText
      v-model.trim="content"
      type="E-mail"
      :class="setStyle"
      @input="updateValueAndEmitEvent"
      :placeholder="placeholder"
      :error="error"
      :disabled="disabled"
      style="background:white"
      class="border-gray-500 input"
    />
    <span class="error-message">{{ showMessage }}</span>
  </div>
</template>

<script>
export default {
  name: 'InputEmail',
  props: {
    value: { type: String, default: '' },
    type: { type: String, default: 'text' },
    placeholder: { type: String, default: '' },
    message: { type: String, default: '' },
    error: { type: Boolean, default: true },
    required: { type: Boolean },
    labelInput: { type: String, default: '' },
    variant: { type: String, default: 'input' },
    emailValue: { type: String, default: '' },
    disabled: { type: Boolean, default: false },
    showIcon: { type: Boolean, default: false },
  },

  data() {
    return {
      content: '',
      isValid: false,
      label: this.labelInput,
      buttonType:this.type
    }
  },

  watch: {
    emailValue(value) {
      this.content = value
      this.setError()
      this.setEmit()
    }
  },

  computed: {
    setStyle() {
      if (this.variant) return `input ${this.variant}`

      return `input`
    },
    showMessage() {
      this.setError()
      if (!this.content.length) return
      return this.validEmail(this.content) === true ? '' : this.validEmail(this.content)
    },
  },

  methods: {
    
    setEmit() {
      const isValidEmail = this.validEmail(this.content)
      this.$emit('isValidEmail', this.isValid)
      this.$emit('setInputEmailValueAfterPageLoaded', {
        value: this.content,
        errorMessage: isValidEmail,
      })
    },

    updateValueAndEmitEvent() {
      this.$emit('update:modelValue', this.content)
      const errorMessage = this.validEmail(this.content)
      this.$emit('validation', { value: this.content, errorMessage })
      this.$emit('isValidEmail', this.isValid)
    },

    setError() {
      const error = this.validEmail(this.content)
      typeof error === 'boolean' ? (this.isValid = true) : (this.isValid = false)
    },

    validEmail(inputValue) {
      if (!inputValue) return `*${this.label} é obrigatório!`

      const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
      const isValid = regexEmail.test(inputValue)

      if (!isValid) return `*E-mail  Inválido!`
      return true
    }
  },
}
</script>

<style scoped>
.container-input {
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  position: relative;
  color:black;
}

.icon-input {
  top: -12px;
  width: 20px;
  height: 20px;
}
.hidden {
  display: none;
}
.error-success-icons {
  position: absolute;
  right: 0;
}
.icon {
  width: 25px;
  height: 25px;
  position: absolute;
  top: 15px;
  right: 40px;
  pointer-events: none;
  z-index:100;
}
.icon-error {
  color: red;
}
.icon-success {
  color: #00274e;
}
.error-message {
  color: red;
  font-size: 1rem;
  font-size: 0.8rem;
  margin-top: 0.2rem;
}
.show {
  display: block;
}
</style>
