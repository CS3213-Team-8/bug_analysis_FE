class ConfigManager {
  constructor() {
    this.config = {
      apiUrl: process.env.REACT_APP_API_URL,
    };
  }  
}

export const configManager = new ConfigManager();
