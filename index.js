let startingFreelanceArray = [
  { name: 'Alice', occupation: 'Writer', startingPrice: 30 },
  { name: 'Bob', occupation: 'Teacher', startingPrice: 50 },
  { name: 'Carol', occupation: 'Programmer', startingPrice: 70 },
];

const maxFreelancers = 7;

const randomFreelancers = [
  { name: 'Dr. Slice', startingPrice: 25, occupation: 'gardener' },
  { name: 'Dr. Pressure', startingPrice: 51, occupation: 'programmer' },
  { name: 'Prof. Possibility', startingPrice: 43, occupation: 'teacher' },
  { name: 'Prof. Prism', startingPrice: 81, occupation: 'teacher' },
  { name: 'Dr. Impulse', startingPrice: 43, occupation: 'teacher' },
  { name: 'Prof. Spark', startingPrice: 76, occupation: 'programmer' },
  { name: 'Dr. Wire', startingPrice: 47, occupation: 'teacher' },
  { name: 'Prof. Goose', startingPrice: 72, occupation: 'driver' },
];

const freelancerTableContainer = document.createElement('table');

const addFreelancerIndervalId = setInterval(addFreelancer, 1000);

render();

function calculateAvgPrice() {
  const averagePrice =
    startingFreelanceArray
      .map((freelancer) => freelancer.startingPrice)
      .reduce((acc, currentVal) => acc + currentVal, 0) /
    startingFreelanceArray.length;
  return averagePrice;
}

function render() {
  clearTable();
  const availableFreelancerContainer = document.getElementById(
    'available-freelancers'
  );

  const keys = Object.keys(startingFreelanceArray[0]);

  const averageSalary = document.getElementById('average-salary');
  averageSalary.textContent = `The average starting price is $${Math.floor(
    calculateAvgPrice()
  )}`;

  const tableHeaderElement = document.createElement('tr');
  keys.forEach((key) => {
    if (key === 'name') {
      key = 'Name';
    }
    if (key === 'occupation') {
      key = 'Occupation';
    }
    if (key === 'startingPrice') {
      key = 'Starting Price';
    }

    let tableHeaderCell = document.createElement('th');
    tableHeaderCell.innerText = key;
    tableHeaderElement.appendChild(tableHeaderCell);
  });

  freelancerTableContainer.appendChild(tableHeaderElement);

  startingFreelanceArray.forEach((freelancer) => {
    const tableRowElement = document.createElement('tr');
    let tableNameDataElement = document.createElement('td');
    let tableOccupationDataElement = document.createElement('td');
    let tablePriceDataElement = document.createElement('td');
    tableNameDataElement.textContent = freelancer.name;
    tableOccupationDataElement.textContent = freelancer.occupation;
    tablePriceDataElement.textContent = `$${freelancer.startingPrice}`;
    tableRowElement.append(
      tableNameDataElement,
      tableOccupationDataElement,
      tablePriceDataElement
    );
    freelancerTableContainer.appendChild(tableRowElement);
  });

  availableFreelancerContainer.append(freelancerTableContainer);
}

function addFreelancer() {
  const freelancer =
    randomFreelancers[Math.floor(Math.random() * randomFreelancers.length)];

  startingFreelanceArray.push(freelancer);
  render();

  if (startingFreelanceArray.length >= maxFreelancers) {
    clearInterval(addFreelancerIndervalId);
  }
}

function clearTable() {
  freelancerTableContainer;
  while (freelancerTableContainer.childNodes.length) {
    freelancerTableContainer.removeChild(freelancerTableContainer.firstChild);
  }
}

addFreelancer();
