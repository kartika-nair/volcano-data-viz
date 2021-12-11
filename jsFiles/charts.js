const ctx = document.getElementById('c1').getContext('2d');
const labels = ['2000', '2001', '2002', '2003',  '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020',];
const data = {
  labels, datasets:
  [{
    data: [34, 26, 37, 22, 45, 37, 29, 36, 39, 29, 67, 21, 15, 13, 14, 5, 3, 6, 3, 1, 2],
    label: 'Explosions by Year',
  },
  ],
};

const config = {
  type: 'bar',
  data: data,
  options: {
    responsive: true,
  },
};

const chartExp = new Chart(ctx, config);