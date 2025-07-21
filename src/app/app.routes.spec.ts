import { routes } from './app.routes';

describe('routes', () => {
  it('should define routes array', () => {
    expect(Array.isArray(routes)).toBeTrue();
    expect(routes.length).toBeGreaterThan(0);
  });
  it('should have a default redirect', () => {
    const defaultRoute = routes.find((r) => r.path === '');
    expect(!!defaultRoute).toBe(true);
    expect(defaultRoute?.redirectTo).toBe('shipments');
  });
});
