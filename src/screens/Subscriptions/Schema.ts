import {number, string, array, object, boolean} from 'yup';

export interface MaidSubscriptionInterface {
  bathroomCount: number | undefined;
  budget: number | undefined;
  gender: string;
  peopleCount: number | undefined;
  preferredLanguage: string[];
  roomCount: number | undefined;
  timeOfTheDay: string[];
  washUtensils: boolean;
  weekday: string[];
}

export const MaidSubscriptionSchema = object({
  bathroomCount: number().positive().integer().required(),
  budget: number().positive().required(),
  gender: string().required(),
  peopleCount: number().positive().integer().required(),
  preferredLanguage: array(string()).min(2).required(),
  roomCount: number().positive().integer().required(),
  timeOfTheDay: array(string()).min(1).required(),
  washUtensils: boolean(),
  // TODO check if one day holiday is required to be mandated
  weekday: array(string()).min(1).required(),
}).required();

export interface CookSubscriptionInterface {
  budget: number | undefined;
  gender: string;
  peopleCount: number | undefined;
  preferredLanguage: string[];
  timeOfTheDay: string[];
  washUtensils: boolean;
  weekday: string[];
}

export const CookSubscriptionSchema = object({
  budget: number().positive().required(),
  gender: string().required(),
  peopleCount: number().positive().integer().required(),
  preferredLanguage: array(string()).min(2).required(),
  timeOfTheDay: array(string()).min(1).required(),
  washUtensils: boolean(),
  // TODO check if one day holiday is required to be mandated
  weekday: array(string()).min(1).required(),
}).required();

export interface TutorSubscriptionInterface {
  budget: number | undefined;
  gender: string;
  preferredLanguage: string[];
  studentsCount: number | undefined;
  studentsGrade: string;
  timeOfTheDay: string[];
  weekday: string[];
}

export const TutorSubscriptionSchema = object({
  budget: number().positive().required(),
  gender: string().required(),
  preferredLanguage: array(string()).min(1).required(),
  studentsCount: number().positive().integer().required(),
  studentsGrade: string().required(),
  timeOfTheDay: array(string()).min(1).max(2).required(),
  weekday: array(string()).min(1).max(6).required(),
}).required();

export interface NannySubscriptionInterface {
  budget: number | undefined;
  gender: string;
  preferredLanguage: string[];
  childsAge: number | undefined;
  timeOfTheDay: string[];
  weekday: string[];
}

export const NannySubscriptionSchema = object({
  budget: number().positive().required(),
  gender: string().required(),
  preferredLanguage: array(string()).min(1).required(),
  childsAge: number().positive().integer().required(),
  timeOfTheDay: array(string()).min(1).max(2).required(),
  weekday: array(string()).min(1).max(6).required(),
}).required();

export interface NurseSubscriptionInterface {
  budget: number | undefined;
  gender: string;
  preferredLanguage: string[];
  patientsAge: number | undefined;
  timeOfTheDay: string[];
  weekday: string[];
}

export const NurseSubscriptionSchema = object({
  budget: number().positive().required(),
  gender: string().required(),
  preferredLanguage: array(string()).min(1).required(),
  // Patients count needs to be added
  patientsAge: number().positive().integer().required(),
  timeOfTheDay: array(string()).min(1).max(2).required(),
  weekday: array(string()).min(1).max(6).required(),
}).required();

export interface WaterCanSubscriptionInterface {
  budget: number | undefined;
  repeat: string;
  tankerSize?: string;
  timeOfTheDay: string[];
  typeOfSupply: string;
  weekday?: string[];
}

export const WaterCanSubscriptionSchema = object({
  budget: number().positive().required(),
  typeOfSupply: string().required(),
  tankerSize: string().when(['typeOfSupply'], (typeOfSupply, schema) =>
    typeOfSupply === 'tanker' ? schema.required() : schema,
  ),
  repeat: string().required(),
  weekday: array(string())
    .min(1)
    .max(6)
    .when(['repeat'], (repeat, schema) =>
      repeat === 'weekly' ? schema.required() : schema,
    ),
  timeOfTheDay: array(string()).min(1).max(2).required(),
}).required();

export interface GarbageCollectionInterface {
  budget: number | undefined;
  dryGarbage: string[];
  gender: string;
  otherGarbage: string[];
  preferredLanguage: string[];
  timeOfTheDay: string[];
  wetGarbage: string[];
}

export const GarbageCollectionSchema = object({
  budget: number().positive().required(),
  dryGarbage: array(string()).min(1).required(),
  gender: string().required(),
  otherGarbage: array(string()),
  preferredLanguage: array(string()).min(1).required(),
  timeOfTheDay: array(string()).min(1).max(2).required(),
  wetGarbage: array(string()).min(1).required(),
}).required();
