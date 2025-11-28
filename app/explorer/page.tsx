"use client";

import { JSX, useEffect, useState } from "react";

type Post = {
  id: number;
  title: string;
  body: string;
};

export default function ExplorerPage(): JSX.Element {
  const [posts, setPosts] = useState<Post[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [debounced, setDebounced] = useState("");
  const [showCount, setShowCount] = useState(12);

  useEffect(() => {
    const id = setTimeout(() => setDebounced(query.trim()), 300);
    return () => clearTimeout(id);
  }, [query]);

  const load = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = (await res.json()) as Post[];
      setPosts(data.slice(0, 50));
    } catch (err: any) {
      setError(err?.message || "Unknown error");
      setPosts(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  // client-side filter by title
  const filtered = (posts || []).filter((p) =>
    p.title.toLowerCase().includes(debounced.toLowerCase())
  );

  const visible = filtered.slice(0, showCount);

  return (
    <div className="min-h-screen bg-linear-to-b from-[#030712] to-[#06102a] text-white relative overflow-hidden">
      <div className="container mx-auto px-6 py-24 relative z-10">
        {/* Header + Search */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-yellow-300 to-yellow-400">
              Explorer — Public Posts
            </h1>
            <p className="text-slate-400 mt-2">
              Browse posts — loading, error & empty states included.
            </p>
          </div>

          <div className="w-full md:w-80 relative">
            <svg
              className="absolute left-3 top-3 text-slate-500"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M21 21l-4.35-4.35"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle
                cx="11"
                cy="11"
                r="6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <input
              type="search"
              aria-label="Search posts"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setShowCount(12);
              }}
              placeholder="Search by title..."
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#071022] border border-slate-700 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
            />
            {debounced && (
              <button
                onClick={() => {
                  setQuery("");
                  setDebounced("");
                }}
                className="absolute right-2 top-2/4 -translate-y-2/4 px-2 py-1 text-sm rounded-md bg-slate-800/60 hover:bg-slate-700 transition"
                aria-label="Clear search"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* STATES */}
        {/* Loading skeleton */}
        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="rounded-xl bg-slate-900/50 p-5 min-h-40">
                <div className="h-6 w-3/4 bg-slate-800 rounded mb-4" />
                <div className="h-3 w-full bg-slate-800 rounded mb-2" />
                <div className="h-3 w-5/6 bg-slate-800 rounded" />
              </div>
            ))}
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="bg-red-900/30 border border-red-700 rounded-xl p-6 flex flex-col md:flex-row md:items-center gap-4">
            <div className="flex-none">
              <div className="w-12 h-12 rounded-full bg-red-700/40 flex items-center justify-center text-red-100 text-lg">
                !
              </div>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-red-200">
                Failed to load posts
              </h3>
              <p className="text-red-300 mt-1">
                There was an error fetching data:{" "}
                <span className="font-mono text-sm">{error}</span>
              </p>
              <div className="mt-3">
                <button
                  onClick={load}
                  className="px-4 py-2 bg-yellow-300 text-black rounded-lg font-semibold hover:bg-yellow-400"
                >
                  Retry
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Empty API (no posts) */}
        {!loading && !error && posts && posts.length === 0 && (
          <div className="rounded-xl border border-slate-800 p-8 text-center">
            <div className="text-4xl">📭</div>
            <h3 className="mt-4 font-semibold text-lg">No posts available</h3>
            <p className="text-slate-400 mt-2">
              The API returned an empty result. Try again later or refresh.
            </p>
            <div className="mt-4">
              <button
                onClick={load}
                className="px-4 py-2 bg-yellow-300 text-black rounded-lg font-semibold hover:bg-yellow-400"
              >
                Reload
              </button>
            </div>
          </div>
        )}

        {/* No results after search */}
        {!loading && !error && posts && filtered.length === 0 && (
          <div className="rounded-xl border border-slate-800 p-8 text-center">
            <div className="text-4xl">🔎</div>
            <h3 className="mt-4 font-semibold text-lg">No matches</h3>
            <p className="text-slate-400 mt-2">
              We couldn't find posts that match your search.
            </p>
            <div className="mt-4 flex items-center justify-center gap-3">
              <button
                onClick={() => {
                  setQuery("");
                  setDebounced("");
                }}
                className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm hover:bg-slate-700"
              >
                Clear search
              </button>
              <button
                onClick={load}
                className="px-4 py-2 bg-yellow-300 text-black rounded-lg font-semibold hover:bg-yellow-400"
              >
                Reload posts
              </button>
            </div>
          </div>
        )}

        {/* Posts grid */}
        {!loading && !error && posts && filtered.length > 0 && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
              {visible.map((p) => (
                <article
                  key={p.id}
                  className="group relative bg-[#071427]/60 border border-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-yellow-300/20 transition transform hover:-translate-y-1"
                >
                  <div className="text-sm text-slate-400 mb-2">
                    Post • #{p.id}
                  </div>
                  <h3 className="text-lg font-semibold text-yellow-300 mb-2 line-clamp-2">
                    {p.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed line-clamp-4">
                    {p.body}
                  </p>

                  <div className="absolute right-3 top-3 opacity-0 group-hover:opacity-100 transition">
                    <button className="text-slate-400 bg-slate-800/30 px-2 py-1 rounded-md text-xs">
                      Open
                    </button>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="text-xs text-slate-500">Demo data</div>
                    <div className="text-xs text-slate-500">
                      {Math.min(p.id % 100, 99)} likes
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Load more */}
            {showCount < filtered.length && (
              <div className="mt-8 flex justify-center">
                <button
                  onClick={() => setShowCount((s) => s + 12)}
                  className="px-5 py-2 rounded-full bg-yellow-300 text-black font-semibold hover:bg-yellow-400 transition"
                >
                  Load more
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
