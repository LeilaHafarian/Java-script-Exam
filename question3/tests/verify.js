import { promiseReject, promiseResolve, promiseValueCheck, promiseFormatter, promiseRejectCheck, ConsoleReporter, HtmlReporter, verify, TestCase, Expected, Input, setReporters } from "./test-runner.js";
import * as questions from '../questions.js';

setReporters([
  new ConsoleReporter(),
  new HtmlReporter(),
]);

await verify('A', questions.A, [
  new TestCase(new Expected(promiseReject(333), promiseRejectCheck, promiseFormatter)),
]);

await verify('B', questions.B, [
  new TestCase(
    new Expected(promiseResolve(0.5), promiseValueCheck, promiseFormatter),
    new Input(1, 'promise-resolved')
  ),
  new TestCase(
    new Expected(promiseResolve(-2), promiseValueCheck, promiseFormatter),
    new Input(-4, 'promise-resolved')
  ),
  new TestCase(
    new Expected(promiseResolve(25), promiseValueCheck, promiseFormatter),
    new Input(50, 'promise-resolved')
  ),
]);

await verify('C', questions.C, [
  new TestCase(
    new Expected(promiseResolve('high'), promiseValueCheck, promiseFormatter),
    new Input(11, 'promise-resolved')
  ),
  new TestCase(
    new Expected(promiseResolve('average'), promiseValueCheck, promiseFormatter),
    new Input(10, 'promise-resolved')
  ),
  new TestCase(
    new Expected(promiseResolve('average'), promiseValueCheck, promiseFormatter),
    new Input(1, 'promise-resolved')
  ),
  new TestCase(
    new Expected(promiseResolve('low'), promiseValueCheck, promiseFormatter),
    new Input(0, 'promise-resolved')
  ),
]);

await verify('D', questions.D, [
  new TestCase(
    new Expected(promiseResolve(true), promiseValueCheck, promiseFormatter),
    new Input('false-negative', 'promise-rejected')
  ),
  new TestCase(
    new Expected(promiseResolve(false), promiseValueCheck, promiseFormatter),
    new Input('', 'promise-rejected')
  ),
  new TestCase(
    new Expected(promiseResolve(false), promiseValueCheck, promiseFormatter),
    new Input('error', 'promise-rejected')
  ),
]);

await verify('E', questions.E, [
  new TestCase(
    new Expected(promiseResolve(10), promiseValueCheck, promiseFormatter),
    new Input(2, 'promise-resolved'), new Input(5, 'promise-resolved')
  ),
  new TestCase(
    new Expected(promiseResolve(-10), promiseValueCheck, promiseFormatter),
    new Input(-1, 'promise-resolved'), new Input(10, 'promise-resolved')
  ),
  new TestCase(
    new Expected(promiseResolve(12), promiseValueCheck, promiseFormatter),
    new Input(-3, 'promise-resolved'), new Input(-4, 'promise-resolved')
  ),
]);
