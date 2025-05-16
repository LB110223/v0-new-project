# Guide de configuration de l'intégration Notion

Ce guide vous explique comment configurer l'intégration Notion pour votre formulaire de contact Smart Impulsion.

## 1. Créer une intégration Notion

1. Rendez-vous sur [https://www.notion.so/my-integrations](https://www.notion.so/my-integrations)
2. Cliquez sur le bouton **+ New integration**
3. Remplissez les informations suivantes :
   - **Name**: Smart Impulsion Contact Form
   - **Logo**: Téléchargez le logo de votre entreprise (optionnel)
   - **Associated workspace**: Sélectionnez votre espace de travail Notion
4. Dans la section **Capabilities**, assurez-vous que les options suivantes sont activées :
   - **Read content**
   - **Update content**
   - **Insert content**
5. Cliquez sur **Submit** pour créer l'intégration
6. Sur la page suivante, copiez votre **Internal Integration Token** (c'est votre `NOTION_API_KEY`)

## 2. Créer une base de données Notion

1. Ouvrez Notion et accédez à l'espace de travail où vous souhaitez stocker les contacts
2. Créez une nouvelle page
3. Tapez `/database` et sélectionnez **Table - Full page**
4. Configurez les colonnes suivantes :
   - **Nom** (type Title) - Laissez cette colonne par défaut
   - **Email** (type Email)
   - **Entreprise** (type Text)
   - **Service** (type Select) avec les options :
     - Smart Training (Formation)
     - Smart Analyse (Audit)
     - Smart Action (Accompagnement)
     - Accompagnement complet
     - Autre
   - **Message** (type Text)
   - **Date** (type Date)
5. Nommez votre base de données (par exemple "Contacts Smart Impulsion")
6. Cliquez sur **Share** en haut à droite, puis sur **Invite**
7. Dans la section **Invite with link**, cliquez sur **Copy link**
8. L'URL ressemblera à : `https://www.notion.so/workspace/a8aec43384f447ed84390e8e42c2e089`
9. L'ID de la base de données est la partie après le dernier slash : `a8aec43384f447ed84390e8e42c2e089` (c'est votre `NOTION_DATABASE_ID`)

## 3. Partager la base de données avec l'intégration

1. Ouvrez votre base de données Notion
2. Cliquez sur les trois points (**...**) en haut à droite
3. Sélectionnez **Add connections**
4. Recherchez et sélectionnez l'intégration que vous avez créée ("Smart Impulsion Contact Form")
5. Cliquez sur **Confirm**

## 4. Configurer les variables d'environnement

1. Créez un fichier `.env.local` à la racine de votre projet
2. Ajoutez les variables suivantes :
   \`\`\`
   NOTION_API_KEY=secret_votreCléAPINotion
   NOTION_DATABASE_ID=votre_database_id
   \`\`\`
3. Remplacez `secret_votreCléAPINotion` par votre Internal Integration Token
4. Remplacez `votre_database_id` par l'ID de votre base de données

## 5. Installer la dépendance Notion

Exécutez la commande suivante dans votre terminal :

\`\`\`bash
npm install @notionhq/client
\`\`\`

## 6. Tester l'intégration

1. Redémarrez votre serveur de développement
2. Accédez à votre formulaire de contact
3. Remplissez et soumettez le formulaire
4. Vérifiez que les données apparaissent dans votre base de données Notion

## Dépannage

Si vous rencontrez des problèmes :

1. **Les données n'apparaissent pas dans Notion** :
   - Vérifiez que vos variables d'environnement sont correctement configurées
   - Assurez-vous que l'intégration a bien accès à la base de données
   - Consultez les logs du serveur pour voir les erreurs potentielles

2. **Erreur d'autorisation** :
   - Vérifiez que votre `NOTION_API_KEY` est correct
   - Assurez-vous que l'intégration a les permissions nécessaires

3. **Erreur de structure de base de données** :
   - Vérifiez que les noms et types de colonnes dans votre base de données correspondent à ceux attendus par le code

## Personnalisation

Vous pouvez personnaliser cette intégration en modifiant les fichiers suivants :

- `lib/notion.ts` : Pour modifier la structure des données envoyées à Notion
- `components/contact.tsx` : Pour modifier les champs du formulaire
- `app/api/contact/route.ts` : Pour modifier la logique de traitement des soumissions

## Ressources utiles

- [Documentation de l'API Notion](https://developers.notion.com/)
- [Documentation du client Notion pour JavaScript](https://github.com/makenotion/notion-sdk-js)
\`\`\`

Ajoutons un utilitaire pour vérifier les variables d'environnement :
