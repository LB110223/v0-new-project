// Ce script charge les données depuis le fichier JSON et les met dans localStorage
document.addEventListener('DOMContentLoaded', async function() {
  try {
    // Ajouter un paramètre timestamp pour éviter la mise en cache
    const timestamp = new Date().getTime();
    const response = await fetch(`/data/site-data.json?t=${timestamp}`);
    
    if (!response.ok) {
      throw new Error('Impossible de charger les données');
    }
    
    const data = await response.json();
    
    // Mettre les données dans localStorage
    if (data.testimonials) localStorage.setItem('testimonials_content', JSON.stringify(data.testimonials));
    if (data.team) localStorage.setItem('team_members', JSON.stringify(data.team));
    if (data.services) localStorage.setItem('services_content', JSON.stringify(data.services));
    if (data.hero) localStorage.setItem('hero_content', JSON.stringify(data.hero));
    if (data.general) localStorage.setItem('general_info', JSON.stringify(data.general));
    if (data.caseStudies) localStorage.setItem('case_studies', JSON.stringify(data.caseStudies));
    if (data.media) localStorage.setItem('media_content', JSON.stringify(data.media));
    
    console.log('Données chargées avec succès depuis le fichier JSON');
    
    // Rafraîchir la page si les données ont été chargées pour la première fois
    if (localStorage.getItem('data_loaded') !== 'true') {
      localStorage.setItem('data_loaded', 'true');
      window.location.reload();
    }
  } catch (error) {
    console.error('Erreur lors du chargement des données:', error);
  }
});
