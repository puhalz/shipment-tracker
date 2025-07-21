import { appConfig } from './app.config';

describe('appConfig', () => {
  it('should be defined', () => {
    expect(appConfig).toBeDefined();
  });
  it('should provide required providers', () => {
    expect(Array.isArray(appConfig.providers)).toBeTrue();
    expect(appConfig.providers.length).toBeGreaterThan(0);
  });
});
