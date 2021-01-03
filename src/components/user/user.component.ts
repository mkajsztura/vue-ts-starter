import { Component, Vue, Prop } from "vue-property-decorator";
import { User } from "@/store/users/users-store";
import { UsersModule } from "../../store/users/users-store";

@Component
export default class UserComponent extends Vue {
  @Prop() user: User;
  @Prop() userIndex: number
  isEditMode = false;
  
  removeUser() {
    UsersModule.removeUser(this.userIndex)
  }

  updateUser(property: string, newValue: string) {
    const payload = {
      property,
      userIndex: this.userIndex,
      newValue
    };

    UsersModule.updateUser(payload);
  }
}
