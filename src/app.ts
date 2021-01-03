import { Component, Vue } from "vue-property-decorator";

@Component
export default class AppComponent extends Vue {
  mounted() {
    console.log("mounted app");
  }
}
