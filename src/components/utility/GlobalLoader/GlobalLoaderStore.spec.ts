import {beforeEach, describe, it, expect} from "vitest";
import {setActivePinia, createPinia} from "pinia";
import {useGlobalLoaderStore} from "@/components/utility/GlobalLoader/GlobalLoaderStore";

describe('GlobalLoaderStore', () => {
   beforeEach(() => {
       setActivePinia(createPinia());
   });

   it('default state', () => {
       const globalLoader = useGlobalLoaderStore();
       expect(globalLoader.isLoading).toBe(false);
   });

   it('should be loading', () => {
         const globalLoader = useGlobalLoaderStore();
         globalLoader.showLoader();
         expect(globalLoader.isLoading).toBe(true);
   });

    it('should be not loading', () => {
        const globalLoader = useGlobalLoaderStore();
        globalLoader.hideLoader();
        expect(globalLoader.isLoading).toBe(false);
    });

    it('should be loading after hideLoader', () => {
        const globalLoader = useGlobalLoaderStore();
        globalLoader.showLoader();
        expect(globalLoader.isLoading).toBe(true);
        globalLoader.hideLoader();
        expect(globalLoader.isLoading).toBe(false);
    });

    it('should be not loading after showLoader', () => {
        const globalLoader = useGlobalLoaderStore();
        globalLoader.hideLoader();
        expect(globalLoader.isLoading).toBe(false);
        globalLoader.showLoader();
        expect(globalLoader.isLoading).toBe(true)
    });
});