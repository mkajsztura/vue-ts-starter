import { Component, Vue } from "vue-property-decorator";
import { UsersModule } from "../../store/users/users-store";

@Component
export default class UserDetailComponent extends Vue {
  get user() {
    return UsersModule.userById(this.$route.params.id);
  }
}
