const galaxies = {
  LMC: {
    name: "Большое Магелланово Облако",
    distances: {
      luminous: 163000,  // Световые года
      parsecs: 50000,    // Парсеки
      kilometers: 1.537e18 // Километры
    },
    image: "images/lmc.jpg"
  },
  Draco: {
    name: "Карликовая галактика в Драконе",
    distances: {
      luminous: 260000,
      parsecs: 80000,
      kilometers: 2.461e18
    },
    image: "images/draco.jpg"
  },
  NGC2419: {
    name: "NGC 2419",
    distances: {
      luminous: 300000,
      parsecs: 90000,
      kilometers: 2.827e18
    },
    image: "images/ngc2419.jpg"
  }
};

let selectedGalaxy = null;

function selectGalaxy(galaxy) {
  selectedGalaxy = galaxies[galaxy];
  document.getElementById("galaxy-name").textContent = selectedGalaxy.name;
  document.getElementById("distance").textContent = "Выберите единицу измерения.";
  document.getElementById("galaxy-image").src = selectedGalaxy.image;
}

function showDistance(unit) {
  if (!selectedGalaxy) {
    document.getElementById("distance").textContent = "Сначала выберите галактику.";
    return;
  }

  const distance = selectedGalaxy.distances[unit];
  let unitName = "";

  if (unit === 'luminous') {
    unitName = "световых лет";
  } else if (unit === 'parsecs') {
    unitName = "парсеков";
  } else if (unit === 'kilometers') {
    unitName = "километров";
  }

  document.getElementById("distance").textContent = `Расстояние до ${selectedGalaxy.name}: ${distance.toLocaleString()} ${unitName}`;
}
