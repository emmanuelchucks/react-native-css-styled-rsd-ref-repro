# react-native-css styled + react-strict-dom TypeScript repro

This reproduces a TypeScript performance issue when wrapping a React Strict DOM component with `react-native-css`'s `styled()`.

## Repro

```bash
npm install
npm run typecheck
```

## Expected

TypeScript finishes typechecking.

## Actual

TypeScript hangs or takes an extremely long time.

The issue appears to come from `DotNotation<ComponentProps<C>>` walking through the component's `ref` prop:

```ts
ref?: React.Ref<HTMLDivElement>
```

That causes TypeScript to recursively expand large DOM element types.
