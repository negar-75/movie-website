export type UserRegister = {
  username: string;
  password: string;
  repeatPassword?: string;
  email: string;
};

export type UserDataContext = {
  username: string;
  email: string;
};

export type UserContextApi<T> = {
  register: (user: T) => Promise<void>;
  userData: Partial<UserDataContext>;
};
