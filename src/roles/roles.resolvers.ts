import { ParseIntPipe, UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { RolesService } from './roles.service';
import { RolesDto } from './dto/roles.dto';
const pubSub = new PubSub();

@Resolver('Role')
export class RolesResolvers {
  constructor(private readonly rolesService: RolesService) {}

  @Query('roles')
  async getRoles(): Promise<RolesDto[]> {
    return await this.rolesService.findAll();
  }

  @Query('role')
  async findOneById(@Args('id') id: string): Promise<RolesDto> {
    return await this.rolesService.findOneById(id);
  }

  @Mutation('createRole')
  async createRole(@Args('name') name: string): Promise<RolesDto> {
    return await this.rolesService.createRole(name);
  }

  @Mutation('updateRole')
  async updateRole(
    @Args('id') id: string,
    @Args('name') name: string,
  ): Promise<RolesDto> {
    return await this.rolesService.updateRole(id, name);
  }

  @Mutation('deleteRole')
  async deleteRole(@Args('id') id: string): Promise<boolean> {
    return await this.rolesService.deleteRole(id);
  }
}