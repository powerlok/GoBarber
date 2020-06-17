import IMailTamplateProvider from '../models/IMailTamplateProvider';
import IParseMailTemplateDTO from '../dto/IParsaeMailTemplateDTO';

class FakeMailTemplateProvider implements IMailTamplateProvider {
  public async parse({ template }: IParseMailTemplateDTO): Promise<string> {
    return template;
  }
}

export default FakeMailTemplateProvider;
