// type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Named {
  readonly name?: string;
  outputName?: string;
}

interface Aged {
  age: number;
}

interface Greetable extends Named, Aged {
  // interface can be replaced by type in this case
  readonly name?: string;

  greet(phrase: string): void;
}

class Person implements Greetable, Aged {
  name?: string;
  age: number;

  constructor(n: string = 'Default', n1: number) {
    if (n) {
      this.name = n;
    }
    this.age = n1;
  }

  greet(phrase: string): void {
    console.log(phrase + ' ' + this.name);
  }
}

let user1: Person;

user1 = {
  name: 'carlos',
  age: 15,
  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  },
};

user1.greet('Hi');

let user2 = new Person('Igor', 2);
