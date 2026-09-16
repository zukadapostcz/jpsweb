# JPS Jedovnice — statický web

Čistý statický web (HTML + CSS + trocha JS, žádný WordPress) pro kapelu
Jarmilin pozdní běr / JPS Jedovnice. 3 stránky: `index.html` (Domů),
`repertoar.html`, `galerie.html`. Fotky jsou už doplněné z tvého exportu
stránek (viz mapování níže) — web je tedy hned funkční.

## Stav fotek

Všechny 3 stránky mají fotky kompletní — **Domů**, **Repertoár** i
**Galerie** (33 fotek, `assets/img/gallery/koncert-01.jpg` až `koncert-33.jpg`,
ve stejném pořadí jako na originálním webu).

Nový obrázek do galerie přidáš tak, že ho nahraješ do `assets/img/gallery/`
a do `galerie.html` doplníš řádek:
```html
<a href="assets/img/gallery/nazev.jpg"><img src="assets/img/gallery/nazev.jpg" alt=""></a>
```

## Mapování fotek (pro info, kdybys chtěl něco vyměnit)

| Soubor na webu | Původní soubor z exportu |
|---|---|
| assets/img/logo.png | Untitled-design-1.png |
| assets/img/hero-bg.jpg | katak-fest-37-of-52.jpg |
| assets/img/co-1..4.jpg | IMG_0664-1, a7-03260, IMG_0653, IMG_0741-1 |
| assets/img/za-kolik-1..4.jpg | IMG_5840, IMG_0810-1, IMG_0675, IMG_0710-1 |
| assets/img/instagram/*.jpg | 2× Screenshot-2026-06-07, ChatGPT-Image-7 |
| assets/img/repertoar/*.jpg\|webp | dobové fotky jednotlivých interpretů |
| assets/img/gallery/koncert-0{1,2,3}.jpg | 2390433606, 1038835941, 1183681459 |

## Nahrání na GitHub

```bash
cd jps-web
git init
git add .
git commit -m "Statický web JPS Jedovnice"
git branch -M main
git remote add origin https://github.com/<tvůj-účet>/<název-repa>.git
git push -u origin main
```

Pak v repozitáři: **Settings → Pages → Source: Deploy from branch → main / (root)**.

## Napojení vlastní domény jpsjedovnice.cz

Soubor `CNAME` s doménou je už v repozitáři (GitHub Pages ho vyžaduje).
Zbývá nastavit DNS u tvého registrátora domény:

**Kořenová doména (jpsjedovnice.cz)** — 4× `A` záznam na GitHub Pages IP:
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**Subdoména (www.jpsjedovnice.cz):**
```
CNAME   www   <tvůj-účet>.github.io.
```

Doporučuju nastavit obojí a v GitHubu v Settings → Pages zaškrtnout
"Enforce HTTPS" (certifikát se vygeneruje automaticky, chvíli to trvá).

Nakonec u současného hostingu/WordPressu zruš staré DNS záznamy, ať
nedochází ke kolizi.

## Co bylo oproti originálu vyčištěno

Obsah (texty, FAQ, citáty, seznam písní) je zachovaný beze změny. Odstranily
se jen technické WordPress "vnitřnosti", které na statickém webu nemají
funkci: Yoast SEO schema, emoji loader script, RSS feedy, vyhledávací
formulář (bez WP backendu nefunguje), stovky nepoužitých CSS proměnných
a vnořených wrapper divů, FooBox/FooGallery pluginy (nahrazeny jednoduchým
vlastním lightboxem v `assets/js/main.js`).
