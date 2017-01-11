const add = (sum, item) => {
  return sum + item;
}

const findTotalSalesByProvince = (companies) => {
  let totalSales = []
  companies.forEach((company) => {
      totalSales.push(
        {
          company: company.name,
          province: company.province,
          total_sales : company.sales.reduce(add, 0)
        }
      );
  })
  return totalSales;
}

const findTotalSalesByCompany = (companies) => {
  let companyTotalSales = {}
  companies.forEach((company) => {
    if (!companyTotalSales[company.name]) {
      companyTotalSales[company.name] = company.sales.reduce(add, 0)
    } else {
      companyTotalSales[company.name] += company.sales.reduce(add, 0)
    }
  })
  return companyTotalSales;
}

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
  // sum all values in company.sales
  return company.sales.reduce((a, b) => {
    return a + b;
  }, 0);
};

const getTaxTotal = (company) => {
  let taxRate = salesTaxRates[company.province]
  return getSalesTotal(company) * taxRate;
};

const calculateSalesTax = (companies, taxRates) => {
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

console.log(calculateSalesTax(companySalesData, salesTaxRates));

let salesDataByProvince = findTotalSalesByProvince(companySalesData);
  // result of findTotalSalesByProvince
  // [ { company: 'Telus', province: 'BC', total_sales: 700 },
  //   { company: 'Bombardier', province: 'AB', total_sales: 800 },
  //   { company: 'Telus', province: 'SK', total_sales: 600 } ]

let totalNationalSalesByCompany = findTotalSalesByCompany(companySalesData);
  //result of findTotalSalesByCompany
  // { Telus: 1300, Bombardier: 800 }

// const taxesByProvince = (company, taxes) => {
//   for (let taxRate in taxes) {
//       console.log(value)
//       // if (value.province == Object.keys(taxes
//       taxes.forEach((province) => {
//
//       })
//     })
//   }
// }
//
// console.log(taxesByProvince(salesTaxRates))
// const calculateSalesTax = (salesData, taxRates) => {
//
// }

// const calculateTax = (sales, taxRate) => {
//   let companyTaxRate;
//   if (salesTaxRates.hasOwnProperty(taxRate))
// }

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
