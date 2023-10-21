import mongoose from "../db/conn.js";
import financeBarChartSchema from "../model/financeBarChart.js";
import financeBarChartModel from "../model/financeBarChart.js";

const financeBarChart = mongoose.model("financeBarChart", financeBarChartModel);

//function to create financeBarChart
export function createFinanceBarChart(req, res) {
  const financeBarChart = new financeBarChartModel({
    date: req.body.date,
    expenses: req.body.expenses,
    income: req.body.income,
  });
  financeBarChart
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
}

export function createAutomateTransactionExpence(data) {
  const { cost, date } = data;
  console.log(cost);  
  const newFinanceBarChart = new financeBarChart({
    date: date,
    expences: cost,
  });
  return newFinanceBarChart.save();
}

//function to get all financeBarChart
export function getAllFinanceBarChart(req, res) {
  financeBarChart
    .find()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
}

//group by year and get sum of expences and income
export function getFinanceBarChartByYear(req, res) {
  financeBarChart.aggregate([
    {
      $group: {
        _id: "$year",
        totalExpenses: { $sum: { $toInt: "$expences" } },
        totalIncome: { $sum: { $toInt: "$income" } },
      },
    }, 
    {
      $sort: {
        _id: 1 // Sort by _id in ascending order (year)
      }
    }
  ])
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
}






// export function getAllFinanceBarChart(req, res) {
//     financeBarChart.aggregate([
//     {r
//       $group: {
//         _id: null,
//         total: { $sum: '$expences' } // Replace 'fieldToSum' with the actual field name
//       }
//     }
//   ])
//     .then((result) => {
//       // The result is an array with a single object
//       const sum = result.length > 0 ? result[0].total : 0;
//       res.json({ sum });
//       cosole.log(sum);
//     })
//     .catch((err) => {
//       res.status(500).json({ error: err.message });
//     });
// }
