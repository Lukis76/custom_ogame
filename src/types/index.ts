import { ChangeEvent, FormEvent } from "react";

export type TEventChange = (e: ChangeEvent<HTMLInputElement>) => void;
export type TEventSubmit = (e: FormEvent<HTMLFormElement>) => void;
