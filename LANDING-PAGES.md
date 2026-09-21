# Landing pages

The website build now includes these independent pages:

| Address | Source |
| --- | --- |
| `/academy-01` | `shahdelganzoury/NextEra-Academy-Landing-Page-1`, commit `a6665f3809c49b62b6439ff5516353c4b0b9a02e` |
| `/vip` | `shahdelganzoury/NextEra-Education-VIP-Landing-Page`, commit `224d4ffe51af4b41398525c7aabc5d8f01f7d2d8` |

These are imported snapshots. Changes in the original repositories do not automatically update this website. Edit their copies under `artifacts/nextera-website/src/landing-pages/` or deliberately import later revisions.

The former `/academy-landing` address redirects to `/academy-01`, preserving query strings and fragments. Apache/LiteSpeed uses a permanent redirect; hosts serving root HTML use the JavaScript fallback.

## Build and preview

From the repository root:

```sh
pnpm install --frozen-lockfile
pnpm run typecheck
pnpm run build:website
pnpm --filter @workspace/nextera-website run serve --port 4173
```

The output directory remains `artifacts/nextera-website/dist`. It contains the main `index.html`, `academy-01/index.html`, `vip/index.html`, shared build assets, and isolated public images for each landing page.

The existing website package's build command also includes both landing pages. No dependencies or lockfile changes are needed.

The repository-wide `pnpm run build` additionally builds unrelated workspace projects. Local verification found that the existing `nextera-design-system` build requires `PORT` and fails when it is unset. Use the website-specific command for this static deployment.

## Hostinger deployment

The user confirmed the deployment branch is `main`, the build command is `pnpm run build:website`, and the output directory is `artifacts/nextera-website/dist` relative to the repository root.

If Hostinger's project root is the repository root, use:

- Build command: `pnpm run build:website`
- Output directory: `artifacts/nextera-website/dist`

If its project root is already `artifacts/nextera-website`, the package's `pnpm run build` produces `dist` relative to that folder. Dependencies must still be installed from the workspace root.

Deploy the complete website output together, including `.htaccess` when using Apache/LiteSpeed. Its two explicit landing-page rules precede the existing SPA fallback. The main entry also selects the correct page when a static host serves root HTML at `/academy-01` or `/vip`. Query strings are preserved. Trailing-slash and non-trailing-slash addresses both work in the local production preview.

For correct initial social metadata, the host should serve each landing page's own HTML. The root-HTML fallback updates metadata in JavaScript; social crawlers may not execute it.

## Scope and verification

- The original `/academy` page and main website components are preserved.
- Each page loads its own styling; landing-page images use namespaced paths to avoid replacing the website's logos.
- Original content, offers, theme controls, and Google Apps Script form destinations are preserved. No navigation links were added to the main site.
- No real application was submitted during testing. The original forms use `no-cors` and show success without verifying server acceptance; delivery to their receiving systems remains unverified.
- Both source pages contain Arabic translations but currently expose no language-switch control; that source behavior is preserved.
- Review desktop/mobile rendering, theme controls, direct navigation, refreshes, and existing website routes in the local preview before publishing.

Production publishing uses the `main` branch. Verify the live pages after Hostinger completes its deployment.
