# Instructions pour Claude - Site Marlène Petit

## Mode de travail

- **Ne pas demander d'autorisation** pour chaque écriture de fichier (pas de confirmation outil par outil).
- **Toujours résumer les changements prévus** avant de les appliquer, et attendre la validation de Marlène avant de modifier les fichiers.

## Règles éditoriales

- **Ne jamais reformuler les balises H1/H2/H3 sans instruction explicite.** À défaut, conserver tous les mots-clés métier présents dans l'original même en reformulant.
- Les titres sont rédigés avec soin pour le SEO et le branding : ne pas les modifier, les raccourcir ou les paraphraser.

## Branding

- Couleur principale : or #c0a158
- Couleur vert sauge : #9ab18b
- Couleur vert foncé : #3c571d
- Police principale : Nunito
- Police décorative : Corinthia (taglines cursives, logo header, nom footer)
- Ton : professionnel, bienveillant, expert

## Règles CSS

- **Toujours utiliser des pixels (px)** pour toutes les valeurs CSS : `font-size`, `margin`, `padding`, `gap`, `width`, `height`, `top`, `left`, etc. **Ne jamais utiliser `rem` ni `em`**. Seule exception tolérée : `line-height` en valeur relative (ex: `1.6`).
- **Ajouter un commentaire `/* === AJUSTE : description === */`** sur chaque valeur ajustable pour que Marlène puisse les modifier facilement dans le code.

## Styles récurrents

- **Citations / blockquotes** : `border-left: 4px solid var(--color-gold)`, `background-color: rgba(192, 161, 88, 0.08)`, texte en italique, coins arrondis à droite.
- **Boutons** : style unique `.btn` (or, arrondi 32px, Nunito 16px bold). Sur fond sauge, ajouter la classe `.btn-on-sage` (définie dans `global.css`) pour l'ombre blanche décalée haut-gauche, qui raccourcit au survol avec halo or.
- **H2 (`.section-title`)** : `margin-bottom: 40px` sur tout le site.

## Responsive

- **Breakpoint tablette** : `1024px` — réorganisation des éléments (ex : `order: -1` pour passer l'image au-dessus).
- **Breakpoint mobile** : `768px` — layout 1 colonne, menu hamburger, footer 1 colonne.

## Serveur de développement

- Lancer avec `npx astro dev --host 0.0.0.0` pour accès LAN (téléphone)
- Port par défaut : 4321
