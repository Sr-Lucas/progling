import { atomOneDarkReasonable } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { CodeHighlighterCompletion } from '../shared/CodeHighligherCompletion';
import { StyleSheet } from 'react-native';

type Props = {
  children: string;
};

export function TextCodeCompletion({ children }: Props) {
  return (
    <CodeHighlighterCompletion
      useInlineStyles={false}
      hljsStyle={atomOneDarkReasonable}
      textStyle={styles.text}
      language="javascript"
      completionColor="#FFFFFFCA"
      scrollViewProps={{
        contentContainerStyle: styles.codeContainer,
      }}
    >
      {children}
    </CodeHighlighterCompletion>
  );
}

const styles = StyleSheet.create({
  codeContainer: {
    padding: 16,
    minWidth: '90%',
    marginVertical: 16,
    marginHorizontal: 20,
    borderRadius: 12,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
  },
});
