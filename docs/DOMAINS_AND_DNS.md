# Domains and DNS

| Hostname | State | Destination | DNS | Proxy | Redirect |
|---|---|---|---|---|---|
| `dionismarkov.com` | active after DNS setup | Pages project `dionismarkow` | Pages custom-domain binding; current Pages target `dionismarkow.pages.dev` | enabled | none |
| `www.dionismarkov.com` | redirect | apex site | Proxied CNAME `www` to `dionismarkov.com` after zone validation | enabled | 301 to apex, path/query preserved |

Verification: wait for Pages custom-domain status `Active`; confirm certificate validity; request both hosts; verify `www` returns one 301 and apex returns 200; inspect canonical, robots, sitemap, and security headers.
