//resolver is used to populate the field with the correct data

import { Args, Int, Query, ResolveField, Resolver , Parent, Mutation} from "@nestjs/graphql";
import { User } from "../models/User";
import { mockUsers } from "src/_mocks_/mockUsers";
import { UserSetting } from "../models/UserSetting";
import { mockUserSettings } from "src/_mocks_/mockUserSettings";
import { CreateUserInput } from "../utils/CreateUserInput";

export let incrementalId = 3;

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

    //this is useful if you don't use relational database
    @ResolveField(returns => UserSetting, {name: 'settings', nullable: true})
    getUserSettings(@Parent() user:User){
        console.log(user)
        return mockUserSettings.find((setting) => setting.userId === user.id)
    }
    //mutation
    @Mutation(returns => User)
    createUser(
        @Args('createUserData') createUserData: CreateUserInput)
    {
        const {username, displayName} = createUserData
        const newUser = {username, displayName, id: ++incrementalId}
   
        mockUsers.push(newUser)
        return newUser

    }
}