
declare module '*/launches.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const Launches: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/nextLaunch.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const NextLaunch: DocumentNode;

  export default defaultDocument;
}
    