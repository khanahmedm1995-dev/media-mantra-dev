# Client logo files (homepage marquee)

Approved raster pack lives here as **`logo-01.png` … `logo-29.png`**.

## How mapping works

In **`src/data/clients.ts`**, `clientLogoFiles` assigns those files to the **first 29 entries** of `clientLogos` in **PDF order** (same order as the marquee):

| Slot file       | Brand (from PDF list, position 1-based) |
|-----------------|-----------------------------------------|
| `logo-01.png`   | 1 — Sony                                |
| `logo-02.png`   | 2 — BOAT                                |
| …               | …                                       |
| `logo-29.png`   | 29 — Eastman Energy Ltd                 |

Clients **after** slot 29 still appear in the marquee as **text** until you add more files and extend the mapping.

If any raster is under the wrong name, **rename swap** the PNG files (`logo-NN.png`) — keys in code stay tied to PDF spelling.

## File tips

- Prefer **SVG** when brand supplies it; PNG ok (transparent background reads best on the cream marquee band).
- Layout holds logos in roughly **140 × 40 px** slots (`object-contain`).
