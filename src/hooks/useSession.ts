"use client";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useSession() {
  const { data, error } = useSWR("/api/session", fetcher);
  return {
    user: data?.user,
    token: data?.token,
    isLoading: !error && !data,
    isError: error,
  };
}
