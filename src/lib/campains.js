const today = new Date();

const campains = [
  {
    id: 1,
    campain_name: "Dog Food Campain",
    description: "Collection of dog food for the shelter",
    start_date: "2025-03-01",
    end_date: "2025-05-31",
    estatus: "active",
    goal: 1000,
    current_value: 500,
    accepted: "money"
  },
  {
    id: 2,
    campain_name: "Coat Campain",
    description: "Collection of coats for the shelter",
    start_date: "2025-05-01",
    end_date: "2025-06-28",
    estatus: "inactive",
    goal: 2000,
    current_value: 1500,
    accepted: "clothes"
  },
  {
    id: 3,
    campain_name: "Campain 3",
    description: "Description of Campain 3",
    start_date: "2025-05-05",
    end_date: "2025-05-10",
    estatus: "active",
    goal: 3000,
    current_value: 2500,
    accepted: "food"
  }
]
  .map((c) => ({
    ...c,
    isExpired: new Date(c.end_date) < today,
  }));

export default campains;
