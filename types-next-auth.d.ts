import type { DefaultSession } from "next-auth";
declare module "next-auth" {
  interface Session {
    user?: DefaultSession["user"] & {
      role?: "Admin";
    };
  }
  interface User {
    role?: "Admin";
  }
}
declare module "next-auth/jwt" {
  interface JWT {
    role?: "Admin";
  }
}
