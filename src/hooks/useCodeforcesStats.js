import { useEffect, useState } from "react";

// Codeforces exposes a public, CORS-friendly API — no key required.
// Docs: https://codeforces.com/apiHelp/methods#user.info
const CF_API = "https://codeforces.com/api/user.info?handles=";

// Simple in-memory cache so switching tabs / re-renders don't refetch.
const cache = new Map();

export function useCodeforcesStats(handle) {
  const [data, setData] = useState(() => cache.get(handle) || null);
  const [status, setStatus] = useState(cache.has(handle) ? "success" : "idle");

  useEffect(() => {
    if (!handle) {
      setStatus("error");
      return;
    }

    if (cache.has(handle)) {
      setData(cache.get(handle));
      setStatus("success");
      return;
    }

    let cancelled = false;
    setStatus("loading");

    fetch(`${CF_API}${encodeURIComponent(handle)}`)
      .then((res) => {
        if (!res.ok) throw new Error("Codeforces API request failed");
        return res.json();
      })
      .then((json) => {
        if (cancelled) return;
        if (json.status !== "OK" || !json.result?.[0]) {
          throw new Error("Unexpected Codeforces API response");
        }
        const user = json.result[0];
        const result = {
          rating: user.rating ?? null,
          maxRating: user.maxRating ?? null,
          rank: user.rank ?? null,
          maxRank: user.maxRank ?? null,
        };
        cache.set(handle, result);
        setData(result);
        setStatus("success");
      })
      .catch(() => {
        if (!cancelled) setStatus("error");
      });

    return () => {
      cancelled = true;
    };
  }, [handle]);

  return { data, status };
}