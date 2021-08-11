export interface ControllerConfig {
  name: string;
}

class Controller {
  config: ControllerConfig;

  constructor(config: ControllerConfig) {
    this.config = config;
  }

  exec() {
    console.log(`Executando ${this.config.name}`);
  }
}

export default Controller;
