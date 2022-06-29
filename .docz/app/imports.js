export const imports = {
  'docs/index.md': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "docs-index" */ 'docs/index.md'
    ),
  'src/Foo/index.md': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-foo-index" */ 'src/Foo/index.md'
    ),
  'src/Header/index.md': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-header-index" */ 'src/Header/index.md'
    ),
  'src/Button/index.md': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-button-index" */ 'src/Button/index.md'
    ),
}
