# BuiltIT_UGC

## Installation

npm install uuid

npm install react-hook-form

npm i react-icons

npm i next-auth

npm i uppy

## References

https://nextjs.org/docs/app/getting-started/installation

https://supabase.com/docs/guides/getting-started/quickstarts/nextjs

https://uppy.io/docs/quick-start/

https://github.com/ColeBlender/supabase-storage-tutorial

https://github.com/coopercodes/ReactSupabaseVideoUpload

https://github.com/DhruvRekhawat/captain

## Challanges & solutions

- prevents the opening site to mess with the opener via JavaScript

```typescript
<rel = "noreferrer noopener">
```

- Argument of type ‘() => Promise’ is not assignable to parameter of type ‘EffectCallback’. Type ‘Promise’ is not assignable to type ‘void | (() => void)

- Define an async function inside the useEffect hook

```typescript
const fetchUser = async () => {}
```
