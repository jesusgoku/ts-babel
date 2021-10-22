import { add } from '@app/tools/math';
import { makeSortNumbersFn, makeSortStringsFn } from '@app/tools/sort';

console.log(add(1, 2, 3, 4, 5));

console.log([10, 3, 1, 2, 5, 4].sort(makeSortNumbersFn()));

console.log(['b', 'c', 'z', 'a'].sort(makeSortStringsFn()));
