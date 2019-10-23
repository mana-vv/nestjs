import { Injectable } from '@nestjs/common';
import { RolesDto } from './dto/roles.dto';

@Injectable()
export class RolesService {

    async findAll(page: number = 1) {
        return [];
    }

    async findOneById(id: string) {
        return new RolesDto();
    }

    async createRole(name: string) {
        return new RolesDto();
    }

    async updateRole(id: string, name: string) {
        return new RolesDto();
    }

    async deleteRole(id: string) {
        return true;
    }
}
