/// <reference types="vite/client" />
interface ImportMeta {
  glob: <T = { default: string }>(
    pattern: string
  ) => Record<string, () => Promise<T>>;
}

declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.sass' {
  const content: { [className: string]: string };
  export default content;
}