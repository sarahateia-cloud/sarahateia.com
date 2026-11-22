# Disavowing spam backlinks

`seo/disavow.txt` lists 225 spam domains that link to sarahateia.com (Semrush, pulled
2026-11-22). The `seo/` folder is not part of the site build, so this file never goes live.

## Is this needed?

Probably not urgent. Google says its systems already ignore most spammy links, and that the
disavow tool is for sites with many artificial links that have caused, or might cause, a manual
action. A brand-new site picking up 225 link-farm domains in a few months is the case where it's
reasonable to file one anyway, as insurance. It won't raise rankings by itself.

## Upload it (5 minutes)

1. Open Google Search Console and make sure there is a **URL-prefix** property for
   `https://www.sarahateia.com/`. The disavow tool doesn't work with "Domain" properties. If you
   only have a Domain property, add the URL-prefix one (Add property → URL prefix). It will
   verify automatically if the Domain property is already verified.
2. Go to the disavow tool: https://search.google.com/search-console/disavow-links
3. Pick the `https://www.sarahateia.com/` property.
4. Click **Upload disavow list** and choose `seo/disavow.txt` (download it from GitHub with
   the "Download raw file" button).
5. Done. Google applies it as it recrawls those pages, which can take weeks.

Bing: Bing Webmaster Tools → Configuration → Disavow links takes one domain at a time, so it's
not worth doing for 225 domains unless Bing traffic matters later.

## Updating it

Each upload replaces the whole list. To add domains, append `domain:example.com` lines to
`seo/disavow.txt` and upload the full file again. Never disavow a real directory or
publication (Psychology Today, TherapyDen, a local paper, a school).
