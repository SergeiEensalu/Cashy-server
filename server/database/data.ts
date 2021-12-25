const works = [
  {
    "id": 1,
    "name": "Bolt Food",
    "description": "Bolt Food delivery from restaurant to customer",
    "paymentPerHour": 10
  },
  {
    "id": 2,
    "name": "Bolt Taxi",
    "description": "Pick up customers from a specific location A and bring them to a specific location B",
    "paymentPerHour": 15
  },
  {
    "id": 2,
    "name": "Math lessons",
    "description": "Teach kids programming",
    "paymentPerHour": 20
  }
]

const stocks = [
  {
    "id": 1,
    "name": "Apple Inc",
    "ticker": "AAPL",
    "price": 100,
    "status": "ACTIVE",
  },  {
    "id": 2,
    "name": "Microsoft Corporation",
    "ticker": "MSFT",
    "price": 50,
    "status": "ACTIVE",
  },
]

const realEstate = [
  {
    "id": 1,
    "name": "Viru tn 24, Tallinn",
    "ticker": "",
    "price": 5784,
    "status": "ACTIVE",
  },  {
    "id": 2,
    "name": "The Delta Centre of the University of Tartu",
    "ticker": "",
    "price": 52121,
    "status": "ACTIVE",
  },
]

const bonds = [
  {
    "id": 1,
    "name": "Inbank bonds",
    "ticker": "InbankBonds",
    "price": 3,
    "status": "ACTIVE",
  },  {
    "id": 2,
    "name": "LHV bonds",
    "ticker": "LHVBonds",
    "price": 12,
    "status": "ACTIVE",
  },
]

const users = [
  {
    "id": 1,
    "firstName": "Sergei",
    "lastName": "Eensalu",
    "personalIdCode": "39610250297",
    "email": "sergei.eensalu@gmail.com"
  },
  {
    "id": 2,
    "firstName": "Marten",
    "lastName": "Tamm",
    "personalIdCode": "39610250297",
    "email": "marten.tamm@gmail.com"
  }
]

const balance = [
  {
    "id": 1,
    "userId": 1,
    "deposit": 1000,
    "happinessRate": 50,
    "loan": 45000,
    "investment": {
      "realEstate": 50000,
      "stocks": 10000,
      "bonds": 3000
    }
  },
  {
    "id": 2,
    "userId": 2,
    "deposit": 0,
    "happinessRate": 10,
    "loan": 100000,
    "investment": {
      "realEstate": 0,
      "stocks": 505,
      "bonds": 0
    }
  }
]

module.exports = {
  works,
  users,
  balance,
  stocks,
  realEstate,
  bonds
}