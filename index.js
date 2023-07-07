const axios = require('axios');

// Tous les festivals
async function scrapeFestivalsData() {
  try {
    const response = await axios.get(
            'https://data.culture.gouv.fr/api/records/1.0/search/?dataset=panorama-des-festivals&q=&rows=9999'
        );
    
    // Traitez les données de réponse ici selon vos besoins
    const festivalsData = response.data;
    
    return festivalsData;
  } catch (error) {
    console.error('Une erreur s\'est produite lors de la récupération des données des festivals :', error);
    throw error;
  }
}
// Festivals par département
  async function scrapeFestivalsDataDepartement(departement) {
    try {
      const response = await axios.get(
              `https://data.culture.gouv.fr/api/records/1.0/search/?dataset=panorama-des-festivals&q=&rows=9999&refine.departement=${departement}`
          );
      
      // Traitez les données de réponse ici selon vos besoins
      const festivalsData = response.data;
      
      return festivalsData;
    } catch (error) {
      console.error('Une erreur s\'est produite lors de la récupération des données des festivals :', error);
      throw error;
    }
  }
  // Festivals par domaine
  async function scrapeFestivalsDataDomaine(domaine) {
    try {
      const response = await axios.get(
              `https://data.culture.gouv.fr/api/records/1.0/search/?dataset=panorama-des-festivals&q=&lang=test&rows=9999&refine.domaine=${domaine}`
          );
      
      // Traitez les données de réponse ici selon vos besoins
      const festivalsData = response.data;
      
      return festivalsData;
    } catch (error) {
      console.error('Une erreur s\'est produite lors de la récupération des données des festivals :', error);
      throw error;
    }
  }

module.exports = {
  scrapeFestivalsData, scrapeFestivalsDataDepartement, scrapeFestivalsDataDomaine
};