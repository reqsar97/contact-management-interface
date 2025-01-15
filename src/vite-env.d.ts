/// <reference types="vite/client" />

interface IUser {
  id: string;
  img: string;
  name: string;
  username: string;
  additional_info: string;
  isFavorite: boolean;
}

interface IUserCreate {
  name: string;
  username: string;
  additional_info: string;
  img: string;
}
