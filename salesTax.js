const salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};
const companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
    // totalSales: ...,
    // totalTaxes: ...
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

const getSalesTotal = (company) => {
  return company.sales.reduce((a, b) => {
    return a + b;
  }, 0);
};

const getTaxTotal = (company) => {
  let taxRate = salesTaxRates[company.province]
  return getSalesTotal(company) * taxRate;
};

const salesTaxReport = (companies, taxRates) => {
  let result = {}
  companies.forEach( (company) => {
    if (!result[company.name]) {
      result[company.name] =
      {
        totalSales: getSalesTotal(company),
        totalTaxes: getTaxTotal(company)
      }
      let salesTotal = getSalesTotal(company);
    } else {
      result[company.name].totalSales += getSalesTotal(company)
      result[company.name].totalTaxes += getTaxTotal(company)
    }
  })
  return result
}

console.log(salesTaxReport(companySalesData, salesTaxRates));

// var results = salesTaxReport(companySalesData, salesTaxRates);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/
