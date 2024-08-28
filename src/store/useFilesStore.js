import { create } from "zustand";
import filesApiClient from "../src/api/axiosConfig";

export const useFilesStore = create((set) => ({
  files: [],
  filesLoading: false,
  getFiles: async () => {
    try {
      set(() => ({
        filesLoading: true,
      }));
      const resp = await filesApiClient.get("/files/data");
      set(() => ({
        files: resp.data,
      }));
    } catch (error) {
      console.error(error);
    } finally {
      set(() => ({
        filesLoading: false,
      }));
    }
  },
}));
