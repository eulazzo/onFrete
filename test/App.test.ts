import { mount } from "@vue/test-utils";
import AppVue from "../src/App.vue";

test("Should mount component with title", async () => {
  const wrapper = mount(AppVue);
  expect(wrapper.get(".title").text()).toBe("Hello World!");
});
