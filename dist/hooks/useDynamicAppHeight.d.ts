import { LegacyRef } from 'react';
/**
 * Hook to dynamically the app height based on the size of a component.
 *
 * Use the return value as a ref on the component you want to base the app
 * height on.
 *
 * @returns {function}
 */
export declare const useDynamicAppHeight: (maxHeight: number | undefined) => LegacyRef<any>;
export default useDynamicAppHeight;
