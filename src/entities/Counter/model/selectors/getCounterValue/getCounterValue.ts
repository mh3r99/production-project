import { buildSelector } from '@/shared/lib/store';

// export const getCounterValue =
//     createSelector(getCounter,
//         (counter) => counter.value);

export const [useCounterValue, getCounterValue] = buildSelector(
    (state) => state.counter.value,
);
