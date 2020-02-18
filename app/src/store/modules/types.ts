/**
 * TYPES.
 */
import { IListing } from "models/Listing";
import { AuthState } from "./Authentication/types";

export interface AppState {
  auth: AuthState;
  error: any | null;
  loading: boolean;
  listings: [IListing] | [];
}
