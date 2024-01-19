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

export type UserContextApi = {
  register: (user:Object) => Promise<void>;
  userData: Partial<UserDataContext>;
};
