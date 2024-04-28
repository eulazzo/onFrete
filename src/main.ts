import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import Lara from "./presets/lara";
import router from "./router";
import { createPinia } from "pinia";
const pinia = createPinia();

//Prime-vue components
import Panel from "primevue/panel";
import DataTable from "primevue/datatable";
import Tree from "primevue/tree";
import Dropdown from "primevue/dropdown";
import Card from "primevue/card";
import Column from "primevue/column";
import Row from "primevue/row";
import ColumnGroup from "primevue/columngroup";
import Paginator from "primevue/paginator";
import MultiSelect from "primevue/multiselect";
import InputText from "primevue/inputtext";
import InputNumber from "primevue/inputnumber";
import Calendar from "primevue/calendar";
import Button from "primevue/button";
import Checkbox from "primevue/checkbox";
import OverlayPanel from "primevue/overlaypanel";
import Divider from "primevue/divider";
import Dialog from "primevue/dialog";
import Slider from "primevue/slider";
import Tag from "primevue/tag";
import TriStateCheckbox from "primevue/triStateCheckbox";
import TabView from "primevue/tabview";
import TabPanel from "primevue/tabpanel";
import RadioButton from "primevue/radiobutton";

const app = createApp(App);
app.component("Panel", Panel);
app.component("RadioButton", RadioButton);
app.component("Panel", Calendar);
app.component("Dialog", Dialog);
app.component("Slider", Slider);
app.component("Tag", Tag);
app.component("TriStateCheckbox", TriStateCheckbox);

app.component("TabView", TabView);
app.component("TabPanel", TabPanel);
app.component("DataTable", DataTable);
app.component("Tree", Tree);
app.component("Dropdown", Dropdown);
app.component("Card", Card);
app.component("Row", Row);
app.component("Column", Column);
app.component("ColumnGroup", ColumnGroup);
app.component("Paginator", Paginator);
app.component("MultiSelect", MultiSelect);
app.component("InputText", InputText);
app.component("InputNumber", InputNumber);
app.component("Calendar", Calendar);
app.component("Button", Button);
app.component("Checkbox", Checkbox);
app.component("OverlayPanel", OverlayPanel);
app.component("Divider", Divider);

app.use(PrimeVue, {
  unstyled: true,
  pt: Lara,
});
app.use(pinia);
app.use(router);
app.mount("#app");
