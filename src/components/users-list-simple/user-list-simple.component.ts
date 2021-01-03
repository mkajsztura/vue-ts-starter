import { Component, Vue, Prop } from "vue-property-decorator";
import { User } from "../../store/users/users-store";

@Component
export default class UserListSimpleComponent extends Vue {
  @Prop({
    default: []
  }) users: User[];
}
