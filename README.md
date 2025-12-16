# TechShop E-commerce

Une application e-commerce moderne développée avec React, Redux Toolkit et React Router. Cette boutique en ligne permet aux utilisateurs de parcourir des produits, gérer un panier d'achat et créer une liste de souhaits (wishlist).

## Aperçu du Projet

TechShop est une application de commerce électronique qui démontre l'utilisation de Redux Toolkit pour la gestion d'état dans une application React. Le projet met en œuvre les fonctionnalités essentielles d'une boutique en ligne moderne.

### Fonctionnalités Principales

- **Catalogue de Produits** : Parcourir et découvrir une sélection de produits technologiques
- **Panier d'Achat** : Ajouter/supprimer des produits avec gestion des quantités
- **Liste de Souhaits** : Sauvegarder vos produits favoris pour plus tard
- **Navigation Fluide** : Interface utilisateur intuitive avec React Router
- **Gestion d'État Centralisée** : Redux Toolkit pour une gestion d'état prévisible
- **Interface Responsive** : Design adaptatif pour tous les appareils

## Technologies Utilisées

- **React 18** - Bibliothèque JavaScript pour construire l'interface utilisateur
- **Redux Toolkit** - Gestion d'état simplifiée et moderne
- **React Router DOM** - Navigation et routing côté client
- **React Redux** - Intégration officielle de React et Redux
- **Vite** - Build tool moderne et rapide
- **CSS3** - Styling personnalisé et responsive

## Structure du Projet

```
techshop-ecommerce/
├── src/
│   ├── components/         # Composants réutilisables
│   │   ├── Navbar.jsx     # Barre de navigation avec badge panier
│   │   ├── ProductCard.jsx # Carte produit
│   │   └── CartSidebar.jsx # Panneau latéral du panier
│   ├── pages/             # Pages de l'application
│   │   ├── Home.jsx       # Page d'accueil
│   │   ├── Catalogue.jsx  # Page catalogue complet
│   │   └── Wishlist.jsx   # Page liste de souhaits
│   ├── redux/             # Configuration Redux
│   │   ├── store.js       # Store Redux
│   │   ├── cartSlice.js   # Logique du panier
│   │   └── wishlistSlice.js # Logique de la wishlist
│   ├── data/              # Données statiques
│   │   └── products.js    # Liste des produits
│   ├── App.jsx            # Composant racine
│   └── main.jsx           # Point d'entrée
├── index.html             # Template HTML
├── vite.config.js         # Configuration Vite
└── package.json           # Dépendances du projet
```

## Installation et Démarrage

### Prérequis

- Node.js (version 16 ou supérieure)
- npm 

### Étapes d'Installation

1. **Cloner le repository**
   ```bash
   git clone https://github.com/med-more/mini-application-e-commerce-avec-RTK.git
   cd mini-application-e-commerce-avec-RTK
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Lancer le serveur de développement**
   ```bash
   npm run dev
   ```

4. **Ouvrir l'application**
   - L'application sera accessible sur `http://localhost:5173/`

### Scripts Disponibles

- `npm run dev` - Démarre le serveur de développement
- `npm run build` - Crée une version de production
- `npm run preview` - Prévisualise la version de production

## Fonctionnement de Redux

Le projet utilise Redux Toolkit avec deux slices principaux :

### Cart Slice (Panier)
- `addToCart` - Ajoute un produit au panier
- `removeFromCart` - Supprime un produit du panier
- `updateQuantity` - Modifie la quantité d'un produit
- `selectCartTotal` - Calcule le prix total

### Wishlist Slice (Liste de Souhaits)
- `addToWishlist` - Ajoute un produit aux favoris
- `removeFromWishlist` - Retire un produit des favoris
- `toggleWishlist` - Bascule l'état favori d'un produit

## Architecture des Composants

### Composants Principaux

**Navbar**
- Affiche le logo et les liens de navigation
- Badge dynamique montrant le nombre d'articles dans le panier
- Bouton pour ouvrir le panneau du panier

**ProductCard**
- Composant réutilisable pour afficher un produit
- Boutons d'action (ajouter au panier, ajouter aux favoris)
- Design responsive et moderne

**CartSidebar**
- Panneau latéral qui affiche les produits du panier
- Gestion des quantités (+/- pour chaque produit)
- Calcul automatique du total
- Bouton de suppression pour chaque article

### Pages

**Home** - Page d'accueil avec sélection de produits vedettes
**Catalogue** - Liste complète de tous les produits disponibles
**Wishlist** - Affichage des produits favoris de l'utilisateur

## Concepts Clés pour Présentation

### 1. Redux Toolkit
- Simplifie la configuration de Redux
- Utilise des "slices" pour organiser la logique
- Mutations immuables facilitées avec Immer

### 2. React Router
- Navigation côté client sans rechargement de page
- Routes définies de manière déclarative
- Navigation programmatique avec `useNavigate`

### 3. Hooks React & Redux
- `useSelector` - Lire les données du store Redux
- `useDispatch` - Envoyer des actions au store
- `useState` - Gérer l'état local des composants
- `useNavigate` - Navigation programmatique

### 4. Props et Réutilisabilité
- Composants paramétrables via props
- Un seul composant ProductCard utilisé partout
- Code DRY (Don't Repeat Yourself)



## Licence

Ce projet est un projet éducatif créé à des fins d'apprentissage.

## Auteur

Votre Nom - [med-more](https://github.com/med-more)

## Remerciements

- Design inspiré des meilleures pratiques e-commerce
- Icons et ressources provenant de sources ouvertes
- Communauté React et Redux pour la documentation

---

**Note**: Ce projet a été créé dans un contexte éducatif pour démontrer la maîtrise de React, Redux Toolkit et les concepts de développement web moderne.
