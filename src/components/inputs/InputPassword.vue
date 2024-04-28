<template>
  <div class="container-input">
    <label :for="labelInput" class="text-md text-gray-500">{{
      labelInput
    }}</label>
    <InputText
      v-model.trim="content"
      :type="buttonType"
      @input="updateValueAndEmitEvent"
      :placeholder="placeholder"
      style="background: white; color: black"
      class="border-gray-500 input"
    />
    <div class="error-success-icons">
      <button @click.prevent.stop="changeType" class="cursor-pointer">
        <Icon
          icon="heroicons-eye"
          :class="{ replaceTopIcon: isLoginPage }"
          class="icon passwordIcon cursor-pointer"
        />
      </button>
    </div>
    <span class="error-message">{{ showMessage }}</span>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue/dist/iconify.js";
export default {
  name: "InputPassword",
  components: { Icon },
  props: {
    value: { type: [String], default: "" },
    type: { type: [String], default: "password" },
    labelInput: { type: String, default: "" },
    type: { type: String, default: "text" },
    placeholder: { type: String, default: "" },
    message: { type: String, default: "" },
    error: { type: Boolean },
    required: { type: Boolean },
    sizeRule: { type: Number, default: 8 },
    showIcon: { type: Boolean, default: true },
    isLoginPage: { type: Boolean, default: false },
  },

  data() {
    return {
      content: this.value,
      isValid: false,
      label: this.labelInput,
      sizeRuleValidationField: this.sizeRule,
      buttonType: this.type,
    };
  },

  computed: {
    showMessage() {
      this.setError();
      if (!this.content) return;

      return typeof this.validateEmptyAndLength(
        this.content,
        this.sizeRuleValidationField
      ) === "boolean"
        ? ""
        : this.validateEmptyAndLength(
            this.content,
            this.sizeRuleValidationField
          );
    },
  },

  methods: {
    changeType() {
      this.buttonType === "text"
        ? (this.buttonType = "password")
        : (this.buttonType = "text");
    },
    updateValueAndEmitEvent() {
      this.$emit("update:modelValue", this.content);
      const errorMessage = this.validateEmptyAndLength(
        this.content,
        this.sizeRuleValidationField
      );
      this.$emit("validation", { value: this.content, errorMessage });
      this.$emit("isValidPassword", this.isValid);
    },

    setError() {
      const error = this.validateEmptyAndLength(
        this.content,
        this.sizeRuleValidationField
      );
      typeof error === "boolean"
        ? (this.isValid = true)
        : (this.isValid = false);

      this.updateValueAndEmitEvent();
    },

    validateEmptyAndLength(value, sizeRuleValidationField) {
      if (!value) return `*${this.label} é obrigatório!`;
      if (value.trim().length < this.sizeRuleValidationField)
        return `*Senha deve conter 8 caracteres`;

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
  color: black;
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
  top: 40px;
  opacity: 0.8;
  right: 40px;
  z-index: 100;
}
.replaceTopIcon {
  top: 13px;
}
.passwordIcon {
  right: 8px;
}
.icon-error {
  color: red;
}
.icon-success {
  color: blue;
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
