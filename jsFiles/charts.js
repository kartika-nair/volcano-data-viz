const ctx1 = document.getElementById('c1').getContext('2d');
const ctx2 = document.getElementById('c2').getContext('2d');
const ctx3 = document.getElementById('c3').getContext('2d');

let delayed;

const labels1 = ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020',];

const labels2 = ['Antarctica', 'Australia', 'Cape Verde', 'Chile', 'Chile-Argentina', 'Colombia', 'Costa Rica', 'DR Congo', 'Ecuador', 'Ethiopia', 'France', 'Grenada', 'Guatemala', 'Iceland', 'Indonesia', 'Italy', 'Japan', 'Kuril Islands', 'Mexico', 'New Zealand', 'Nicaragua', 'Papua New Guinea', 'Peru', 'Philippines', 'Russia', 'Solomon Islands', 'Spain', 'Tanzania', 'Tonga', 'Undersea', 'United Kingdom', 'United States', 'Vanuatu', 'Yemen'];

const labels3 = ['Caldera', 'Complex', 'Lava cone', 'Pyroclastic shield', 'Shield', 'Stratovolcano', 'Submarine'];


const data1 = {
  labels: labels1, 
  datasets:
  [{
    data: [67,21,15,13,14,5,3,6,3,1,2],
    label: 'Explosions by Year',
    fill: true,
    backgroundColor: "#cc4d12",
  },
  ],
};

const data2 = {
  labels: labels2, 
  datasets:
  [{
    data: [1, 1, 1, 7, 1, 2, 4, 2, 4, 1, 1, 1, 3, 3, 24, 2, 12, 1, 2, 2, 5, 6, 1, 3, 11, 1, 1, 1, 1, 1, 4, 9, 4, 1],
    label: 'Explosions by Country',
    fill: true,
    backgroundColor: "#cc4d12",
  },
  ],
};

const data3 = {
  labels: labels3, 
  datasets:
  [{
    data: [12, 14, 1, 2, 10, 80, 5],
    label: 'Explosions by Volcano Type',
    fill: true,
    backgroundColor: "#cc4d12",
  },
  ],
};



const config1 = {
  type: 'bar',
  data: data1,
  options: {
    plugins:{
      legend: {
        labels: {
          font:{
            size: 20,
          },
          color:'white'
        }
      },
    },
    scales: {
      y: {
        ticks: {
          font:{
            size:20,
            color:'white'
          },
          color:'white',
          stepSize: 10,
          beginAtZero: true
        }
      },
      x: {
        ticks: {
          font:{
            size:17,
          },
          color:'white',
        }
      }
    },
    responsive: true,
    animation:{
      onComplete: () => {
        delayed = true;
      },
      delay: (context) =>{
        let delay = 0;
        if(context.type === "data" && context.mode === "default" && !delayed){
          delay = context.dataIndex * 500 + context.datasetIndex * 100;
        }
        return delay;
      },
    },
  },
};

const config2 = {
  type: 'bar',
  data: data2,
  options: {
    plugins:{
      legend: {
        labels: {
          font:{
            size: 20,
          },
          color:'white'
        }
      },
    },
    scales: {
      y: {
        ticks: {
          font:{
            size:20,
            color:'white'
          },
          color:'white',
          beginAtZero: true
        }
      },
      x: {
        ticks: {
          font:{
            size:17,
          },
          color:'white',
        }
      }
    },
    responsive: true,
    animation:{
      onComplete: () => {
        delayed = true;
      },
      delay: (context) =>{
        let delay = 0;
        if(context.type === "data" && context.mode === "default" && !delayed){
          delay = context.dataIndex * 300 + context.datasetIndex * 100;
        }
        return delay;
      },
    },
  },
};

const config3 = {
  type: 'bar',
  data: data3,
  options: {
    plugins:{
      legend: {
        labels: {
          font:{
            size: 20,
          },
          color:'white'
        }
      },
    },
    scales: {
      y: {
        ticks: {
          font:{
            size:20,
            color:'white'
          },
          color:'white',
          stepSize: 10,
          beginAtZero: true
        }
      },
      x: {
        ticks: {
          font:{
            size:17,
          },
          color:'white',
        }
      }
    },
    responsive: true,
    animation:{
      onComplete: () => {
        delayed = true;
      },
      delay: (context) =>{
        let delay = 0;
        if(context.type === "data" && context.mode === "default" && !delayed){
          delay = context.dataIndex * 300 + context.datasetIndex * 100;
        }
        return delay;
      },
    },
  },
};

const chartExp = new Chart(ctx1, config1);
const chartExp2 = new Chart(ctx2, config2);
const chartExp3 = new Chart(ctx3, config3);