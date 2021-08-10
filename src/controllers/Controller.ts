export interface ControllerConfig {
  name: string;
}

class Controller {
  config: ControllerConfig;

  constructor(config: ControllerConfig) {
    this.config = config;
  }

  exec() {
    throw new Error('Not implemented');
  }
}

export default Controller;
