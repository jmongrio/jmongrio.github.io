import { Responsability } from "./responsabilities";

export interface Experience {
    company: string;
    position: string;
    yearStart: number;
    yearFinish: number;
    responsabilities: Responsability[];
}
