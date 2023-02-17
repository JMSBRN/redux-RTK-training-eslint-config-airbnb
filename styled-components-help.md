https://tproger.ru/articles/styled-components-idealnaja-stilizacija-react-prilozhenija/


npm i styled-components
npm i --save-dev @types/styled-components
------------------------------------------------
PROPS 

interface IProps {
  fontSize: string;
}
export const Button = styled.button`
 font-size: ${(props: IProps) => props.fontSize}px;
`;
export default Button;

without interface (compact code with one property)

export const Button = styled.button<{ fontSize: string }>`
 font-size: ${(props) => props.fontSize}px;
`;

 with deafault value => 

interface TitleProps {
  weight: 200 | 300 | 400 | 500 | 600 | 700
}
const Title = styled.h1<TitleProps>`
  // Для лучшей читаемости - деструктурируем props,
  // задаем дефолтное значение если это необходимо
  font-weight: ${({ weight = 400 }) => weight};
`

interface TextProps {
  primary: boolean
}
const Text = styled.p<TextProps>`
  color: ${({ primary }) => primary ? '#424242' : '4b4b4b'};
`


------------------------------------------------------

css fragments

const fontStyle = css`
  font-size: 30px;
  color: red;
`;

export const Button = styled.button<{ fontSize: string }>`
 font-size: ${(props) => props.fontSize}px;
 
 &:hover {
    ${fontStyle}
  }
`;
export default Button;

==================
CLOBAL STYLE

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }
`;

export default GlobalStyle;

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);

=======================================================

THEME

// theme.ts

const baseTheme = {export default baseTheme;
  colors: {
    primary: '#7986cb',
    secondary: '#2b2b2b',
    success: '#4caf50',
    danger: '#f44336 ',

    bg: '#E5E4E8',
    font: '#19191B',
  },

 simple object!!!!!!!!!!!!!


export const Button = styled.button<{ fontSize: string }>`
 font-size: ${(props) => props.fontSize}px;
 color: ${baseTheme.colors.primary};
 
 &:hover {
    ${fontStyle}
  }
`;

export default baseTheme;

Or from  ThemeProvider!!!


  <React.StrictMode>
    <ThemeProvider theme={baseTheme}>
      <GlobalStyle />
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
);

export const Button = styled.button<{ fontSize: string }>`
 font-size: ${(props) => props.fontSize}px;
 color: ${({ theme }) => theme.colors.primary};
            ^^^^^^^^
 &:hover {
    ${fontStyle}
  }
`;
===================================================================

interface from  styled.d.ts


styled.d.ts 

import 'styled-components';

import { ITheme } from 'interfaces/styled';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ITheme {}
}


import { DefaultTheme } from 'styled-components';

const baseTheme: DefaultTheme = {
  colors: {
    primary: '#7986cb',
    secondary: '#2b2b2b',
    success: '#4caf50',
    danger: '#f44336 ',

    bg: '#E5E4E8',
    font: '#19191B',
  },

or from interfaces 

export interface DefaultTheme 

===============================================================












https://tproger.ru/articles/styled-components-idealnaja-stilizacija-react-prilozhenija/


npm i styled-components
npm i --save-dev @types/styled-components
------------------------------------------------
PROPS 

interface IProps {
  fontSize: string;
}
export const Button = styled.button`
 font-size: ${(props: IProps) => props.fontSize}px;
`;
export default Button;

without interface (compact code with one property)

export const Button = styled.button<{ fontSize: string }>`
 font-size: ${(props) => props.fontSize}px;
`;

 with deafault value => 

interface TitleProps {
  weight: 200 | 300 | 400 | 500 | 600 | 700
}
const Title = styled.h1<TitleProps>`
  // Для лучшей читаемости - деструктурируем props,
  // задаем дефолтное значение если это необходимо
  font-weight: ${({ weight = 400 }) => weight};
`

interface TextProps {
  primary: boolean
}
const Text = styled.p<TextProps>`
  color: ${({ primary }) => primary ? '#424242' : '4b4b4b'};
`


------------------------------------------------------

css fragments

const fontStyle = css`
  font-size: 30px;
  color: red;
`;

export const Button = styled.button<{ fontSize: string }>`
 font-size: ${(props) => props.fontSize}px;
 
 &:hover {
    ${fontStyle}
  }
`;
export default Button;

==================
CLOBAL STYLE

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }
`;

export default GlobalStyle;

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);

=======================================================

THEME

// theme.ts

const baseTheme = {export default baseTheme;
  colors: {
    primary: '#7986cb',
    secondary: '#2b2b2b',
    success: '#4caf50',
    danger: '#f44336 ',

    bg: '#E5E4E8',
    font: '#19191B',
  },

 simple object!!!!!!!!!!!!!


export const Button = styled.button<{ fontSize: string }>`
 font-size: ${(props) => props.fontSize}px;
 color: ${baseTheme.colors.primary};
 
 &:hover {
    ${fontStyle}
  }
`;

export default baseTheme;

Or from  ThemeProvider!!!


  <React.StrictMode>
    <ThemeProvider theme={baseTheme}>
      <GlobalStyle />
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
);

export const Button = styled.button<{ fontSize: string }>`
 font-size: ${(props) => props.fontSize}px;
 color: ${({ theme }) => theme.colors.primary};
            ^^^^^^^^
 &:hover {
    ${fontStyle}
  }
`;
===================================================================

interface from  styled.d.ts


styled.d.ts 

import 'styled-components';

import { ITheme } from 'interfaces/styled';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ITheme {}
}


import { DefaultTheme } from 'styled-components';

const baseTheme: DefaultTheme = {
  colors: {
    primary: '#7986cb',
    secondary: '#2b2b2b',
    success: '#4caf50',
    danger: '#f44336 ',

    bg: '#E5E4E8',
    font: '#19191B',
  },

or from interfaces 

export interface DefaultTheme 

===============================================================






























