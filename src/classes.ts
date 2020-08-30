console.log('your code goes here .....!');

abstract class Department {
  // private readonly id: string;
  // private name: string;
  private employees: string[] = [];

  static fiscalYear = 2020;

  constructor(protected readonly id: string, public name: string) {
    //shortcat to create properties
    //this.name = n;
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }

  static createEmployee(name: string) {
    return { name: name };
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, 'IT'); // call super first
  }
  describe(this: ITDepartment) {
    console.log(`Department: ${this.name} ${this.id}`);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance:AccountingDepartment;

  get mostRecentReport() {
    // getter method

    return this.lastReport;
  }

  set mostRecentReport(report: string) {
    //setter
    this.reports.unshift(report);
    this.lastReport = this.reports[0];
  }

  private constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = this.reports[0];
  }

  static getInstance(){ //singleton
    if(this.instance) return this.instance 
    else{
      this.instance = new AccountingDepartment('23234', ['Rep1', 'Rep2']);
      return this.instance;
    }
  }

  printReports() {
    console.log(this.reports);
  }

  describe(this: AccountingDepartment) {
    console.log(`Department: ${this.name} ${this.id}`);
  }
}

const itDepartment = new ITDepartment('23234', ['Max']);

console.log(itDepartment);

const accounting = AccountingDepartment.getInstance();
accounting.describe();

accounting.addEmployee('max');
accounting.addEmployee('manu');

// accounting.employees[2] = 'Anna';  // setter getter private would be better

accounting.printEmployeeInformation();

accounting.mostRecentReport = 'stuff';

accounting.printReports();

console.log(accounting.mostRecentReport); // getter is used

const employee1 = Department.createEmployee('Max');
console.log(employee1);
console.log(Department.fiscalYear);

// const accountingCopy = { name: 's', describe: accounting.describe };
// //this refers here to accountingCopy which has no name property
// accountingCopy.describe();
