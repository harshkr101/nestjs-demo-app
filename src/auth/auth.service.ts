import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  login() {
    return 'Login works';
  }

  signup() {
    return 'Signup Works';
  }
}
