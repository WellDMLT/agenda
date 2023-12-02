import { create } from "zustand";

type UseStoreType = {
  currentStep: number;
  formData: Record<string, any>;
  active: boolean;
  setFormData: (data: Record<string, any>) => void;
  nextStep: () => void;
  prevStep: () => void;
  resetStep: () => void;
  setActive: (data: boolean) => void;
};

const useStore = create<UseStoreType>((set) => ({
  currentStep: 1,
  formData: {},
  active: true,
  setFormData: (data) => set({ formData: { ...data } }),
  nextStep: () => set((state) => ({ currentStep: state.currentStep + 1 })),
  prevStep: () => set((state) => ({ currentStep: state.currentStep - 1 })),
  resetStep: () => set((state) => ({ currentStep: (state.currentStep = 1) })),
  setActive: () => set((state) => ({ active: !state.active })),
}));

export default useStore;
