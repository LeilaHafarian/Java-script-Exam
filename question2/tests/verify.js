import { verify, TestCase, expectArray, setReporters, ConsoleReporter, HtmlReporter, expectValue } from './test-runner.js'
import * as questions from '../questions.js'

setReporters([
  new ConsoleReporter(),
  new HtmlReporter(),
]);

await verify('A', questions.A, [
  new TestCase(expectValue('too short'), 'dog'),
  new TestCase(expectValue('lamb'), 'lamb'),
  new TestCase(expectValue('unknown'), null)
]);

await verify('B', questions.B, [
  new TestCase(expectValue(6), 'double', 3),
  new TestCase(expectValue(4), 'inc', 3),
  new TestCase(expectValue(3), 'dec', 4),
  new TestCase(expectValue(-2), 'double', -1),
]);

await verify('C', questions.C, [
  new TestCase(expectValue(6), (v1, v2) => v1 * v2, 3, 2),
  new TestCase(expectValue(-5), (v1, v2) => v1 * v2, -1, 5),
  new TestCase(expectValue('error'), (v1, v2) => v1 * v2, true, 5),
  new TestCase(expectValue(7), (v1, v2) => v1 + v2, 2, 5),
  new TestCase(expectValue('error'), (v1, v2) => v1 + v2, 5, '6'),
]);
