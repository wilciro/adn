import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    color: ${(props) => (props.theme ? 'white' : 'black')};
    background: rgba(30, 30, 30, 0.05)
  }
  * {
    box-sizing: border-box;
  }
  :root {
    --primary-color: purple;
    --font-color: #1E1E1E;
    --secondary-font-color: #76819D;
    --bg-color: #F0F2F5;
    --bg-color2: #E5EBF3;
    --heading-color: #FFF;
    --border-color: #FFF;
	}
  [data-theme="dark"] {
    --primary-color: purple;
    --font-color: #CCD6F6;
    --secondary-font-color: #76819D;
    --bg-color: #181719;
    --bg-color2: #1E1E1E;
    --heading-color: #282828;
    --border-color: #303030;
  }
`;
