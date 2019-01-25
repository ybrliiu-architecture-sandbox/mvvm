export class Notifier {

  constructor() {
    this.handlers = [];
  }

  observe(handler) {
    this.handlers.push(handler);
  }

  fire() {
    this.handlers.forEach((handler) => handler());
  }

}
