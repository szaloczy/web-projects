import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';

import { UsersService } from './users.service';
import { CreateUserDto, UserDetailsDto, UserNameDetailsDto } from './dto/user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly svc: UsersService) {}

  @Get()
  async findAll(): Promise<UserDetailsDto[]> {
    return this.svc.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<UserDetailsDto> {
    return this.svc.findOne(id);
  }

  @Get('findNames')
  async findNames (@Query() query: FindNamesQueryDTO): Promise<UserNameDetailsDto[]>{
    return this.svc.findNames(query);
  }

  @Post()
  async create(@Body() body: CreateUserDto): Promise<UserDetailsDto> {
    return this.svc.create(body);
  }
}
