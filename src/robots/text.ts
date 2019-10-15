import * as algorithmia from 'algorithmia';

import { algorithmiaKey as ALGORITHMIA_KEY } from '../../config.json';

interface TextRobotParams {
  prefix: string;
  searchTerm: string;
}

const textRobot = async ({ searchTerm }: TextRobotParams) => {
  const fetchContentFromWikipedia = async (searchTerm: string) => {
    const algorithmiaClient = algorithmia(ALGORITHMIA_KEY);
    const wikipediaAlgorithmia = algorithmiaClient.algo('web/WikipediaParser/0.1.2');
    const wikipediaResponse = await wikipediaAlgorithmia.pipe(searchTerm);
    const wikipediaContent = await wikipediaResponse.get();

    return wikipediaContent.content as string;
  };

  const sanitizeContent = (content: string) => {
    const removeBlankLinesAndMarkdown = (text: string) => {
      const allLines = text.split('\n');
      const withoutBlankLinesAndMarkdown = allLines
        .filter(line => line.trim().length > 0 && !line.trim().startsWith('='));

      return withoutBlankLinesAndMarkdown.join(' ');
    };

    const removeDatesInParentheses = (text: string) =>
      // tslint:disable-next-line: no-regex-spaces
      text.replace(/\((?:\([^()]*\)|[^()])*\)/gm, '').replace(/  /g, ' ');

    const withoutBlankLinesAndMarkdown = removeBlankLinesAndMarkdown(content);
    const withoutDatesInParentheses = removeDatesInParentheses(withoutBlankLinesAndMarkdown);

    return withoutDatesInParentheses;
  };

  const content = await fetchContentFromWikipedia(searchTerm);
  const sanitizedContent = sanitizeContent(content);
  // tslint:disable-next-line: no-console
  console.log(sanitizedContent);
  return { content };
};

export default textRobot;
