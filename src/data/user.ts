export type User = { email: string; password: string };
const users: User[] = [
  {
    email: "admin@example.com",
    password: "123456789",
  },
  {
    email: "mohamed@example.com",
    password: "111111111",
  },
  {
    email: "alaa@example.com",
    password: "222222222",
  },
];
export const getuserbyemail = (email: string): User | undefined => {
  const found = users.find((user) => user.email === email);
  return found;
};
