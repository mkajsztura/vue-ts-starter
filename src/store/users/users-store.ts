import {
  Module,
  VuexModule,
  getModule,
  Mutation,
} from "vuex-module-decorators";
import store from "../root-store";

export enum Gender {
  MALE = "male",
  FEMALE = "female",
}

export interface User {
  id: string;
  fullName: string;
  gender: Gender;
}

interface UsersState {
  users: User[];
}

@Module({
  namespaced: true,
  name: "UsersStateModule",
  dynamic: true,
  store,
})
class UsersStateModule extends VuexModule implements UsersState {
  users: User[] = require("./users-mock");

  get male(): User[] {
    return this.users.filter(user => user.gender === Gender.MALE);
  }

  get female(): User[] {
    return this.users.filter(user => user.gender === Gender.FEMALE);
  }

  @Mutation
  removeUser(indexToRemove: number) {
    this.users = this.users.filter((user, index) => index !== indexToRemove);
  }

  @Mutation
  updateUser(payload: {
    property: string;
    userIndex: number;
    newValue: string;
  }) {
    this.users = this.users.map((user, index) => {
      return index === payload.userIndex
        ? { ...user, [payload.property]: payload.newValue }
        : user;
    });
    console.log(this.users);
  }
}

export const UsersModule = getModule(UsersStateModule);
