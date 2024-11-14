/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly FATHOM_SITE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
