const { scrapeFestivalsData, scrapeFestivalsDataDepartement, scrapeFestivalsDataDomaine } = require('./index.js');

describe('Festival Scraper', () => {
  test('Scrape festivals data', async () => {
    const festivalsData = await scrapeFestivalsData();
    // Vérifiez les données des festivals ici
    expect(festivalsData).toBeDefined();
    expect(festivalsData.records.length).toBeGreaterThan(0);

  });
  test('Scrape festivals data Departement', async () => {

    const festivalsDataDepartement = await scrapeFestivalsDataDepartement('01');
    // Vérifiez les données des festivals ici
    expect(festivalsDataDepartement).toBeDefined();
    expect(festivalsDataDepartement.records.length).toBeGreaterThan(0);

  });
  test('Scrape festivals data Domaine', async () => {

    const festivalsDataDomaine = await scrapeFestivalsDataDomaine('Musiques actuelles');
    // Vérifiez les données des festivals ici
    expect(festivalsDataDomaine).toBeDefined();
    expect(festivalsDataDomaine.records.length).toBeGreaterThan(0);

  });
});

