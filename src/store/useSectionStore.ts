import { create } from "zustand";

interface SectionStore {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const useSectionStore = create<SectionStore>((set) => ({
  activeSection: "home",
  setActiveSection: (section) => set({ activeSection: section }),
}));

export default useSectionStore;
