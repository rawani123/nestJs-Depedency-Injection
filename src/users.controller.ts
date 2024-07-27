import { Controller, Get, Param, Query,Headers, Body, Post, Inject } from '@nestjs/common';
import { UserStore } from './user.store';

// @Controller('/users')
// export class UsersController{
//     @Post('/profile')
//     getUsers(@Body() requestData: Record<string,any>){
//         console.log(requestData)
//         return 'All Users';
//     }
// }

@Controller()
export class UsersController{
    constructor(@Inject(UserStore) private store:any){
        console.log(this.store)
    }
}