import { View, Text as TextN } from 'react-native';

type Props = {
  children: React.ReactNode;
  weight?: 'thin' | 'light' | 'regular' | 'medium' | 'bold' | 'black';
  classNameP?: string;
  [key: string]: any;
};

export function Text({ children, weight, classNameP, ...rest }: Props) {
  const font = {
    thin: 'mplus-thin',
    light: 'mplus-light',
    regular: 'mplus-regular',
    medium: 'mplus-medium',
    bold: 'mplus-bold',
    black: 'mplus-black',
  };

  return (
    <TextN
      {...rest}
      className={classNameP}
      style={{
        fontFamily: font[weight || 'regular'],
      }}
    >
      {children}
    </TextN>
  );
}
