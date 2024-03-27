import { Test, TestingModule } from '@nestjs/testing';
import { MockUsersService } from './users.service';

describe('UsersService', () => {
  let service: MockUsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MockUsersService],
    }).compile();

    service = module.get<MockUsersService>(MockUsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
