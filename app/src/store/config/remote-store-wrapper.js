/**
 * EXTERNAL DEPENDENCIES.
 */
import { proxy } from "comlink";

export default async (store) => {
    const subscribers = new Set();
    let latestState = await store.getState();

    store.subscribe(
        proxy(async () => {
            latestState = await store.getState();

            subscribers.forEach(fn => fn());
        })
    );

    return {
        getState: () => latestState,
        dispatch: action => store.dispatch(action),
        subscribe: listener => {
            subscribers.add(listener);

            return () => subscribers.delete(listener);
        },
        replaceReducer: () => {
            throw new Error("Can't transfer a function");
        }
    }
};