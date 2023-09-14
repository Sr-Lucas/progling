import { Text, View, ScrollView } from 'react-native';
import Markdown from '@ronradtke/react-native-markdown-display';

export default function Profile() {
  const CODE_STR = `
# Profile 8-)
## Code

* teste
- teste

**This is some bold text!**
\`\`\` js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
\`\`\`
  `;

  return (
    <View>
      <ScrollView className="p-10">
        <Markdown>{CODE_STR}</Markdown>
      </ScrollView>
    </View>
  );
}
