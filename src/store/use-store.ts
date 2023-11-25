import create from "zustand";

type UseStoreType = {
  currentStep: number;
  formData: Record<string, any>;
  setFormData: (data: Record<string, any>) => void;
  nextStep: () => void;
  prevStep: () => void;
  resetStep: () => void;
};

const useStore = create<UseStoreType>((set) => ({
  currentStep: 1,
  formData: {},
  setFormData: (data) => set({ formData: { ...data } }),
  nextStep: () => set((state) => ({ currentStep: state.currentStep + 1 })),
  prevStep: () => set((state) => ({ currentStep: state.currentStep - 1 })),
  resetStep: () => set((state) => ({ currentStep: (state.currentStep = 1) })),
}));

export default useStore;
