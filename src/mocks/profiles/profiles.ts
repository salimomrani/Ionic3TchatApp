import {Profile} from "../../models/profile/profile.interface";

const profileList:Profile[] = [
  {
    firstName : 'Salim',
    lastName:'Omrani',
    email : 'omrani_salim@outlook.fr',
    avatar : 'assets/imgs/avatar.png',
    dateOfBirth : new Date
  },
  {
    firstName : 'ofrlo',
    lastName:'Omrani',
    email : 'sdsdrf@outlook.fr',
    avatar : 'assets/imgs/avatar.png',
    dateOfBirth : new Date
  }
];

export const PROFILE_LIST = profileList;
