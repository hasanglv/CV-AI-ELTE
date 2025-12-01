// modelInferenceAdapter.js
// Adapter pattern for plugging in multiple AI model handlers

export class ModelInferenceAdapter {
  constructor() {
    this.handlers = {};
  }

  registerModel(name, handler) {
    this.handlers[name] = handler;
    console.log(`[ModelAdapter] Registered ${name}`);
  }

  run(name, input) {
    if (!this.handlers[name]) {
      console.log(`[ModelAdapter] No handler found: ${name}`);
      return { error: "Model not found" };
    }

    return this.handlers[name](input);
  }

  listModels() {
    return Object.keys(this.handlers);
  }
}

export const inferenceAdapter = new ModelInferenceAdapter();
