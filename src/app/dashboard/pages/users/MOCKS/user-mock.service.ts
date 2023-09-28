import { user } from "../models";

 export class UserMockService {
    private users: user[] = [
        {
          id: 1,
          name: 'FAKE_NAME',
          surname: 'FAKE_SURNAME',
          email: 'FAKEEMAIL@gmail.com',
          password: 'FAKE PASSWORD',
        }, 
        
      ];
    
    getUsers() : user[] {
        return this.users
       }
 }