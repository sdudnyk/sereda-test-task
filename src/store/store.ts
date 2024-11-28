import { proxy } from "valtio";
import { Store } from "../types";
import createInitialState from "./createInitialState";

export const store = proxy<Store>(createInitialState());
