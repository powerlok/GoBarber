import handlebars from 'handlebars';
import fs from 'fs';
import IMailTamplateProvider from '../models/IMailTamplateProvider';
import IParseMailTemplateDTO from '../dto/IParsaeMailTemplateDTO';

class HandlebarsMailTemplateProvider implements IMailTamplateProvider {
  public async parse({
    file,
    variables,
  }: IParseMailTemplateDTO): Promise<string> {
    const templateFileContent = await fs.promises.readFile(file, {
      encoding: 'utf-8',
    });
    const parseTemplate = handlebars.compile(templateFileContent);

    return parseTemplate(variables);
  }
}

export default HandlebarsMailTemplateProvider;
