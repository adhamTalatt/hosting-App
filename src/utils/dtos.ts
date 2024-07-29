export interface CreateArtileDto {
  title: string;
  description: string;
}

export interface updateArtileDto {
  title?: string;
  description?: string;
}

export interface RegisterUserDto {
  username: string;
  email: string;
  password: string;
}

export interface LoginUserDto {
  email: string;
  password: string;
}

export interface UpdateUserDto {
  username?: string;
  email?: string;
  password?: string;
}
