//resolver is used to populate the field with the correct data

import { Args, Int, Query, ResolveField, Resolver , Parent} from "@nestjs/graphql";
import { User } from "../models/User";
import { mockUsers } from "src/_mocks_/mockUsers";
import { UserSetting } from "../models/UserSetting";
import { mockUserSettings } from "src/_mocks_/mockUserSettings";

@Resolver(of => User)
export class UserResolver {
    @Query((returns) => User, {nullable: true})
    getUserById(@Args('id', {type: ()=> Int}) id: number) {
        return mockUsers.find(user => user.id === id);
    }

    @Query((returns) => [User])
    getAllUsers() {
        return mockUsers;
    }

    @ResolveField(returns => UserSetting, {name: 'settings', nullable: true})
    getUserSettings(@Parent() user:User){
        console.log(user)
        return mockUserSettings.find((setting) => setting.userId === user.id)
    }
}