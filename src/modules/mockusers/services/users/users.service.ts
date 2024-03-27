import { Injectable } from '@nestjs/common';
import { MockUser } from '../../schemas/user.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class MockUsersService {

    constructor(
        @InjectModel(MockUser) private mockUserModel: typeof MockUser
    ) {}

    async getAllMockUser(){
        return await this.mockUserModel.findAll();
    }

}
