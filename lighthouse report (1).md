[56](#page-0)

[100](#page-0)

[Performance](#page-0)

[Accessibility](#page-0)

[Best](#page-0)

[SEO](#page-0)

[Practices](#page-0)

56

## Performance

Values are estimated and may vary. The performance score is calculated [URL 🔗](https://developer.chrome.com/docs/lighthouse/performance/performance-scoring/?utm_source=lighthouse&utm_medium=devtools)

directly from these metrics. See calculator. [URL 🔗](https://googlechrome.github.io/lighthouse/scorecalc/#FCP=5045&LCP=8167&TBT=0&CLS=0&SI=5045&TTI=8167&device=desktop&version=13.2.0)

0–49

50–89

90–100

METRICS

Collapse view

First Contentful Paint

Largest Contentful Paint


First Contentful Paint marks the time at which the first

text or image is painted. Learn more about the First Contentful Paint metric. [URL 🔗](https://developer.chrome.com/docs/lighthouse/performance/first-contentful-paint/?utm_source=lighthouse&utm_medium=devtools)

Total Blocking Time

## 0 ms

Sum of all time periods between FCP and Time to

Interactive, when task length exceeded 50ms, expressed in milliseconds. Learn more about the Total Blocking Time metric. [URL 🔗](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-total-blocking-time/?utm_source=lighthouse&utm_medium=devtools)

Speed Index

5.0 s

Speed Index shows how quickly the contents of a

page are visibly populated. Learn more about the Speed Index metric. [URL 🔗](https://developer.chrome.com/docs/lighthouse/performance/speed-index/?utm_source=lighthouse&utm_medium=devtools)

## INSIGHTS

Forced reflow

A forced reflow occurs when JavaScript queries geometric properties (such as offsetWidth) after styles have been

invalidated by a change to the DOM state. This can result in poor performance. Learn more about forced reflows and possible mitigations. Unscored [URL 🔗](https://developer.chrome.com/docs/performance/insights/forced-reflow?utm_source=lighthouse&utm_medium=devtools)

Total reflow time

42 ms

Largest Contentful Paint marks the time at which the

largest text or image is painted. Learn more about the Largest Contentful Paint metric [URL 🔗](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-largest-contentful-paint/?utm_source=lighthouse&utm_medium=devtools)

Cumulative Layout Shift

0

Cumulative Layout Shift measures the movement of visible elements within the viewport. Learn more [URL 🔗](https://web.dev/articles/cls?utm_source=lighthouse&utm_medium=devtools)

[about the Cumulative Layout Shift metric.](https://web.dev/articles/cls?utm_source=lighthouse&utm_medium=devtools)

## Top function call

react-dom_client.js?v=13aef8e6:17

| Source Total reflow time |
| --- |
| [unattributed] 1 ms sonner.js?v=13aef8e6:798 0 ms |


42 ms

site.tsx:27

Network dependency tree

Avoid chaining critical requests by reducing the length of chains, reducing the download size of resources, or deferring the [URL 🔗](https://developer.chrome.com/docs/performance/insights/network-dependency-tree?utm_source=lighthouse&utm_medium=devtools)

download of unnecessary resources to improve page load. LCP Unscored

```
Maximum critical path latency: 818 ms
Initial Navigation
/admissions (localhost) - 398 ms, 1.68 KiB
/css2?family=… (fonts.googleapis.com) - 685 ms, 1.00 KiB
…v20/xn7gYHE41….woff2 (fonts.gstatic.com) - 818 ms, 24.03 KiB
…v22/V8mDoQDjQ….woff2 (fonts.gstatic.com) - 807 ms, 21.83 KiB
…v17/i7dPIFZif….woff2 (fonts.gstatic.com) - 774 ms, 9.27 KiB
…v17/i7dMIFZif….woff2 (fonts.gstatic.com) - 751 ms, 9.35 KiB
/src/main.tsx (localhost) - 407 ms, 2.95 KiB
/src/App.tsx (localhost) - 429 ms, 15.13 KiB
…pages/AcademyPage.tsx (localhost) - 461 ms, 133.31 KiB
…ui/carousel.tsx (localhost) - 497 ms, 28.97 KiB
…ui/button.tsx (localhost) - 507 ms, 9.08 KiB
…deps/@radix-ui_react-slot.js?v=13aef8e6 (localhost) - 521 ms, 2.03 KiB
…deps/embla-carousel-react.js?v=13aef8e6 (localhost) - 507 ms, 50.89 KiB
…ui/tooltip.tsx (localhost) - 445 ms, 6.94 KiB
…lib/utils.ts (localhost) - 484 ms, 1.04 KiB
…deps/clsx.js?v=13aef8e6 (localhost) - 504 ms, 1.43 KiB
…deps/chunk-SIU35MPB.js?v=13aef8e6 (localhost) - 513 ms, 0.95 KiB
…deps/tailwind-merge.js?v=13aef8e6 (localhost) - 502 ms, 100.31 KiB
…deps/@radix-ui_react-tooltip.js?v=13aef8e6 (localhost) - 479 ms, 95.45 KiB
…deps/chunk-24CX3EEM.js?v=13aef8e6 (localhost) - 500 ms, 7.90 KiB
…deps/chunk-FN5SJA4Y.js?v=13aef8e6 (localhost) - 499 ms, 38.19 KiB
…pages/not-found.tsx (localhost) - 460 ms, 6.20 KiB
…deps/lucide-react.js?v=13aef8e6 (localhost) - 513 ms, 1,004.90 KiB
…ui/card.tsx (localhost) - 490 ms, 11.43 KiB
…ui/toaster.tsx (localhost) - 457 ms, 6.97 KiB
…ui/toast.tsx (localhost) - 487 ms, 19.40 KiB
…deps/class-variance-authority.js?v=13aef8e6 (localhost) - 505 ms, 2.65 KiB
```


…deps/@radix-ui_react-toast.js?v=13aef8e6 (localhost) - 504 ms, 45.13 KiB [URL 🔗](http://localhost:5173/node_modules/.vite/deps/@radix-ui_react-toast.js?v=13aef8e6)

…hooks/use-toast.ts (localhost) - 489 ms, 12.50 KiB …pages/HomePage.tsx (localhost) - 460 ms, 107.86 KiB …pages/shared.tsx (localhost) - 496 ms, 59.34 KiB …nextera/site.tsx (localhost) - 495 ms, 82.27 KiB …nextera/primitives.tsx (localhost) - 493 ms, 29.98 KiB …deps/@tanstack_react-query.js?v=13aef8e6 (localhost) - 444 ms, 115.61 KiB …deps/chunk-5MPWRIP2.js?v=13aef8e6 (localhost) - 479 ms, 12.74 KiB …deps/react.js?v=13aef8e6 (localhost) - 478 ms, 1.30 KiB …pages/PartnershipPage.tsx (localhost) - 466 ms, 35.91 KiB …pages/FAQPage.tsx (localhost) - 462 ms, 14.93 KiB …pages/TechVersePage.tsx (localhost) - 462 ms, 108.13 KiB …pages/AboutPage.tsx (localhost) - 461 ms, 50.81 KiB …pages/AdmissionsPage.tsx (localhost) - 461 ms, 144.04 KiB …deps/wouter.js?v=13aef8e6 (localhost) - 460 ms, 16.39 KiB …deps/sonner.js?v=13aef8e6 (localhost) - 458 ms, 57.35 KiB …deps/react-dom_client.js?v=13aef8e6 (localhost) - 435 ms, 881.26 KiB …deps/chunk-T7WLHBBF.js?v=13aef8e6 (localhost) - 478 ms, 16.35 KiB …deps/react_jsx-dev-runtime.js?v=13aef8e6 (localhost) - 428 ms, 12.35 KiB …deps/chunk-QKQ6FTX6.js?v=13aef8e6 (localhost) - 442 ms, 12.00 KiB …deps/chunk-LO2R26DG.js?v=13aef8e6 (localhost) - 442 ms, 42.96 KiB [URL 🔗](http://localhost:5173/node_modules/.vite/deps/@tanstack_react-query.js?v=13aef8e6)

[/src/index.css](http://localhost:5173/src/index.css)

(localhost)

\- 438 ms, 149.86 KiB

[…components/error-boundary.tsx](http://localhost:5173/src/components/error-boundary.tsx)

(localhost) - 435 ms, 12.44 KiB

/css2?family=Inter:wght@400;500;600;700&display=swap (fonts.googleapis.com) - 439 ms, 1.20 KiB /@vite/client (localhost) - 407 ms, 175.58 KiB …client/env.mjs (localhost) - 424 ms, 3.68 KiB [URL 🔗](https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap)

[/@react-refresh](http://localhost:5173/@react-refresh)

(localhost)

\- 420 ms, 109.56 KiB

Preconnected origins

preconnect hints help the browser establish a connection earlier in the page load, saving time when the first request for that origin is made. The following are the origins that the page preconnected to. [URL 🔗](https://developer.chrome.com/docs/lighthouse/performance/uses-rel-preconnect/?utm_source=lighthouse&utm_medium=devtools)

| Origin | Source |
| --- | --- |
| https://fonts.googleapis.com/ | link |
| https://fonts.gstatic.com/ | link |


## Preconnect candidates

Add preconnect hints to your most important origins, but try to use no more than 4. [URL 🔗](https://developer.chrome.com/docs/lighthouse/performance/uses-rel-preconnect/?utm_source=lighthouse&utm_medium=devtools)

No additional origins are good candidates for preconnecting

Improve image delivery — Est savings of 63 KiB

Reducing the download time of images can improve the perceived load time of the page and LCP. Learn more about [URL 🔗](https://developer.chrome.com/docs/performance/insights/image-delivery?utm_source=lighthouse&utm_medium=devtools)

optimizing image size FCP LCP Unscored [URL 🔗](https://developer.chrome.com/docs/performance/insights/image-delivery?utm_source=lighthouse&utm_medium=devtools)

Render-blocking requests

Requests are blocking the page's initial render, which may delay LCP. Deferring or inlining can move these network requests [URL 🔗](https://developer.chrome.com/docs/performance/insights/render-blocking?utm_source=lighthouse&utm_medium=devtools)

out of the critical path. FCP LCP Unscored

| URL |   | Transfer | Duration |
| --- | --- | --- | --- |
|   |   | Size |   |
| Google Fonts | Cdn | 1.2 KiB | 290 ms |
| /css2?family=Inter:wght@400;500;600;700&display=swap |   | (fonts.googleapis.com) 1.2 KiB | 290 ms |

## LCP breakdown

Each subpart has specific improvement strategies. Ideally, most of the LCP time should be spent on loading the resources, [URL 🔗](https://developer.chrome.com/docs/performance/insights/lcp-breakdown?utm_source=lighthouse&utm_medium=devtools)

not within delays.

LCP Unscored


| Subpart | Duration |
| --- | --- |
| Time to first byte Element render delay p.section-intro | 320 ms 340 ms |

## 3rd parties

3rd party code can significantly impact load performance. Reduce and defer loading of 3rd party code to prioritize your page's content. Unscored [URL 🔗](https://developer.chrome.com/docs/performance/insights/third-parties?utm_source=lighthouse&utm_medium=devtools)

| Transfer Main thread 3rd party size time gmgoamodcdcjnbaobigkjelfplakmdhh 0 KiB 17 ms chrome-extension://gmgoamodcdcjnbaobigkjelfplakmdhh/vendor/@eyeo/webext-ad-filtering- 0 KiB 5 ms solution/content.js chrome-extension://gmgoamodcdcjnbaobigkjelfplakmdhh/onpage-dialog-ui.preload.js 0 KiB 4 ms chrome-extension://gmgoamodcdcjnbaobigkjelfplakmdhh/vendor/@eyeo/webext-ad-filtering- 0 KiB 4 ms solution/content-main.js chrome-extension://gmgoamodcdcjnbaobigkjelfplakmdhh/polyfill.js 0 KiB 1 ms chrome-extension://gmgoamodcdcjnbaobigkjelfplakmdhh/composer.preload.js 0 KiB 1 ms chrome-extension://gmgoamodcdcjnbaobigkjelfplakmdhh/bypass.preload.js 0 KiB 1 ms chrome-extension://gmgoamodcdcjnbaobigkjelfplakmdhh/cookie-banner-detection.preload.js 0 KiB 1 ms chrome-extension://gmgoamodcdcjnbaobigkjelfplakmdhh/onpage-dialog.preload.js 0 KiB 1 ms ndcileolkflehcjpmjnfbnaibdcgglog 0 KiB 16 ms chrome-extension://ndcileolkflehcjpmjnfbnaibdcgglog/globals-front.js 0 KiB 5 ms chrome-extension://ndcileolkflehcjpmjnfbnaibdcgglog/vendor/@eyeo/webext-ad-filtering- 0 KiB 4 ms solution/content.js |
| --- |
| chrome-extension://ndcileolkflehcjpmjnfbnaibdcgglog/vendor/@eyeo/webext-ad-filtering- 0 KiB 3 ms solution/content-main.js chrome-extension://ndcileolkflehcjpmjnfbnaibdcgglog/polyfill.js 0 KiB 2 ms chrome-extension://ndcileolkflehcjpmjnfbnaibdcgglog/adblock-picreplacement.js 0 KiB 1 ms |


Transfer

Main thread

| 3rd party | Transfer | Main thread |
| --- | --- | --- |
|   | size | time |
| chrome-extension://ndcileolkflehcjpmjnfbnaibdcgglog/adblock-functions.js | 0 KiB | 1 ms |
| chrome-extension://ndcileolkflehcjpmjnfbnaibdcgglog/cookie-banner-detection.preload.js | 0 KiB | 1 ms |
| chrome-extension://ndcileolkflehcjpmjnfbnaibdcgglog/contentscript-loader.js | 0 KiB | 0 ms |
| chrome-extension://ndcileolkflehcjpmjnfbnaibdcgglog/adblock-uiscripts- | 0 KiB | 0 ms |
| rightclick_hook.js |   |   |
| chrome-extension://ndcileolkflehcjpmjnfbnaibdcgglog/premium.preload.js | 0 KiB | 0 ms |
| chrome-extension://ndcileolkflehcjpmjnfbnaibdcgglog/ext/content.js | 0 KiB | 0 ms |
| chrome-extension://ndcileolkflehcjpmjnfbnaibdcgglog/ext/common.js | 0 KiB | 0 ms |
| ifoakfbpdcdoeenechcleahebpibofpc | 0 KiB | 8 ms |
| chrome-extension://ifoakfbpdcdoeenechcleahebpibofpc/inject/index.js | 0 KiB | 8 ms |
| chrome-extension://ifoakfbpdcdoeenechcleahebpibofpc/inject/fallback.js | 0 KiB | 0 ms |
| cpkecikipkmeghkgliojjnaahlgjfnpo | 0 KiB | 4 ms |
| chrome-extension://cpkecikipkmeghkgliojjnaahlgjfnpo/js/content.js | 0 KiB | 4 ms |
| Google Fonts Cdn | 67 KiB | 0 ms |
| …v20/xn7gYHE41….woff2 (fonts.gstatic.com) | 24 KiB | 0 ms |
| …v22/V8mDoQDjQ….woff2 (fonts.gstatic.com) | 22 KiB | 0 ms |
| …v17/i7dMIFZif….woff2 (fonts.gstatic.com) | 9 KiB | 0 ms |
| …v17/i7dPIFZif….woff2 (fonts.gstatic.com) | 9 KiB | 0 ms |
| /css2?family=Inter:wght@400;500;600;700&display=swap | (fonts.googleapis.com) 1 KiB | 0 ms |
| /css2?family=… (fonts.googleapis.com) | 1 KiB | 0 ms |

These insights are also available in the Chrome DevTools Performance Panel - record a trace to view more detailed information. [URL 🔗](https://developer.chrome.com/docs/devtools/performance/reference?utm_source=lighthouse&utm_medium=devtools)

## DIAGNOSTICS

## Minify JavaScript — Est savings of 1,801 KiB

Minifying JavaScript files can reduce payload sizes and script parse time. Learn how to minify JavaScript. FCP LCP [URL 🔗](https://developer.chrome.com/docs/lighthouse/performance/unminified-javascript/?utm_source=lighthouse&utm_medium=devtools)

Unscored


| URL |   | Transfer Size | Est Savings |
| --- | --- | --- | --- |
| localhost 1st Party |   |   | 3,682.8 KiB 1,635.7 KiB |
| …deps/lucide-react.js?v=13aef8e6 | (localhost) | 1,004.6 KiB | 324.2 KiB |
| …deps/react-dom_client.js?v=13aef8e6 | (localhost) | 881.0 KiB | 267.0 KiB |
| /@vite/client (localhost) |   | 175.3 KiB | 148.3 KiB |
| …pages/AdmissionsPage.tsx (localhost) |   | 143.8 KiB | 99.5 KiB |
| /@react-refresh (localhost) |   | 109.3 KiB | 99.3 KiB |
| …pages/AcademyPage.tsx (localhost) |   | 133.0 KiB | 98.6 KiB |
| …pages/HomePage.tsx (localhost) |   | 107.6 KiB | 72.7 KiB |
| …pages/TechVersePage.tsx (localhost) |   | 107.8 KiB | 68.8 KiB |
| …nextera/site.tsx (localhost) |   | 82.0 KiB | 54.1 KiB |
| …deps/tailwind-merge.js?v=13aef8e6 | (localhost) | 100.0 KiB | 53.1 KiB |
| …pages/shared.tsx (localhost) |   | 59.1 KiB | 39.9 KiB |
| …deps/@tanstack_react-query.js?v=13aef8e6 | (localhost) | 115.3 KiB | 36.0 KiB |
| …pages/AboutPage.tsx (localhost) |   | 50.5 KiB | 33.7 KiB |
| …deps/@radix-ui_react-tooltip.js?v=13aef8e6 | (localhost) | 95.1 KiB | 25.2 KiB |
| …pages/PartnershipPage.tsx (localhost) |   | 35.6 KiB | 22.7 KiB |
| …ui/carousel.tsx (localhost) |   | 28.7 KiB | 20.1 KiB |
| …nextera/primitives.tsx (localhost) |   | 29.7 KiB | 17.0 KiB |
| …deps/chunk-LO2R26DG.js?v=13aef8e6 | (localhost) | 42.7 KiB | 12.5 KiB |
| …ui/toast.tsx (localhost) |   | 19.1 KiB | 12.3 KiB |


| URL |   | Transfer Size | Est Savings |
| --- | --- | --- | --- |
| …deps/@radix-ui_react-toast.js?v=13aef8e6 | (localhost) | 44.8 KiB | 11.4 KiB |
| …deps/embla-carousel-react.js?v=13aef8e6 | (localhost) | 50.6 KiB | 11.0 KiB |
| …deps/sonner.js?v=13aef8e6 (localhost) |   | 57.0 KiB | 10.6 KiB |
| …deps/chunk-QKQ6FTX6.js?v=13aef8e6 | (localhost) | 11.7 KiB | 10.1 KiB |
| …hooks/use-toast.ts (localhost) |   | 12.2 KiB | 10.0 KiB |
| …deps/chunk-FN5SJA4Y.js?v=13aef8e6 | (localhost) | 37.9 KiB | 9.3 KiB |
| /src/App.tsx (localhost) |   | 14.8 KiB | 8.9 KiB |
| …pages/FAQPage.tsx (localhost) |   | 14.6 KiB | 8.5 KiB |
| …components/error-boundary.tsx (localhost) |   | 12.2 KiB | 7.8 KiB |
| …ui/card.tsx (localhost) |   | 11.1 KiB | 6.8 KiB |
| …ui/button.tsx (localhost) |   | 8.8 KiB | 5.5 KiB |
| …deps/wouter.js?v=13aef8e6 (localhost) |   | 16.1 KiB | 5.2 KiB |
| …deps/chunk-5MPWRIP2.js?v=13aef8e6 | (localhost) | 12.4 KiB | 3.7 KiB |
| …ui/tooltip.tsx (localhost) |   | 6.7 KiB | 3.6 KiB |
| …deps/chunk-T7WLHBBF.js?v=13aef8e6 | (localhost) | 16.0 KiB | 3.6 KiB |
| …deps/react_jsx-dev-runtime.js?v=13aef8e6 | (localhost) | 12.0 KiB | 3.6 KiB |
| …ui/toaster.tsx (localhost) |   | 6.7 KiB | 3.5 KiB |
| …client/env.mjs (localhost) |   | 3.4 KiB | 2.9 KiB |
| …pages/not-found.tsx (localhost) |   | 5.9 KiB | 2.7 KiB |
| …deps/chunk-24CX3EEM.js?v=13aef8e6 | (localhost) | 7.6 KiB | 2.1 KiB |


| URL | Transfer Size | Est Savings |
| --- | --- | --- |
| Unattributable | 411.8 KiB | 165.4 KiB |
| chrome-extension://ifoakfbpdcdoeenechcleahebpibofpc/inject/index.js | 126.3 KiB | 53.3 KiB |
| chrome-extension://ndcileolkflehcjpmjnfbnaibdcgglog/globals-front.js | 83.3 KiB | 42.6 KiB |
| chrome-extension://cpkecikipkmeghkgliojjnaahlgjfnpo/js/content.js | 45.3 KiB | 24.2 KiB |
| chrome-extension://gmgoamodcdcjnbaobigkjelfplakmdhh/vendor/@eyeo/webext-ad- | 39.6 KiB | 5.8 KiB |
| filtering-solution/content-main.js |   |   |
| chrome-extension://ndcileolkflehcjpmjnfbnaibdcgglog/vendor/@eyeo/webext-ad- | 39.6 KiB | 5.8 KiB |
| filtering-solution/content-main.js |   |   |
| chrome-extension://ndcileolkflehcjpmjnfbnaibdcgglog/polyfill.js | 10.8 KiB | 5.8 KiB |
| chrome-extension://ndcileolkflehcjpmjnfbnaibdcgglog/polyfill.js | 10.8 KiB | 5.8 KiB |
| chrome-extension://ndcileolkflehcjpmjnfbnaibdcgglog/cookie-banner- | 10.0 KiB | 5.3 KiB |
| detection.preload.js |   |   |
| chrome-extension://ndcileolkflehcjpmjnfbnaibdcgglog/adblock-picreplacement.js | 9.1 KiB | 3.8 KiB |
| chrome-extension://ndcileolkflehcjpmjnfbnaibdcgglog/adblock-functions.js | 6.9 KiB | 3.2 KiB |
| chrome-extension://gmgoamodcdcjnbaobigkjelfplakmdhh/bypass.preload.js | 8.2 KiB | 2.7 KiB |
| chrome-extension://gmgoamodcdcjnbaobigkjelfplakmdhh/polyfill.js | 7.5 KiB | 2.5 KiB |
| chrome-extension://gmgoamodcdcjnbaobigkjelfplakmdhh/composer.preload.js | 7.6 KiB | 2.3 KiB |
| chrome-extension://gmgoamodcdcjnbaobigkjelfplakmdhh/cookie-banner- | 6.9 KiB | 2.2 KiB |
| detection.preload.js |   |   |

Reduce unused JavaScript

— Est savings of 1,198 KiB

Reduce unused JavaScript and defer loading scripts until they are required to decrease bytes consumed by network activity. Learn how to reduce unused JavaScript. FCP LCP Unscored [URL 🔗](https://developer.chrome.com/docs/lighthouse/performance/unused-javascript/?utm_source=lighthouse&utm_medium=devtools)


| URL | Transfer Size | Est |
| --- | --- | --- |
|   |   | Savings |
| localhost 1st Party |   | 2,685.3 KiB 940.6 KiB |
| …deps/react-dom_client.js?v=13aef8e6 (localhost) | 881.0 KiB | 382.0 KiB |
| …react-dom@19.1.0_react@19.1.0/node_modules/react-dom/cjs/react-dom- client.development.js | 868.5 KiB | 379.3 KiB |
| …scheduler@0.26.0/node_modules/scheduler/cjs/scheduler.development.js | 11.2 KiB | 2.6 KiB |
| …deps/@tanstack_react-query.js?v=13aef8e6 (localhost) | 115.3 KiB | 100.1 KiB |
| …query-core@5.101.4/node_modules/@tanstack/query-core/src/queryObserver.ts | 14.5 KiB 10.7 KiB 7.8 KiB 6.9 KiB 6.3 KiB | 14.4 KiB 10.6 KiB 7.1 KiB 6.7 KiB 6.2 KiB |
| …query-core@5.101.4/node_modules/@tanstack/query-core/src/query.ts |   |   |
| …query-core@5.101.4/node_modules/@tanstack/query-core/src/queryClient.ts |   |   |
| …query-core@5.101.4/node_modules/@tanstack/query-core/src/utils.ts |   |   |
| …query-core@5.101.4/node_modules/@tanstack/query-core/src/queriesObserver.ts |   |   |
| …deps/@radix-ui_react-tooltip.js?v=13aef8e6 (localhost) | 95.1 KiB | 86.1 KiB |
| …floating-ui+core@1.8.0/node_modules/@floating-ui/core/dist/floating- ui.core.mjs | 22.5 KiB | 22.3 KiB |
| …floating-ui+dom@1.8.0/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs | 19.5 KiB | 19.0 KiB |
| …radix-ui+react- tooltip@1.2_d47a258fc4932574aabb9344ff1e0ca0/node_modules/@radix-ui/react- tooltip/src/tooltip.tsx |   |   |
|   | 17.3 KiB | 14.8 KiB |
| …radix-ui+react- popper@1.3._8b3964e59390a5fe46f6d867450abffb/node_modules/@radix-ui/react- popper/src/popper.tsx |   |   |
|   | 9.4 KiB | 8.4 KiB |
| …floating-ui+react- dom@2.1._94bc600229d92a19724fcc4b563b093f/node_modules/@floating-ui/react- dom/dist/floating-ui.react-dom.mjs |   |   |
|   | 7.9 KiB | 7.5 KiB |
| …pages/AcademyPage.tsx (localhost) | 133.0 KiB | 65.4 KiB |
| … | 65.7 KiB | 65.0 KiB |
| …pages/HomePage.tsx (localhost) | 107.6 KiB | 56.5 KiB |
| … | 57.0 KiB | 56.2 KiB |
| …pages/TechVersePage.tsx (localhost) | 107.8 KiB | 56.2 KiB |
| … | 56.4 KiB | 55.8 KiB |


| URL | Transfer Size | Est |
| --- | --- | --- |
|   |   | Savings |
| …deps/embla-carousel-react.js?v=13aef8e6 (localhost) | 50.6 KiB | 49.2 KiB |
| …@8.6.0/node_modules/embla-carousel/src/components/Engine.ts | 5.0 KiB 4.8 KiB 4.6 KiB 2.3 KiB 1.8 KiB | 5.0 KiB 4.8 KiB 4.5 KiB 2.3 KiB 1.8 KiB |
| …@8.6.0/node_modules/embla-carousel/src/components/EmblaCarousel.ts |   |   |
| …@8.6.0/node_modules/embla-carousel/src/components/DragHandler.ts |   |   |
| …@8.6.0/node_modules/embla-carousel/src/components/SlideLooper.ts |   |   |
| …@8.6.0/node_modules/embla-carousel/src/components/utils.ts |   |   |
| …deps/@radix-ui_react-toast.js?v=13aef8e6 (localhost) | 44.8 KiB | 33.9 KiB |
| …toast@1.2.2_b9a39d7975990edbe4816925bd6823b5/node_modules/@radix-ui/react- toast/src/toast.tsx | 23.5 KiB | 17.8 KiB |
| …collection@_2edc631aa7281ecb3351517db8acf63f/node_modules/@radix-ui/react- collection/src/ordered-dictionary.ts | 7.6 KiB | 7.3 KiB |
| …collection@_2edc631aa7281ecb3351517db8acf63f/node_modules/@radix-ui/react- collection/src/collection.tsx | 5.8 KiB | 5.4 KiB |
| …collection@_2edc631aa7281ecb3351517db8acf63f/node_modules/@radix-ui/react- collection/src/collection-legacy.tsx | 3.0 KiB | 0.9 KiB |
| …deps/sonner.js?v=13aef8e6 (localhost) | 57.0 KiB | 33.6 KiB |
| … | 56.6 KiB | 33.6 KiB |
| …deps/chunk-FN5SJA4Y.js?v=13aef8e6 (localhost) | 37.9 KiB | 26.7 KiB |
| …react-dismissable_e37b59e9c382f67c9fd040dc560477e1/node_modules/@radix- ui/react-dismissable-layer/src/dismissable-layer.tsx | 12.8 KiB | 11.3 KiB |
| …react-presence@1._5a2e33edd44b9034f439aae01c6c43d1/node_modules/@radix- ui/react-presence/src/presence.tsx | 5.6 KiB | 5.3 KiB |
| …react-use-control_9d3ac9f6afa9ae84662f498c7a1dca7b/node_modules/@radix- ui/react-use-controllable-state/src/use-controllable-state-reducer.tsx | 2.4 KiB | 2.2 KiB |
| …react-use-control_9d3ac9f6afa9ae84662f498c7a1dca7b/node_modules/@radix- ui/react-use-controllable-state/src/use-controllable-state.tsx | 2.2 KiB | 1.9 KiB |
| …react-context@1.2_55d58bcad99c8f61709cf768e0dd2792/node_modules/@radix- ui/react-context/src/create-context.tsx | 3.8 KiB | 1.7 KiB |
| …deps/lucide-react.js?v=13aef8e6 (localhost) | 1,004.6 KiB | 25.6 KiB |
| …lucide-react/dist/esm/icons/index.js | 51.3 KiB | 25.6 KiB |
| …pages/AboutPage.tsx (localhost) | 50.5 KiB | 25.3 KiB |


| URL | Transfer Size | Est |
| --- | --- | --- |
|   |   | Savings |
| … | 25.3 KiB | 24.9 KiB |
| Unattributable | 334.0 KiB | 257.3 KiB |
| chrome-extension://ifoakfbpdcdoeenechcleahebpibofpc/inject/index.js | 126.3 KiB | 108.6 KiB |
| chrome-extension://ndcileolkflehcjpmjnfbnaibdcgglog/globals-front.js | 83.3 KiB | 44.3 KiB |
| chrome-extension://cpkecikipkmeghkgliojjnaahlgjfnpo/js/content.js | 45.3 KiB | 40.4 KiB |
| chrome-extension://gmgoamodcdcjnbaobigkjelfplakmdhh/vendor/@eyeo/webext-ad- | 39.6 KiB | 32.0 KiB |
| filtering-solution/content-main.js |   |   |
| chrome-extension://ndcileolkflehcjpmjnfbnaibdcgglog/vendor/@eyeo/webext-ad- | 39.6 KiB | 32.0 KiB |
| filtering-solution/content-main.js |   |   |

Page prevented back/forward cache restoration

— 1 failure reason

Many navigations are performed by going back to a previous page, or forwards again. The back/forward cache (bfcache) can

speed up these return navigations. Learn more about the bfcache Unscored [URL 🔗](https://developer.chrome.com/docs/lighthouse/performance/bf-cache/?utm_source=lighthouse&utm_medium=devtools)

| Failure reason | Failure type |
| --- | --- |
| Pages with WebSocket cannot enter back/forward cache. | Pending browser support |
| /admissions (localhost) |   |

Minify CSS — Est savings of 4 KiB

Minifying CSS files can reduce network payload sizes. Learn how to minify CSS. FCP LCP Unscored [URL 🔗](https://developer.chrome.com/docs/lighthouse/performance/unminified-css/?utm_source=lighthouse&utm_medium=devtools)

| Transfer Est URL Size Savings |
| --- |
| #rb-privacy, #acceptance_of_cookies, #oct-policy, .cookie-permission-container, app- 61.1 KiB 3.8 KiB cookies-agreeme… |


Reduce unused rules from stylesheets and defer CSS not used for above-the-fold content to decrease bytes consumed by

network activity. Learn how to reduce unused CSS. FCP LCP Unscored [URL 🔗](https://developer.chrome.com/docs/lighthouse/performance/unused-css-rules/?utm_source=lighthouse&utm_medium=devtools)

Transfer

Est

URL

Size

Savings

#rb-privacy, #acceptance_of_cookies, #oct-policy, .cookie-permission-container, app-

61.1 KiB

61.1 KiB

cookies-agreeme…

Avoid enormous network payloads

— Total size was 4,045 KiB

Large network payloads cost users real money and are highly correlated with long load times. Learn how to reduce payload [URL 🔗](https://developer.chrome.com/docs/lighthouse/performance/total-byte-weight/?utm_source=lighthouse&utm_medium=devtools)

sizes. Unscored [URL 🔗](https://developer.chrome.com/docs/lighthouse/performance/total-byte-weight/?utm_source=lighthouse&utm_medium=devtools)

| URL Transfer Size localhost 1st Party 2,930.1 KiB …deps/lucide-react.js?v=13aef8e6 (localhost) 1,004.9 KiB …deps/react-dom_client.js?v=13aef8e6 (localhost) 881.3 KiB /@vite/client (localhost) 175.6 KiB /src/index.css (localhost) 149.9 KiB …pages/AdmissionsPage.tsx (localhost) 144.0 KiB …pages/AcademyPage.tsx (localhost) 133.3 KiB …deps/@tanstack_react-query.js?v=13aef8e6 (localhost) 115.6 KiB /@react-refresh (localhost) 109.6 KiB …pages/TechVersePage.tsx (localhost) 108.1 KiB …pages/HomePage.tsx (localhost) 107.9 KiB |
| --- |


| Element Name body Unsupported CSS Property: color color Unsupported CSS Property: background-color background-color header.site-header |
| --- |
| Unsupported CSS Property: color color Unsupported CSS Property: scrollbar-color scrollbar-color div.container.nav-container Unsupported CSS Property: color color Unsupported CSS Property: scrollbar-color scrollbar-color |

Avoid long main-thread tasks — 1 long task found

Lists the longest tasks on the main thread, useful for identifying worst contributors to input delay. Learn how to avoid long main-thread tasks TBT Unscored [URL 🔗](https://web.dev/articles/optimize-long-tasks?utm_source=lighthouse&utm_medium=devtools)

| URL Start Time Duration localhost 1st Party 50 ms |
| --- |
| /admissions (localhost) 837 ms 50 ms |

More information about the performance of your application. These numbers don't

[directly affect](https://developer.chrome.com/docs/lighthouse/performance/performance-scoring/?utm_source=lighthouse&utm_medium=devtools)

the Performance score.


A large DOM can increase the duration of style calculations and layout reflows, impacting page responsiveness. A large DOM

will also increase memory usage. Learn how to avoid an excessive DOM size. Unscored [URL 🔗](https://developer.chrome.com/docs/performance/insights/dom-size?utm_source=lighthouse&utm_medium=devtools)

Duplicated JavaScript


Remove large, duplicate JavaScript modules from bundles to reduce unnecessary bytes consumed by network activity. FCP [URL 🔗](https://developer.chrome.com/docs/performance/insights/duplicated-javascript?utm_source=lighthouse&utm_medium=devtools)

LCP Unscored [URL 🔗](https://developer.chrome.com/docs/performance/insights/duplicated-javascript?utm_source=lighthouse&utm_medium=devtools)

## Source

## Duplicated bytes

| node_modules/react |   | 20 KiB |
| --- | --- | --- |
| …deps/chunk-LO2R26DG.js?v=13aef8e6 | (localhost) | -- |
| …deps/chunk-5MPWRIP2.js?v=13aef8e6 | (localhost) | 10 KiB |
| …deps/react_jsx-dev-runtime.js?v=13aef8e6 | (localhost) | 10 KiB |

## Font display

Consider setting

mitigate layout shifts with font metric overrides. Unscored [URL 🔗](https://developer.chrome.com/blog/font-fallbacks?utm_source=lighthouse&utm_medium=devtools)

INP breakdown

Start investigating how to improve INP by looking at the longest subpart. Unscored [URL 🔗](https://developer.chrome.com/docs/performance/insights/inp-breakdown?utm_source=lighthouse&utm_medium=devtools)

LCP request discovery

Optimize LCP by making the LCP image discoverable from the HTML immediately, and avoiding lazy-loading Unscored [URL 🔗](https://developer.chrome.com/docs/performance/insights/lcp-discovery?utm_source=lighthouse&utm_medium=devtools)

Legacy JavaScript

Polyfills and transforms enable older browsers to use new JavaScript features. However, many aren't necessary for modern

browsers. Consider modifying your JavaScript build process to not transpile Baseline features, unless you know you must [URL 🔗](https://web.dev/articles/baseline-and-polyfills?utm_source=lighthouse&utm_medium=devtools)

support older browsers.

[font-display](https://developer.chrome.com/docs/performance/insights/font-display?utm_source=lighthouse&utm_medium=devtools)

to

swap

or

optional

to ensure text is consistently visible. swap can be further optimized to

Learn why most sites can deploy ES6+ code without transpiling FCP LCP Unscored [URL 🔗](https://developer.chrome.com/docs/performance/insights/legacy-javascript?utm_source=lighthouse&utm_medium=devtools)

## Modern HTTP

HTTP/2 and HTTP/3 offer many benefits over HTTP/1.1, such as multiplexing. Learn more about using modern HTTP. FCP [URL 🔗](https://developer.chrome.com/docs/performance/insights/modern-http?utm_source=lighthouse&utm_medium=devtools)

LCP Unscored

Optimize viewport for mobile

Tap interactions may be delayed by up to 300 ms if the viewport is not optimized for mobile. Unscored [URL 🔗](https://developer.chrome.com/docs/performance/insights/viewport?utm_source=lighthouse&utm_medium=devtools)

meta


Consider instrumenting your app with the User Timing API to measure your app's real-world performance during key user

experiences. Learn more about User Timing marks. Unscored [URL 🔗](https://developer.chrome.com/docs/lighthouse/performance/user-timings/?utm_source=lighthouse&utm_medium=devtools)

JavaScript execution time

— 0.1 s

Consider reducing the time spent parsing, compiling, and executing JS. You may find delivering smaller JS payloads helps

with this. Learn how to reduce Javascript execution time. TBT Unscored [URL 🔗](https://developer.chrome.com/docs/lighthouse/performance/bootup-time/?utm_source=lighthouse&utm_medium=devtools)

| URL |   | Total CPU | Script Evaluation | Script Parse |
| --- | --- | --- | --- | --- |
|   |   | Time |   |   |
| localhost | 1st Party | 302 ms | 59 ms | 33 ms |
| /admissions | (localhost) | 210 ms | 16 ms | 32 ms |
| …deps/react-dom_client.js?v=13aef8e6 |   | (localhost) 93 ms | 43 ms | 1 ms |
| Unattributable |   | 193 ms | 3 ms | 0 ms |
| Unattributable |   | 193 ms | 3 ms | 0 ms |

Minimizes main-thread work

— 0.5 s

Consider reducing the time spent parsing, compiling and executing JS. You may find delivering smaller JS payloads helps

with this. Learn how to minimize main-thread work TBT Unscored [URL 🔗](https://developer.chrome.com/docs/lighthouse/performance/mainthread-work-breakdown/?utm_source=lighthouse&utm_medium=devtools)

| Category Time Spent Other 244 ms Style & Layout 136 ms Script Evaluation 73 ms Script Parsing & Compilation 35 ms |
| --- |
| Rendering 22 ms |


Category

Parse HTML & CSS

Time Spent

8 ms

Image elements have explicit width and height

dimensions CLS Unscored [URL 🔗](https://web.dev/articles/optimize-cls?utm_source=lighthouse&utm_medium=devtools#images_without_dimensions)

Set an explicit width and height on image elements to reduce layout shifts and improve CLS. Learn how to set image [URL 🔗](https://web.dev/articles/optimize-cls?utm_source=lighthouse&utm_medium=devtools#images_without_dimensions)
