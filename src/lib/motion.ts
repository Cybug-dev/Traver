// Computed custom properties can be minified from 220ms to .22s in production.
// Keep the conversion shared so every component uses the same timing tokens.
export function readMotionTokens() {
  const styles = getComputedStyle(document.documentElement);
  const seconds = (token: string) => {
    const raw = styles.getPropertyValue(token).trim();
    const value = Number.parseFloat(raw);
    return raw.endsWith("ms") ? value / 1000 : value;
  };
  const curve = styles.getPropertyValue("--ease-standard").match(/[\d.]+/g);

  return {
    fast: seconds("--duration-fast"),
    normal: seconds("--duration-normal"),
    slow: seconds("--duration-slow"),
    ease: (curve?.map(Number) ?? [0.2, 0, 0, 1]) as [number, number, number, number],
  };
}
