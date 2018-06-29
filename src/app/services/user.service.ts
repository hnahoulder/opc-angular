import {User} from '../models/User.models';
import {Subject} from 'rxjs/Subject';

export class UserService {
    private users: User[] = [];
    userSubject = new Subject<User []>();

    emitUsers() {
        this.userSubject.next(this.users.slice());
    }
}