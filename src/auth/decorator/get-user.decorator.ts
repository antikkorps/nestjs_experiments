import { createParamDecorator, ExecutionContext } from '@nestjs/common';

// Here I had created a custom decorator to call easily the user informations
export const GetUser = createParamDecorator(
  (data: string | undefined, ctx: ExecutionContext) => {
    const request: Express.Request = ctx.switchToHttp().getRequest();
    if (data) {
      return request.user[data];
    }
    return request.user;
  },
);
