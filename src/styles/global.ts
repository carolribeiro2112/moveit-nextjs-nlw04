import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
  :root{
    --white: #fff;
    --background: #F2F3F5;
    --gray-line: #DCDDE0;
    --text: #666666;
    --text-highlight: #B3B9FF;
    --title: #2E384D;
    --red: #E83F5B;
    --green: #4CD62B;
    --blue: #5965E0;
    --blue-dark: #4953B8;
    --blue-twitter: #2AA9E0;
  }

  @media(max-width:1080px){
    html{
      font-size: 93.75%;
    }
  }

  @media(max-width:720px){
    html{
      font-size: 87.5%;
    }
  }

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    background-color: var(--background);
    color: var(--text);
  }
  body, input, button, textarea {
    font: 400 1rem 'Inter', sans-serif;
  }
  #root {
    margin: 0 auto;
  }
  button{
    cursor: pointer;
  }

  a{
    color: inherit;
    text-decoration: none;
  }

  .container{
    height: 100vh;
    max-width: 992px;
    margin: 0 auto;
    padding: 2.5rem 2rem;

    display: flex;
    flex-direction: column;

    section{
      flex: 1;

      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 6.25rem;
      align-content: center;
    }
  }
`;