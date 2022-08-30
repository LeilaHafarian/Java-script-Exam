import { verify, TestCase, expectArray, setReporters, ConsoleReporter, HtmlReporter, expectValue } from './test-runner.js'
import * as questions from '../questions.js'

setReporters([
  new ConsoleReporter(),
  new HtmlReporter(),
]);

await verify('A', questions.A, [
  new TestCase(expectArray(['Köttbullar', 'Pasta', 'Ris', 'Potatis'])),
]);

await verify('B', questions.B, [
  new TestCase(expectArray([4, 8, 12]), [2, 4, 6]),
  new TestCase(expectArray([28, 48]), [14, 24]),
  new TestCase(expectArray([2, 8, 10, 18]), [1, 4, 5, 9]),
  new TestCase(expectArray([]), []),
]);

await verify('C', questions.C, [
  new TestCase(expectArray(['The type is car and weight is 2000', 'The type is bike and weight is 20']), [{ type: 'car', weight: 2000 }, { type: 'bike', weight: 20 }]),
  new TestCase(expectArray(['The type is airplane and weight is 40000', 'The type is boat and weight is 3000']), [{ type: 'airplane', weight: 40000 }, { type: 'boat', weight: 3000 }]),
]);

await verify('D', questions.D, [
  new TestCase(expectArray(['Hej', 1, 'Hund', 4, 'Lisa', 37, 'Jonas', 1000, 'Fido', 'Blue']), [['Hej', 1, 'Hund', 4], ['Lisa', 37, 'Jonas', 1000], ['Fido', 'Blue']]),
  new TestCase(expectArray([]), []),
]);

await verify('E', questions.E, [
  new TestCase(expectArray([2, 6, 10]), [2, 1, 5, 7, 6, 10]),
  new TestCase(expectArray([4, 2, 100]), [3, 7, 4, 2, 1, 100]),
  new TestCase(expectArray([]), []),
]);

await verify('F', questions.F, [
  new TestCase(expectValue(100), [50, 50]),
  new TestCase(expectValue(0), []),
  new TestCase(expectValue(10), [1, 5, 4]),
]);

await verify('G', questions.G, [
  new TestCase(expectValue('Linus-Ivarsson'), ['Linus'], ['Ivarsson']),
  new TestCase(expectValue('Hej-På-Dig-Hur-Mår-Du-?'), ['Hej', 'På', 'Dig'], ['Hur', 'Mår', 'Du', '?'])
]);

await verify('H', questions.H, [
  new TestCase(expectArray([2, 3, 4, 5, 6]), [1, 2, 3, 4, 5, 6, 7])
])
