# paas-sample-react

Minimal **Vite + React** app for end-to-end testing the `paas` build &
serve pipeline.

## What this proves

Push this repo to a GitHub branch the `paas` GitHub App is installed on.
A successful deploy proves:

- Repo clone via the cloner initContainer worked.
- `paas` auto-detect saw `"vite"` in `package.json` and emitted the
  multi-stage Dockerfile (Node build → nginx serve).
- Kaniko build succeeded inside the cluster.
- Image pushed to the in-cluster registry.
- Deployment rolled out and the pod is serving on `:8080`.
- Ingress + DNS + cert resolved.

You should see a ticking timestamp in the browser under the **REACT**
badge — that's React mounted client-side, so the bundled JS shipped
correctly.

## Local dev

```bash
npm install
npm run dev     # http://localhost:5173
npm run build   # → dist/
```
