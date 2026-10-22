# datamates.it

Sito di **DataMates**, la community italiana su analytics, tracking e dati.
Stack: Astro 5 + Tailwind 4, sito statico, hosting gratuito su **GitHub Pages**, iscrizioni con **Brevo**.

## Sviluppo

```bash
pnpm install
pnpm dev        # http://localhost:4321
pnpm build      # genera dist/
```

I contenuti della prossima live (titolo, data, speaker, agenda) stanno in `src/data/site.ts`.
I colori e il font arrivano dal brand kit: palette `#031F3B` / `#12ED97` / `#FEFEFE`, Manrope.

## Messa online (una tantum)

### 1. Repository GitHub
- Crea il repo **pubblico**: GitHub Pages è gratuito solo sui repo pubblici, a meno di un piano a pagamento.
- Fai push su `main`.
- In **Settings → Pages → Build and deployment** scegli **Source: GitHub Actions**.
- Il workflow `.github/workflows/deploy.yml` builda e pubblica a ogni push.

### 2. Dominio datamates.it (DNS su register.it)
Il file `public/CNAME` contiene già `datamates.it`. Nel pannello DNS di register.it:

| Tipo | Nome | Valore |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| AAAA | @ | 2606:50c0:8000::153 |
| AAAA | @ | 2606:50c0:8001::153 |
| AAAA | @ | 2606:50c0:8002::153 |
| AAAA | @ | 2606:50c0:8003::153 |
| CNAME | www | `<account-o-org>.github.io` |

Vanno eliminati eventuali record A o CNAME preesistenti su `@` e `www`, ad esempio il parcheggio di register.it.

Poi, in **Settings → Pages → Custom domain**:
- inserisci `datamates.it`;
- quando il controllo DNS passa, attiva **Enforce HTTPS**. Il certificato può richiedere fino a qualche ora.

Consigliato: verifica il dominio in **Settings (account/org) → Pages → Add a domain**. GitHub fornisce un record TXT `_github-pages-challenge-…` che impedisce ad altri di agganciare il dominio.

**Attenzione alla posta:** i record MX della casella @datamates.it (Google Workspace) sono indipendenti dai record sopra. Non toccarli.

### 3. Iscrizioni con Brevo
1. Crea un account Brevo **dedicato a DataMates** e autentica il dominio datamates.it come mittente: Brevo dà i record DKIM, DMARC e TXT da mettere su register.it.
2. Crea una lista, ad esempio "DataMates — iscritti".
3. In **Contatti → Moduli** crea un modulo di iscrizione:
   - campi: EMAIL (obbligatorio) e FIRSTNAME;
   - checkbox di consenso;
   - **double opt-in** attivo;
   - pagina di redirect dopo la conferma: `https://datamates.it/`.
4. In **Condividi → Codice HTML incorporato** copia l'URL dell'attributo `action` del `<form>` (`https://….sibforms.com/serve/…`) e controlla che i nomi dei campi coincidano con quelli di `src/components/SignupForm.astro`.
5. Imposta l'URL come variabile del repo: **Settings → Secrets and variables → Actions → Variables → `PUBLIC_BREVO_FORM_URL`**. Poi rilancia il workflow. In locale va in `.env` (vedi `.env.example`).

Finché la variabile non è impostata, il form mostra "Iscrizioni non ancora attive".

## Da completare prima del lancio
- [ ] Titolare del trattamento ed email di contatto in `src/pages/privacy-policy.astro`.
- [ ] URL del form Brevo (`PUBLIC_BREVO_FORM_URL`).
- [ ] Link alla diretta YouTube e all'evento LinkedIn, quando esistono.
