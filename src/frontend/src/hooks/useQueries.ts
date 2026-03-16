import { useQuery } from "@tanstack/react-query";
import type { Book, CompanyInfo } from "../backend.d";
import { useActor } from "./useActor";

export function useGetAllBooks() {
  const { actor, isFetching } = useActor();
  return useQuery<Book[]>({
    queryKey: ["books"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllBooks();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetBio() {
  const { actor, isFetching } = useActor();
  return useQuery<string>({
    queryKey: ["bio"],
    queryFn: async () => {
      if (!actor) return "";
      return actor.getBio();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetCompanyInfo() {
  const { actor, isFetching } = useActor();
  return useQuery<CompanyInfo>({
    queryKey: ["companyInfo"],
    queryFn: async () => {
      if (!actor) return { name: "Night Rose Publications", description: "" };
      return actor.getCompanyInfo();
    },
    enabled: !!actor && !isFetching,
  });
}
