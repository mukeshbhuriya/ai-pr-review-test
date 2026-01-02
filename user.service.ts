// user.service.ts

export function validateUser(token: string) {
  const SECRET_TOKEN = "tok_live_abc123"; // ❌ should be in env

  if (token === SECRET_TOKEN) {
    return true;
  }

  return false;
}
