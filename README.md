# Operator-Grade Lite

The free evaluation slice of [Operator-Grade](https://operator-grade.design), a tactical and critical-systems design system for defense, security and critical-infrastructure interfaces.

![Operator-Grade, three modes](https://operator-grade.design/og-cover.png)

## What's in this Lite kit

- 3 components: Button, StatusIndicator, Alert.
- 19 tactical icons (line-style, original artwork).
- Token JSON source, trimmed to the tokens these components use, in Night-NVG mode only.
- One example screen in Night-NVG mode showing the components together.

Every threat and status cue pairs color with a second signal (shape, glyph, or text).
Strip the color and the meaning still reads. This rule holds across the full kit and
is visible in the example screen.

## What is NOT here

This is a deliberately small slice. It does not include:

- The other 24 components in the full kit (27 total).
- The remaining 121 icons (140 total in the full registry).
- The full token foundation (286 tokens; Lite ships the subset these components read).
- The Figma library (variables, components, and the mirrored core component set).
- Day and Mono theme modes (Lite ships Night-NVG only).
- RTL layout support and bidi-safe tactical data formatting.
- The MIL-STD-1472 mapping spec.

## Run it

```
npm install
npm run dev
```

Then open the printed local URL. To produce a production build:

```
npm run build
```

## See the full system

| | |
|---|---|
| Live demo | https://demo.operator-grade.design |
| Docs | https://docs.operator-grade.design |
| Free Figma teaser | https://www.figma.com/community/file/1657010081058319993 |
| Free palette + glyph downloads | https://operator-grade.design/free/ |
| npm (EULA-licensed) | [`@operatorgrade/react`](https://www.npmjs.com/package/@operatorgrade/react), [`@operatorgrade/tokens`](https://www.npmjs.com/package/@operatorgrade/tokens), [`@operatorgrade/cli`](https://www.npmjs.com/package/@operatorgrade/cli), [`@operatorgrade/mcp`](https://www.npmjs.com/package/@operatorgrade/mcp) |
| Pricing | https://operator-grade.design/pricing/ |

Founding-customer code **FOUNDING25** takes 25% off any tier, first 10 buyers.

## License

Evaluation and personal, non-commercial use only. See `LICENSE`.
For a commercial license, see https://operator-grade.design/pricing/
