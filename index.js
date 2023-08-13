//  Currency Converter.
// The TypeScript console app is used to convert currencies: the users enter a certain amount of money in one currency and set the currency they want to check the monetary value of.
// While developing the app, the beginners can master variables, algorithms, loops, if statements, and other TypeScript concepts.
import inquirer from "inquirer";
import chalk from "chalk";
const ExchangeRates = {
    USD: 1,
    PKR: 285.40,
    EUR: 0.93,
    GBP: 0.79,
    AED: 3.67,
    KWD: 0.31,
};
console.log(chalk.cyan("=================================="));
console.log(chalk.cyanBright.bold("\tCurrency Converter"));
console.log(chalk.cyan("==================================\n"));
let { money, fromCurrency, toCurrency } = await inquirer.prompt([
    {
        message: "Select the Currency:",
        type: "rawlist",
        name: "fromCurrency",
        choices: Object.keys(ExchangeRates),
    },
    {
        message: "Enter Amount:",
        type: 'number',
        name: 'money',
    },
    {
        message: "Select the Currency you want to Convert to:",
        type: "rawlist",
        name: "toCurrency",
        choices: Object.keys(ExchangeRates),
    }
]);
money = Number(money);
const convertedCurrency = (Number(money) / ExchangeRates[fromCurrency]) * ExchangeRates[toCurrency];
console.log(chalk.whiteBright(`\n\t${fromCurrency}:\t ${money}`));
console.log(chalk.whiteBright(`\t${toCurrency}:\t ${ExchangeRates[toCurrency]}`));
console.log(chalk.blackBright.bold("\n-------------------------------"));
console.log(chalk.whiteBright.bold(`\tAmount:\t ${convertedCurrency.toFixed(2)}`));
console.log(chalk.blackBright.bold("-------------------------------"));
