class ConfigManager {
  constructor() {
    this.config = {
      apiUrl: process.env.REACT_APP_API_URL || 'http://localhost:8000',
    };
  }  
}

export const configManager = new ConfigManager();
