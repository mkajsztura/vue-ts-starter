import { Component, Vue } from "vue-property-decorator";
import { UsersModule, Gender } from "../../store/users/users-store";
import UserComponent from "../user/user.component.vue";

@Component({
  components: {
    "app-user": UserComponent,
  },
})
export default class UserListComponent extends Vue {
  selectedGender = "";
  readonly Gender = Gender;

  get users() {
    switch (this.selectedGender) {
      case Gender.MALE: {
        return UsersModule.male;
      }
      case Gender.FEMALE: {
        return UsersModule.female;
      }
      default:
        return UsersModule.users;
    }
  }

  mounted() {
    console.log("this.users:::", this.users);
  }
}
