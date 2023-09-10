import { TextCodeCompletion } from '@/components/games/TextCodeCompletion';
import { CodeHighlighterCompletion } from '@/components/shared/CodeHighligherCompletion';
import { Text, View, StyleSheet } from 'react-native';
import CodeHighlighter from 'react-native-code-highlighter';
import { atomOneDarkReasonable } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function Profile() {
  const CODE_STR = `var num = num + 1 + 'asdasd';\n\n_23_ a = 3;\nvar b = 4;\nvar c = a + b;\n\nconsole.log(c);`;

  return (
    <View>
      <Text>Profile</Text>
      <TextCodeCompletion>{CODE_STR}</TextCodeCompletion>
    </View>
  );
}
