import { create } from "zustand";

type LogsState = {
  logs: string[];

  handleClearLogs: () => void;
  handleAddLog: (log: string) => void;
};

export const useLogsStore = create<LogsState>((set, get) => ({
  logs: [],

  handleClearLogs: () => set({ logs: [] }),

  handleAddLog: (log: string) => set({ logs: [...get().logs, log] }),
}));
