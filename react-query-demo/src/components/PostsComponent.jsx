import { useQuery } from "@tanstack/react-query";

async function fetchPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error("Network response was not ok");
  return res.json();
}

export default function PostsComponent() {
  const {
    data,
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
    dataUpdatedAt,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    // 🔑 Caching & Stale Options
    staleTime: 1000 * 60 * 1, // 1 min → data considered fresh
    cacheTime: 1000 * 60 * 5, // 5 mins in cache before GC
    refetchOnWindowFocus: true, // refetch when user focuses window
    keepPreviousData: true, // keep old data during refetch
  });

  if (isLoading) return <p>Loading posts…</p>;
  if (isError) return <p style={{ color: "red" }}>Error: {error.message}</p>;

  const updatedAt =
    dataUpdatedAt ? new Date(dataUpdatedAt).toLocaleTimeString() : "—";

  return (
    <div>
      <h2>Posts with React Query</h2>

      <button onClick={() => refetch()} disabled={isFetching}>
        {isFetching ? "Refetching…" : "Refetch now"}
      </button>
      <p>Last updated: {updatedAt}</p>

      <ul>
        {data.slice(0, 10).map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}
