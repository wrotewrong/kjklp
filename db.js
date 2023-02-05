const db = {
  employees: [
    {
      firstName: 'Andrzej',
      lastName: 'Popiołek',
      unit: 'RDLP w Łodzi',
      job: 'Specjalist SL',
    },
    {
      firstName: 'Dariusz',
      lastName: 'Pieniak',
      unit: 'RDLP w Łodzi',
      job: 'Dyrektor Regionalny',
    },
    {
      firstName: 'Sylwester',
      lastName: 'Spała',
      unit: 'RDLP w Łodzi',
      job: 'Naczelnik',
    },
  ],
  units: [
    {
      name: 'RDLP w Łodzi',
      site: 'lodz.lasy.gov.pl',
      director: '',
      economyDirector: '',
      forestManagmentDirector: '',
    },
  ],
};

module.exports = db;
