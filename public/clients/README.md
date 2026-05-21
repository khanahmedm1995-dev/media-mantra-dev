# Client logo files (homepage marquee)

Place approved logo files here from the shared Drive (ask Pooja / brand for the pack).

## Naming

In `src/data/clients.ts`, add a line inside **`clientLogoFiles`** for each brand, pointing at the file you add here:

```ts
export const clientLogoFiles = {
  Sony: "/clients/sony.svg",
  // ...
};
```

The **object key** must match the string in `clientLogos` **exactly** (same spelling and punctuation). That list is kept in sync with the approved website content PDF (client names).

## File tips

- Prefer **SVG**; PNG with transparent background ok
- Tall logos: max height ~40px in layout; wide logos scale inside a fixed slot (~140×40px)
