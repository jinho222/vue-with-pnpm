# Vue with pnpm

- `~/Library/pnpm/store/v3` -> content-addressable store
- all depended packages are installed in `.pnpm`(hard-link).
- directly depended packages ares installed in `node_modules`. they refer to packages in `.pnpm`(soft-link).
- packages in `.pnpm` can depend on other packages in `.pnpm`. in this case, they use soft-link.
