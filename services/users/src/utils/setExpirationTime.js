/**
 * EXTERNAL DEPENDENCIES.
 */
import { addHours } from "date-fns";

const setExpirationTime = expiryTime => addHours(new Date(), expiryTime);

export default setExpirationTime;
