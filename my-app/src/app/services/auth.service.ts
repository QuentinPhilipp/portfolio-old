import { UsersComponent} from '../users/users.component';

export class AuthService {

  user:UsersComponent;
  isAuth = false;

  signIn(user,pwd) {
    return new Promise(
      (resolve, reject) => {
        setTimeout(
          () => {
            if (user === "admin" && pwd ==="admin")
            {
                this.isAuth = true;
                // user.rule = "admin";
            }
            else if (user === "user" && pwd ==="user")
            {
              this.isAuth = true;
              // user.rule = "user";
            }
            resolve(true);
          }, 500
        );
      }
    );
  }

  signOut() {
    this.isAuth = false;
  }
}
