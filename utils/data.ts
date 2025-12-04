import { Children } from "react";
import { ImUser } from "react-icons/im";

export type Movie = {
  id: number;
  movieId?: number;
  alt: string;
  src: string;
  posterURL?: string;
  name?: string;
  rating?: number;
  description?: string;
  trailerURL?: string;
  reviewCount?: number;
};
interface IUser {
  id?: number;
}
export interface ILoginResponse {
  success?: boolean;
  message?: string;
  statusText?: string;
  data?: IUser;
}
export interface IChildren {
  children: React.ReactNode;
}

export const currentlyWatching: Movie[] = [
  { id: 1, alt: "component1", src: "/images/component1.png" },
  { id: 2, alt: "component2", src: "/images/component2.png" },
];

export const suggestedToWatch: Movie[] = [
  { id: 1, alt: "component3", src: "/images/component3.png" },
  { id: 2, alt: "component4", src: "/images/component4.png" },
  { id: 3, alt: "component5", src: "/images/component5.png" },
  { id: 4, alt: "component6", src: "/images/component6.png" },
];

export const previouslyWatched: Movie[] = [
  { id: 1, alt: "component7", src: "/images/component7.png" },
  { id: 2, alt: "component6", src: "/images/component6.png" },
  { id: 3, alt: "component5", src: "/images/component5.png" },
  { id: 4, alt: "component4", src: "/images/component4.png" },
  { id: 5, alt: "component3", src: "/images/component3.png" },
  { id: 6, alt: "component2", src: "/images/component2.png" },
  { id: 7, alt: "component1", src: "/images/component1.png" },
  { id: 8, alt: "component7", src: "/images/component7.png" },
  { id: 9, alt: "component6", src: "/images/component6.png" },
  { id: 10, alt: "component5", src: "/images/component5.png" },
  { id: 11, alt: "component4", src: "/images/component4.png" },
  { id: 12, alt: "component3", src: "/images/component3.png" },
  { id: 13, alt: "component2", src: "/images/component2.png" },
  { id: 14, alt: "component1", src: "/images/component1.png" },
];
export const dynamicSearchData: Movie[] = [
  { id: 1, alt: "component7", src: "/images/component7.png" },
  { id: 2, alt: "component6", src: "/images/component6.png" },
  { id: 3, alt: "component5", src: "/images/component5.png" },
  { id: 4, alt: "component4", src: "/images/component4.png" },
  { id: 5, alt: "component3", src: "/images/component3.png" },
  { id: 6, alt: "component2", src: "/images/component2.png" },
  { id: 7, alt: "component1", src: "/images/component1.png" },
  { id: 8, alt: "component7", src: "/images/component7.png" },
  { id: 9, alt: "component6", src: "/images/component6.png" },
  { id: 10, alt: "component5", src: "/images/component5.png" },
  { id: 11, alt: "component4", src: "/images/component4.png" },
  { id: 12, alt: "component3", src: "/images/component3.png" },
  { id: 13, alt: "component2", src: "/images/component2.png" },
  { id: 14, alt: "component1", src: "/images/component1.png" },
];
