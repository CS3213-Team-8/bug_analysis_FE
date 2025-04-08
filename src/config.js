class ConfigManager {
  constructor() {
    this.config = {
      apiUrl: 'https://bug-analysis-be.onrender.com',
    };
  }  
}

export const configManager = new ConfigManager();
