import { AuthGuard } from '@nestjs/passport';

export class rolesGuard extends AuthGuard('jwt') {
  constructor() {
    super();
  }
}
