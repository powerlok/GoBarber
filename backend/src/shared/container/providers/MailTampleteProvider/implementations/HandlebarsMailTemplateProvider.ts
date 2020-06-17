import handlebars from 'handlebars';
import IMailTamplateProvider from '../models/IMailTamplateProvider';
import IParseMailTemplateDTO from '../dto/IParsaeMailTemplateDTO';

class HandlebarsMailTemplateProvider implements IMailTamplateProvider {
  public async parse({
    template,
    variables,
  }: IParseMailTemplateDTO): Promise<string> {
    const parseTemplate = handlebars.compile(template);

    return parseTemplate(variables);
  }
}

export default HandlebarsMailTemplateProvider;
