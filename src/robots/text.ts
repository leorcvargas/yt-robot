import * as algorithmia from 'algorithmia';
import * as sbd from 'sbd';

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

  const breakContentInSentences = (content: string) => {
    const sentences: string[] = sbd.sentences(content);

    return sentences.map(sentence => ({
      text: sentence,
      keywords: [],
      images: [],
    }));
  };

  const content = await fetchContentFromWikipedia(searchTerm);
  const sanitizedContent = sanitizeContent(content);
  const sentences = breakContentInSentences(sanitizedContent);

  return { content, sanitizedContent, sentences };
};

export default textRobot;
