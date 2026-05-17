declare module '*.css' {
  const content: { [classname: string]: string };
  export default content;
}

declare namespace NodeJS {
  interface ProcessEnv {
    readonly REACT_APP_API_BASE_URL: string;
  }
}

declare var process: {
  env: NodeJS.ProcessEnv;
};
