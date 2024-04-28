<template>
  <div class="container-input">
    <label class="text-md text-gray-500" :for="labelInput">{{ label }}</label>
    <InputText
      v-model.trim="content"
      :class="setStyle"
      @input="updateValueAndEmitEvent"
      :placeholder="placeholder"
      :error="error"
      type="text"
      :disabled="disabled"
      style="background: white; color: black"
      class="border-gray-500 input"
    />
    <span class="error-message">{{ showMessage }}</span>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
export default {
  components: { Icon },
  name: "InputPassword",
  props: {
    value: { type: String, default: "" },
    placeholder: { type: String, default: "" },
    message: { type: String, default: "" },
    error: { type: Boolean, default: true },
    required: { type: Boolean },
    labelInput: { type: String, default: "" },
    variant: { Type: String, default: "input" },
    nameValue: { type: String, default: "" },
    disabled: { type: Boolean, default: false },
    showIcons: { type: Boolean, default: true },
  },

  data() {
    return {
      content: "",
      isValid: false,
      label: this.labelInput,
    };
  },
  watch: {
    nameValue(value) {
      this.content = value;
      this.setError();
      this.setEmit();
    },
  },

  mounted() {
    this.content = this.nameValue;
    this.setError();
    this.setEmit();
  },

  computed: {
    setStyle() {
      if (this.variant) return `input ${this.variant}`;
      return `input`;
    },
    showMessage() {
      this.setError();
      if (!this.content.length) return;
      return this.validName(this.content) === true
        ? ""
        : this.validName(this.content);
    },
  },

  methods: {
    setEmit() {
      const isValidName = this.validName(this.content);
      this.$emit("isValidName", this.isValid);
      this.$emit("setInputTextValueAfterPageLoaded", {
        value: this.content,
        errorMessage: isValidName,
      });
    },
    updateValueAndEmitEvent() {
      this.setError();
      this.$emit("update:modelValue", this.content);
      const isValidName = this.validName(this.content);
      this.$emit("validation", {
        value: this.content,
        errorMessage: isValidName,
      });
      this.$emit("isValidName", this.isValid);
    },

    setError() {
      const error = this.validName(this.content);
      typeof error === "boolean"
        ? (this.isValid = true)
        : (this.isValid = false);
    },

    validName(name) {
      if (!name) return `Campo *${this.label} é obrigatório!`;
      const nameRegex = /^[A-ZÀ-Ú][a-zà-ú]+( [A-ZÀ-Ú][a-zà-ú]+)*$/;
      const isValid = nameRegex.test(name);
      if (!isValid) return `*${this.label} digitado é inválido!`;
      return true;
    },
  },
};
</script>

<style scoped>
.container-input {
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  position: relative;
}

.input {
  font-size: 1rem;
  max-width: 100%;
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
  top: 45px;
  right: 8px;
  pointer-events: none;
  z-index: 200;
  color: green;
}
.icon-error {
  color: red;
}
.icon-success {
  color: green;
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
