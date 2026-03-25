---
name: section-image-texte
description: "Modèle de design pour créer des sections avec image + texte sur le site de Marlène Petit. Utilise ce skill dès qu'on te demande de créer une nouvelle section, un nouveau bloc, ou une nouvelle page qui contient une image et du texte côte à côte (ou empilés en mobile). Applique aussi ce skill quand l'utilisateur mentionne : carte blanche, bloc image-texte, section verte, fond sauge, ou demande de reproduire le style du hero sur d'autres parties du site."
---

# Section Image + Texte — Système de Design

Ce skill définit les règles visuelles pour toute section contenant une image et du texte. Ces règles ont été validées par Marlène sur le hero de la page d'accueil et doivent être réutilisées comme modèle sur l'ensemble du site.

## Règle absolue

**Ne JAMAIS reformuler les H1/H2/H3 sans instruction explicite.** Les titres sont rédigés avec soin pour le SEO et le branding : les conserver tels quels.

## Couleurs du projet

```css
--color-gold: #c0a158        /* Or — boutons, accents */
--color-sage: #9ab18b        /* Vert sauge — fonds de section */
--color-green-dark: #3c571d  /* Vert foncé — titres */
--color-white: #ffffff       /* Blanc — cartes */
--color-text: #475467        /* Texte courant */
--color-heading: #383838     /* Titres généraux */
```

## Polices

- **Nunito** — police principale (titres, texte, boutons)
- **Corinthia** — police décorative cursive (taglines uniquement, si besoin)

---

## Structure HTML type

```html
<section class="[nom]-section">
  <div class="[nom]-container">
    <div class="[nom]-content">
      <div class="[nom]-card">
        <h2>Titre de la section</h2>
        <p>Texte descriptif...</p>
        <div class="[nom]-btn-wrap">
          <a href="/lien" class="btn btn-[nom]">Texte du bouton</a>
        </div>
      </div>
    </div>
    <div class="[nom]-image">
      <Image src={image} alt="..." width={934} height={1293} />
    </div>
  </div>
</section>
```

Remplacer `[nom]` par le nom sémantique de la section (ex: `mission`, `parcours`, `methode`).

L'image doit être en pleine résolution (ne pas réduire width/height dans le composant `<Image>`) pour garantir la netteté sur écrans Retina.

---

## CSS Desktop (> 1024px)

### Section

```css
.[nom]-section {
  background-color: var(--color-sage);
  padding: 90px 0;                          /* === AJUSTE : espacement haut/bas === */
  overflow: hidden;
}
```

### Container (grille 2 colonnes)

```css
.[nom]-container {
  max-width: 1200px;                        /* === AJUSTE : largeur max === */
  margin: 0 auto;
  display: grid;
  grid-template-columns: 3fr 2fr;           /* texte 60% / image 40% */
  gap: 0;
  align-items: center;
  padding: 0 50px;                          /* === AJUSTE : marge gauche/droite === */
}
```

Pour inverser (image à gauche, texte à droite), utiliser `grid-template-columns: 2fr 3fr` et placer l'image en premier dans le HTML.

### Carte blanche

```css
.[nom]-card {
  background-color: var(--color-white);
  margin: 20px;                             /* === AJUSTE : marge autour de la carte === */
  padding: 50px;                            /* === AJUSTE : espacement intérieur === */
  position: relative;
  z-index: 2;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);  /* === AJUSTE : ombre de la carte === */
}
```

### Titres dans la carte

```css
/* Titre principal */
.[nom]-card h2 {                            /* ou h1 selon le contexte sémantique */
  font-family: 'Nunito', sans-serif;
  font-size: 30px;
  font-weight: 600;
  color: var(--color-green-dark);
  line-height: 38px;
  letter-spacing: 1.2px;
  text-transform: none;
  margin-bottom: 1.5rem;
}

/* Sous-titre ou paragraphe */
.[nom]-card p {
  font-family: 'Nunito', sans-serif;
  font-size: 19px;
  font-weight: 400;
  color: #424242;
  line-height: 1.6;
  margin-bottom: 2rem;
}
```

### Bouton

