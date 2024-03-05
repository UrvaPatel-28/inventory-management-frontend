import type { UserDepartment } from "./user-department.type"
import type { UserRole } from "./user-role.type";

export type UserData = {
    id:string,
    name:string,
    department : UserDepartment,
    role:UserRole,
    address:string,
    is_approved:boolean,    
    email:string
}