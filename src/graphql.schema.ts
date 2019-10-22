
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export abstract class IMutation {
    abstract createRole(name: string): Role | Promise<Role>;

    abstract updateRole(id: string, name: string): Role | Promise<Role>;

    abstract deleteRole(id: string): boolean | Promise<boolean>;
}

export abstract class IQuery {
    abstract roles(): Role[] | Promise<Role[]>;

    abstract role(id: string): Role | Promise<Role>;

    abstract todos(): Todo[] | Promise<Todo[]>;
}

export class Role {
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
}

export class Todo {
    id: string;
    title: string;
    description?: string;
}