```css
.[nom]-btn-wrap {
  text-align: center;                       /* centre le bouton sans toucher au texte */
}

.btn-[nom] {
  display: inline-block;
  background-color: var(--color-gold);
  color: var(--color-white);
  font-family: 'Nunito', sans-serif;
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
  padding: 1em 2em;
  border-radius: 32px;
  transition: var(--transition);
}

.btn-[nom]:hover {
  background-color: #ceb161;
  color: var(--color-white);
}
```

### Image

```css
.[nom]-image {
  display: flex;
  justify-content: start;
  align-items: center;
  margin-top: -53px;                        /* === AJUSTE : décalage haut === */
  margin-right: -53px;                      /* === AJUSTE : décalage droite === */
  margin-bottom: -53px;                     /* === AJUSTE : décalage bas === */
  margin-left: -120px;                      /* === AJUSTE : chevauchement carte === */
  z-index: 0;
  position: relative;
}

.[nom]-image img {
  width: 70%;                               /* === AJUSTE : largeur de l'image === */
  max-width: 420px;                         /* === AJUSTE : largeur max === */
  max-height: 500px;                        /* === AJUSTE : hauteur max === */
  height: auto;
  object-fit: cover;
  object-position: center center;           /* === AJUSTE : cadrage === */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);  /* === AJUSTE : ombre de la photo === */
}
```

---

## CSS Tablette (max-width: 1024px)

```css
@media (max-width: 1024px) {
  .[nom]-section {
    padding: 0;
  }

  .[nom]-container {
    grid-template-columns: 1fr;
    padding: 50px 40px 65px;
  }

  .[nom]-image {
    justify-content: center;
    margin-top: -30px;                      /* === AJUSTE TABLETTE : marge haut === */
    margin-right: 0px;                      /* === AJUSTE TABLETTE : marge droite === */
    margin-bottom: 0px;                     /* === AJUSTE TABLETTE : marge bas === */
    margin-left: 0px;                       /* === AJUSTE TABLETTE : marge gauche === */
  }

  .[nom]-image img {
    width: 55%;
    height: auto;
  }

  .[nom]-card {
    text-align: center;
  }
}
```

---

## CSS Mobile (max-width: 768px)

```css
@media (max-width: 768px) {
  .[nom]-container {
    padding: 20px;
  }

  .[nom]-content {
    padding-right: 0;
  }

  .[nom]-image {
    order: -1;                              /* image en premier sur mobile */
    margin-top: 20px;                       /* === AJUSTE MOBILE : marge haut === */
    margin-right: -67px;                    /* === AJUSTE MOBILE : marge droite === */
    margin-bottom: -50px;                   /* === AJUSTE MOBILE : chevauchement carte === */
    margin-left: -67px;                     /* === AJUSTE MOBILE : marge gauche === */
  }

  .[nom]-image img {
    width: 70%;                             /* === AJUSTE MOBILE : largeur photo === */
    height: auto;
    max-height: 300px;                      /* === AJUSTE MOBILE : hauteur max === */
  }

  .[nom]-card {
    position: relative;
    z-index: 2;
    margin-top: 0px;                        /* === AJUSTE MOBILE : marge haut carte === */
    margin-right: 20px;                     /* === AJUSTE MOBILE : marge droite carte === */
    margin-bottom: 20px;                    /* === AJUSTE MOBILE : marge bas carte === */
    margin-left: 20px;                      /* === AJUSTE MOBILE : marge gauche carte === */
    padding: 20px;                          /* === AJUSTE MOBILE : padding carte === */
    text-align: center;
  }

  .btn-[nom] {
    padding: 0.7em 1.5em;                   /* === AJUSTE MOBILE : padding bouton === */
    font-size: 16px;                        /* === AJUSTE MOBILE : taille bouton === */
  }
}
```

---

## Checklist avant livraison

- [ ] Fond vert sauge sur la section
- [ ] Carte blanche avec ombre de boîte
- [ ] Image avec ombre de boîte et marges négatives (chevauchement)
- [ ] Bouton centré dans la carte, or avec hover
- [ ] Commentaires `/* === AJUSTE ... === */` sur toutes les valeurs ajustables
- [ ] Responsive tablette : grille 1 colonne, carte centrée
- [ ] Responsive mobile : image en premier, chevauchement, bouton compact
- [ ] Titres H1/H2/H3 conservés tels quels (jamais reformulés)
- [ ] Image en pleine résolution (pas de width/height réduits dans `<Image>`)
