import { MiningModule } from './mining.module';

describe('MiningModule', () => {
  let miningModule: MiningModule;

  beforeEach(() => {
    miningModule = new MiningModule();
  });

  it('should create an instance', () => {
    expect(miningModule).toBeTruthy();
  });
});
