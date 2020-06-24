import IMailTamplateProvider from '../models/IMailTamplateProvider';

class FakeMailTemplateProvider implements IMailTamplateProvider {
  public async parse(): Promise<string> {
    return 'Mail content';
  }
}

export default FakeMailTemplateProvider;
