import { useState, useEffect, useCallback } from 'react';

export default function useMediaQuery(query) {
  const getMatches = useCallback(
    () => typeof window !== 'undefined' && window.matchMedia(query).matches,
    [query]
  );

  const [matches, setMatches] = useState(getMatches);

  useEffect(() => {
    const media = window.matchMedia(query);
    const handler = () => setMatches(media.matches);
    media.addEventListener('change', handler);
    return () => media.removeEventListener('change', handler);
  }, [query]);

  return matches;
}
