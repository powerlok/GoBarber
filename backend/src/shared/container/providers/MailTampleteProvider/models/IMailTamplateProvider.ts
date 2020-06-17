import IParseMailTemplateDTO from '../dto/IParsaeMailTemplateDTO';

export default interface IMailTamplateProvider {
  parse(data: IParseMailTemplateDTO): Promise<string>;
}
