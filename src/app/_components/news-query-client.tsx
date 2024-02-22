"use client";
import { QueryClientProvider } from "@tanstack/react-query";
import { NewsOutsideClient } from "./news-outside-client";
import { queryClient } from "@/lib/reactQuery";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function NewsQueryClient() {
  return (
    <QueryClientProvider client={queryClient}>
      <NewsOutsideClient />
    </QueryClientProvider>
  );
}

export default NewsQueryClient;
