import { Component, Vue } from "vue-property-decorator";
import { UsersModule } from "../../store/users/users-store";
import UserListComponent from "@/components/users-list/user-list.component.vue";
import UserListSimpleComponent from "@/components/users-list-simple/user-list-simple.component.vue";

@Component({
  components: {
    "user-list": UserListComponent,
    "user-list-simple": UserListSimpleComponent,
  },
})
export default class HomeComponent extends Vue {
  get users() {
    return UsersModule.users;
  }

  removeUser(index: number) {
    UsersModule.removeUser(index);
  }
}
