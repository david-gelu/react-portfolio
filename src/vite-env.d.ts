interface ImportMeta {
  glob: <T = { default: string }>(
    pattern: string
  ) => Record<string, () => Promise<T>>;
}