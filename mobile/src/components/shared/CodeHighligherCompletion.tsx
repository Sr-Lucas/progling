import React, { useMemo, type FunctionComponent, type ReactNode } from 'react';
import {
  Text,
  View,
  ScrollView,
  type ViewStyle,
  type TextStyle,
  type StyleProp,
  StyleSheet,
  type ScrollViewProps,
} from 'react-native';
import SyntaxHighlighter, {
  type SyntaxHighlighterProps,
} from 'react-syntax-highlighter';
import { trimNewlines } from 'trim-newlines';
import {
  getRNStylesFromHljsStyle,
  type HighlighterStyleSheet,
  type ReactStyle,
} from './styles/styles';
import { CodeHighlighterProps } from 'react-native-code-highlighter';

export interface CodeHighLighterProps extends SyntaxHighlighterProps {
  hljsStyle: ReactStyle;
  textStyle?: StyleProp<TextStyle>;
  scrollViewProps?: ScrollViewProps;
  completionColor?: string;
  /**
   * @deprecated Use scrollViewProps.contentContainerStyle instead
   */
  containerStyle?: StyleProp<ViewStyle>;
}

export const CodeHighlighterCompletion: FunctionComponent<
  CodeHighlighterProps
> = ({
  children,
  completionColor,
  textStyle,
  hljsStyle,
  scrollViewProps,
  containerStyle,
  ...rest
}) => {
  const stylesheet: HighlighterStyleSheet = useMemo(
    () => getRNStylesFromHljsStyle(hljsStyle),
    [hljsStyle],
  );

  const getStylesForNode = (node: rendererNode): TextStyle[] => {
    const classes: string[] = node.properties?.className ?? [];
    return classes
      .map((c: string) => stylesheet[c])
      .filter((c) => !!c) as TextStyle[];
  };

  const codeCompletionREGEX = /\_[0-9]+\_/;

  const verifyNodeHasCompletion = (
    node: rendererNode,
    acc: React.ReactNode[],
    key: string,
  ) => {
    if (node.children) {
      node.children.forEach((child) => {
        if (child.type === 'text' && child.value) {
          if (child.value.toString().match(codeCompletionREGEX)) {
            const numberExtract = child.value.toString().match(/[0-9]+/);
            const width = numberExtract ? parseInt(numberExtract[0]) : 0;
            acc.push(
              <View
                key={key + '_completion_' + child.value}
                style={{
                  flexDirection: 'column',
                  height: 15,
                  width: width,
                  backgroundColor: completionColor ?? '#CECDCDC1',
                  borderRadius: 5,
                }}
              ></View>,
            );
          }
        }
      });
    }
  };

  const renderNode = (nodes: rendererNode[], keyPrefix = 'row') =>
    nodes.reduce<ReactNode[]>((acc, node, index) => {
      const keyPrefixWithIndex = `${keyPrefix}_${index}`;
      if (node.children) {
        const styles = StyleSheet.flatten([
          textStyle,
          { color: stylesheet.hljs?.color },
          getStylesForNode(node),
        ]);

        verifyNodeHasCompletion(node, acc, keyPrefixWithIndex);

        acc.push(
          <Text style={styles} key={keyPrefixWithIndex}>
            {renderNode(node.children, `${keyPrefixWithIndex}_child`)}
          </Text>,
        );
      }

      if (node.value) {
        acc.push(
          trimNewlines(String(node.value).replace(codeCompletionREGEX, '')),
        );
      }

      return acc;
    }, []);

  const renderer = (props: rendererProps) => {
    const { rows } = props;
    return (
      <ScrollView
        {...scrollViewProps}
        horizontal
        contentContainerStyle={[
          stylesheet.hljs,
          scrollViewProps?.contentContainerStyle,
          containerStyle,
        ]}
      >
        <View>{renderNode(rows)}</View>
      </ScrollView>
    );
  };

  return (
    <SyntaxHighlighter
      {...rest}
      renderer={renderer}
      CodeTag={View}
      PreTag={View}
      style={{}}
      testID="react-native-code-highlighter"
    >
      {children}
    </SyntaxHighlighter>
  );
};
