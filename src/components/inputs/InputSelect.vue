<template>
  <div class="container-input">
    <label for="clients">Cliente </label>
    selectValue {{ selectValue }}
    <Dropdown
      :placeholder="placeholder"
      v-model="selectValue"
      :options="selectOptions"
      optionLabel="label"
      optionValue="value"
      class="md:w-14rem w-full"
      @change="updateValueAndEmitEvent"
      style="background: white; color: black"
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
    selectedCustomer: { type: String, default: "" },
    placeholder: { type: String, default: "" },
    message: { type: String, default: "" },
    error: { type: Boolean, default: true },
    required: { type: Boolean },
    labelInput: { type: String, default: "" },
    variant: { type: String, default: "input" },
    selectValueProp: { type: String, default: "" },
    Id: { type: String, default: "" },

    selectOptions: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },

  data() {
    return {
      selectValue: "",
      isValid: false,
      label: this.labelInput,
      selectedID: "",
    };
  },
  watch: {
    selectValueProp(value) {
      this.selectValue = value;
      this.setError();
      this.setEmit();
    },
    id(newVal) {
      this.selectedID = newVal;
    },
  },

  computed: {
    setStyle() {
      if (this.variant) return `input ${this.variant}`;
      return `input`;
    },
    showMessage() {
      this.setError();
      if (!this.selectValue.length) return;
      return this.validSelectedOption(this.selectValue) === true
        ? ""
        : this.validSelectedOption(this.selectValue);
    },
  },

  methods: {
    setEmit() {
      const isValidName = this.validSelectedOption(this.selectValue);
      const selectElement = document.getElementById("select");
      const optionSelected = selectElement.options[selectElement.selectedIndex];
      const customeridValue = optionSelected
        ? optionSelected.getAttribute("customerid")
        : this.customerID;

      this.$emit("isValidSelectedOption", {
        isValid: this.isValid,
        customerId: customeridValue,
      });
      this.$emit("setInputTextValueAfterPageLoaded", {
        value: this.selectValue,
        errorMessage: isValidName,
      });
    },
    updateValueAndEmitEvent(event) {
      this.setError();
      this.$emit("update:modelValue", this.selectValue);
      const isValidName = this.validSelectedOption(this.selectValue);
      this.$emit("validation", {
        value: this.selectValue,
        errorMessage: isValidName,
      });
      this.$emit("isValidSelectedOption", {
        isValid: this.isValid,
        value: event.value,
      });
    },

    setError() {
      const isValidSelectedOption = this.validSelectedOption(this.selectValue);
      typeof isValidSelectedOption === "boolean"
        ? (this.isValid = true)
        : (this.isValid = false);
    },

    validSelectedOption(name) {
      if (!name) return `*${this.selectValue} é obrigatório!`;
      const nameRegex = /^[A-ZÀ-Ú][a-zà-ú]+( [A-ZÀ-Ú][a-zà-ú]+)*$/;
      const isValid = nameRegex.test(name);
      if (!isValid) return `*${this.selectValue} Inválido`;
      return true;
    },
  },
};
</script>

<style scoped>
.container-input {
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
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
  top: 78px;
  right: 40px;
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
