const { scrapeFestivalsData, scrapeFestivalsDataDepartement, scrapeFestivalsDataDomaine } = require('../index');

// Tous les festivals
scrapeFestivalsData()
.then(data => {
  console.log(JSON.stringify(data, null, 2));
})
.catch(error => {
  console.error(error);
});

// Festivals par département
scrapeFestivalsDataDepartement('01')
  .then(data => {
    console.log(JSON.stringify(data, null, 2));
  })
  .catch(error => {
    console.error(error);
  });

  // Festivals par département
  scrapeFestivalsDataDomaine('Musiques actuelles')
  .then(data => {
    console.log(JSON.stringify(data, null, 2));
  })
  .catch(error => {
    console.error(error);
  });

