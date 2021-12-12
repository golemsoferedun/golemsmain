import { createGlobalStyle } from "styled-components";

export const Styles = createGlobalStyle`

    @font-face {
        font-family: "Motiva Sans Light";
        src: url("/fonts/Motiva-Sans-Light.ttf") format("truetype");
        font-style: normal;
    }

    @font-face {
        font-family: "Motiva Sans Bold";
        src: url("/fonts/Motiva-Sans-Bold.ttf") format("truetype");
        font-style: normal;
    }


    body,
    html,
    a {
        font-family: 'Motiva Sans Light', sans-serif;
    }

    header a {
      color:black
    }


    body {
        margin:0;
        padding:0;
        border: 0;
        outline: 0;
        background: #fff;
        overflow-x: hidden;
    }

    a:hover {
        color: #000000;
    }

    input,
    textarea {
        border-radius: 15px;
        border: 0;
        background: rgb(241, 242, 243);
        transition: all 0.3s ease-in-out;  
        outline: none;
        width: 100%;  
        padding: 1rem 1.25rem;

        :focus-within {
            background: none;
            box-shadow: #1b46c2 0px 0px 0px 1px;
        }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: 'Motiva Sans Bold', serif;
        color: #000000;
        font-size: 56px;
        line-height: 1.18;

        @media only screen and (max-width: 890px) {
          font-size: 47px;
        }
      
        @media only screen and (max-width: 414px) {
          font-size: 32px;
        }
    }

    p {
        color: #000000;
        font-size: 21px;        
        line-height: 1.41;
    }

    h1 {
        font-weight: 600;
    }

    h5 {
        font-size: 46px;
        font-weight: 600;
    }
    h6 {
      font-size: 32px;
    }

    a {
        text-decoration: none;
        outline: none;
        color: #1b46c2;

        :hover {
            color: #1b46c2;
        }
    }
    
    *:focus {
        outline: none;
    }

    .about-block-image svg {
        text-align: center;
    }

    .ant-drawer-body {
        display: flex;
        flex-direction: column;
        text-align: left;
        padding-top: 1.5rem;
    }

    .ant-drawer-content-wrapper {
        width: 300px !important;
    }

    .card-hero-left {
        position: relative;
        padding: 20px 24px 12px 26px;
        background-color: #FFFFFF;
        box-shadow: 0px 20px 50px rgb(0 0 0 / 10%);
        border-radius: 24px;
        @media only screen and (max-width: 768px) {
          margin-bottom:30px;
        }
    }

  

    .card-hero-right {
        position: relative;
        padding: 16px 36px 14px 36px;;
        background-color: #FFFFFF;
        box-shadow: 0px 20px 50px rgb(0 0 0 / 10%);
        border-radius: 24px;
        
    }

    .margin-bottom {
        margin-bottom:45px;
    }

    :root {
        --color1: rgb(0, 231, 255);
        --color2: rgb(255, 0, 231);
        --back: url(https://cdn2.bulbagarden.net/upload/1/17/Cardback.jpg);
        --charizard1: #fac;
        --charizard2: #ddccaa;
        --charizardfront: url(https://i.ibb.co/jyYc3TQ/img-2431.png);
        --pika1: #54a29e;
        --pika2: #a79d66;
        --pikafront: url(https://i.ibb.co/1qWk35J/ezgif-com-gif-maker-4.gif);
      }
      
      .card {
        width: 71.5vw;
        height: 100vw;
        position: relative;
        overflow: hidden;
        margin: 20px;
        overflow: hidden;
        z-index: 10;
        touch-action: none;
        border-radius: 5%/3.5%;
        box-shadow: -5px -5px 5px -5px var(--color1), 5px 5px 5px -5px var(--color2), -7px -7px 10px -5px transparent, 7px 7px 10px -5px transparent, 0 0 5px 0px rgba(255, 255, 255, 0), 0 55px 35px -20px rgba(0, 0, 0, 0.5);
        transition: transform 0.5s ease, box-shadow 0.2s ease;
        will-change: transform, filter;
        background-color: #040712;
        background-image: var(--front);

        background-repeat: no-repeat;
        background-position: 50% 50%;
        transform-origin: center;
      }
      @media screen and (min-width: 600px) {
        .card {
          width: 592px;
          height: 336px;
        }
      }
      
      .card:hover {
        box-shadow: -20px -20px 30px -25px var(--color1), 20px 20px 30px -25px var(--color2), -7px -7px 10px -5px var(--color1), 7px 7px 10px -5px var(--color2), 0 0 13px 4px rgba(255, 255, 255, 0.3), 0 55px 35px -20px rgba(0, 0, 0, 0.5);
      }
      
      .card.charizard {
        --color1: var(--charizard1);
        --color2: var(--charizard2);
        --front: var(--charizardfront);
      }

      .card.pika {
        --color1: var(--pika1);
        --color2: var(--pika2);
        --front: var(--pikafront);
      }
      
      
      .card:before,
      .card:after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        background-repeat: no-repeat;
        opacity: 0.5;
        mix-blend-mode: color-dodge;
        transition: all 0.33s ease;
      }
      
      .card:before {
        background-position: 50% 50%;
        background-size: 300% 300%;
        background-image: linear-gradient(115deg, transparent 0%, var(--color1) 25%, transparent 47%, transparent 53%, var(--color2) 75%, transparent 100%);
        opacity: 0.5;
        filter: brightness(0.5) contrast(1);
        z-index: 1;
      }
      
      .card:after {
        opacity: 1;
        background-image: url("https://assets.codepen.io/13471/sparkles.gif"), url(https://assets.codepen.io/13471/holo.png), linear-gradient(125deg, #ff008450 15%, #fca40040 30%, #ffff0030 40%, #00ff8a20 60%, #00cfff40 70%, #cc4cfa50 85%);
        background-position: 50% 50%;
        background-size: 160%;
        background-blend-mode: overlay;
        z-index: 2;
        filter: brightness(1) contrast(1);
        transition: all 0.33s ease;
        mix-blend-mode: color-dodge;
        opacity: 0.75;
      }
      
      .card.active:after,
      .card:hover:after {
        filter: brightness(1) contrast(1);
        opacity: 1;
      }
      
      .card.active,
      .card:hover {
        -webkit-animation: none;
                animation: none;
        transition: box-shadow 0.1s ease-out;
      }
      
      .card.active:before,
      .card:hover:before {
        -webkit-animation: none;
                animation: none;
        background-image: linear-gradient(110deg, transparent 25%, var(--color1) 48%, var(--color2) 52%, transparent 75%);
        background-position: 50% 50%;
        background-size: 250% 250%;
        opacity: 0.88;
        filter: brightness(0.66) contrast(1.33);
        transition: none;
      }
      
      .card.active:before,
      .card:hover:before,
      .card.active:after,
      .card:hover:after {
        -webkit-animation: none;
                animation: none;
        transition: none;
      }
      
      .card.animated {
        transition: none;
        -webkit-animation: holoCard 12s ease 0s 1;
                animation: holoCard 12s ease 0s 1;
      }
      .card.animated:before {
        transition: none;
        -webkit-animation: holoGradient 12s ease 0s 1;
                animation: holoGradient 12s ease 0s 1;
      }
      .card.animated:after {
        transition: none;
        -webkit-animation: holoSparkle 12s ease 0s 1;
                animation: holoSparkle 12s ease 0s 1;
      }
      
      @-webkit-keyframes holoSparkle {
        0%, 100% {
          opacity: 0.75;
          background-position: 50% 50%;
          filter: brightness(1.2) contrast(1.25);
        }
        5%, 8% {
          opacity: 1;
          background-position: 40% 40%;
          filter: brightness(0.8) contrast(1.2);
        }
        13%, 16% {
          opacity: 0.5;
          background-position: 50% 50%;
          filter: brightness(1.2) contrast(0.8);
        }
        35%, 38% {
          opacity: 1;
          background-position: 60% 60%;
          filter: brightness(1) contrast(1);
        }
        55% {
          opacity: 0.33;
          background-position: 45% 45%;
          filter: brightness(1.2) contrast(1.25);
        }
      }
      
      @keyframes holoSparkle {
        0%, 100% {
          opacity: 0.75;
          background-position: 50% 50%;
          filter: brightness(1.2) contrast(1.25);
        }
        5%, 8% {
          opacity: 1;
          background-position: 40% 40%;
          filter: brightness(0.8) contrast(1.2);
        }
        13%, 16% {
          opacity: 0.5;
          background-position: 50% 50%;
          filter: brightness(1.2) contrast(0.8);
        }
        35%, 38% {
          opacity: 1;
          background-position: 60% 60%;
          filter: brightness(1) contrast(1);
        }
        55% {
          opacity: 0.33;
          background-position: 45% 45%;
          filter: brightness(1.2) contrast(1.25);
        }
      }
      @-webkit-keyframes holoGradient {
        0%, 100% {
          opacity: 0.5;
          background-position: 50% 50%;
          filter: brightness(0.5) contrast(1);
        }
        5%, 9% {
          background-position: 100% 100%;
          opacity: 1;
          filter: brightness(0.75) contrast(1.25);
        }
        13%, 17% {
          background-position: 0% 0%;
          opacity: 0.88;
        }
        35%, 39% {
          background-position: 100% 100%;
          opacity: 1;
          filter: brightness(0.5) contrast(1);
        }
        55% {
          background-position: 0% 0%;
          opacity: 1;
          filter: brightness(0.75) contrast(1.25);
        }
      }
      @keyframes holoGradient {
        0%, 100% {
          opacity: 0.5;
          background-position: 50% 50%;
          filter: brightness(0.5) contrast(1);
        }
        5%, 9% {
          background-position: 100% 100%;
          opacity: 1;
          filter: brightness(0.75) contrast(1.25);
        }
        13%, 17% {
          background-position: 0% 0%;
          opacity: 0.88;
        }
        35%, 39% {
          background-position: 100% 100%;
          opacity: 1;
          filter: brightness(0.5) contrast(1);
        }
        55% {
          background-position: 0% 0%;
          opacity: 1;
          filter: brightness(0.75) contrast(1.25);
        }
      }
      @-webkit-keyframes holoCard {
        0%, 100% {
          transform: rotateZ(0deg) rotateX(0deg) rotateY(0deg);
        }
        5%, 8% {
          transform: rotateZ(0deg) rotateX(6deg) rotateY(-20deg);
        }
        13%, 16% {
          transform: rotateZ(0deg) rotateX(-9deg) rotateY(32deg);
        }
        35%, 38% {
          transform: rotateZ(3deg) rotateX(12deg) rotateY(20deg);
        }
        55% {
          transform: rotateZ(-3deg) rotateX(-12deg) rotateY(-27deg);
        }
      }
      @keyframes holoCard {
        0%, 100% {
          transform: rotateZ(0deg) rotateX(0deg) rotateY(0deg);
        }
        5%, 8% {
          transform: rotateZ(0deg) rotateX(6deg) rotateY(-20deg);
        }
        13%, 16% {
          transform: rotateZ(0deg) rotateX(-9deg) rotateY(32deg);
        }
        35%, 38% {
          transform: rotateZ(3deg) rotateX(12deg) rotateY(20deg);
        }
        55% {
          transform: rotateZ(-3deg) rotateX(-12deg) rotateY(-27deg);
        }
      }
      .card.eevee:hover {
        box-shadow: 0 0 30px -5px white, 0 0 10px -2px white, 0 55px 35px -20px rgba(0, 0, 0, 0.5);
      }
      
      .card.eevee:hover:before,
      .card.eevee.active:before {
        background-image: linear-gradient(115deg, transparent 20%, var(--color1) 36%, var(--color2) 43%, var(--color3) 50%, var(--color4) 57%, var(--color5) 64%, transparent 80%);
      }
      
      .demo .card {
        background-image: var(--back);
        font-size: 2vh;
      }
      
      .demo .card > span {
        position: relative;
        top: 45%;
      }
      
      .demo .card:nth-of-type(1),
      .demo .card:nth-of-type(2),
      .demo .card:nth-of-type(3) {
        width: 20vh;
        height: 27.5vh;
        box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.4), 0 25px 15px -10px rgba(0, 0, 0, 0.5);
        -webkit-animation: none;
                animation: none;
      }
      
      .demo .card:nth-of-type(1):before, .demo .card:nth-of-type(1):after,
      .demo .card:nth-of-type(2):before,
      .demo .card:nth-of-type(2):after,
      .demo .card:nth-of-type(3):before,
      .demo .card:nth-of-type(3):after {
        -webkit-animation: none;
                animation: none;
      }
      
      .demo .card:nth-of-type(1):before, .demo .card:nth-of-type(1):after {
        display: none;
      }
      
      .demo .card:nth-of-type(2) {
        background: none;
      }
      .demo .card:nth-of-type(2):before {
        display: none;
      }
      
      .demo .card:nth-of-type(3) {
        background: none;
      }
      .demo .card:nth-of-type(3):after {
        display: none;
      }
      
      .operator {
        display: inline-block;
        vertical-align: middle;
        font-size: 6vh;
      }
      
      .demo,
      .cards {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        perspective: 2000px;
        position: relative;
        z-index: 1;
        transform: translate3d(0.1px, 0.1px, 0.1px);
      }
      
      .demo {
        flex-direction: row;
        justify-content: center;
      }
      
      @media screen and (min-width: 600px) {
        .cards {
          flex-direction: row;
        }
      }
      .cards .card:nth-child(2), .cards .card:nth-child(2):before, .cards .card:nth-child(2):after {
        -webkit-animation-delay: 0.25s;
                animation-delay: 0.25s;
      }
      .cards .card:nth-child(3), .cards .card:nth-child(3):before, .cards .card:nth-child(3):after {
        -webkit-animation-delay: 0.5s;
                animation-delay: 0.5s;
      }
      .cards .card:nth-child(4), .cards .card:nth-child(4):before, .cards .card:nth-child(4):after {
        -webkit-animation-delay: 0.75s;
                animation-delay: 0.75s;
      }

      #discord-button {
        margin: auto;
        width: 50%;
        /* border: 3px solid green; */
        padding: 10px;
	
        .icon {
          width: 25px;
          height: 25px;
          margin-right: 15px;
          
          svg {
            fill: white;
          }
        }
        
        a {
          color: white;
          font-weight: bold;
          border-radius: 8px;
          display: inline-flex;
          align-items: center;
          padding: 10px 15px;
          background-color: #7289da;
          text-decoration: none;
          
          &:hover {
            background-color: #6a7fc9;
          }
        }
        
      }
      .makeStyles-root-1 .MuiDialogTitle-root {
        background-color:#1b46c2 !important;
      }
      .makeStyles-root-1 .MuiDialogTitle-root  h2 {
        color:white !important;
      }
      .makeStyles-root-1 .MuiDialog-paper {
        border-radius: 15px !important;
      }
      .makeStyles-root-1 .MuiDialogContent-root .MuiListItem-root {
        box-shadow:none !important
      }
      button {
        background: #1b46c2;
        border: 0px;
        border-radius: 15px;
        padding: 12px 16px;
        font-size: 0.875rem;
        min-width: 64px;
        box-sizing: border-box;
        transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        font-family: "Roboto", "Helvetica", "Arial", sans-serif;
        font-weight: 500;
        line-height: 1.75;
        border-radius: 4px;
        letter-spacing: 0.02857em;
        color:white
      }

      /* Styling */
      .timeline {
        margin: 4em auto;
        position: relative;
        max-width: 46em;
      }
      ul {
        list-style:none;
      }
      .timeline:before {
        background-color: black;
        content: '';
        margin-left: -1px;
        position: absolute;
        top: 0;
        left: 4em;
        width: 2px;
        height: 100%;
      }
      
      .timeline-event {
        position: relative;
      }
      .timeline-event:hover .timeline-event-icon {
        -moz-transform: rotate(-45deg);
        -ms-transform: rotate(-45deg);
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
        background-color: #1b46c2;
      }
      .timeline-event:hover .timeline-event-thumbnail {
        -moz-box-shadow: inset 40em 0 0 0 #1b46c2;
        -webkit-box-shadow: inset 40em 0 0 0 #1b46c2;
        box-shadow: inset 40em 0 0 0 #1b46c2;
      }
      
      .timeline-event-copy {
        padding: 2em;
        position: relative;
        top: -1.875em;
        left: 4em;
        width: 80%;
      }
      .timeline-event-copy h3 {
        font-size: 1.75em;
      }
      .timeline-event-copy h4 {
        font-size: 1.2em;
        margin-bottom: 1.2em;
      }
      .timeline-event-copy strong {
        font-weight: 700;
      }
      .timeline-event-copy p:not(.timeline-event-thumbnail) {
        padding-bottom: 1.2em;
      }
      
      .timeline-event-icon {
        -moz-transition: -moz-transform 0.2s ease-in;
        -o-transition: -o-transform 0.2s ease-in;
        -webkit-transition: -webkit-transform 0.2s ease-in;
        transition: transform 0.2s ease-in;
        -moz-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
        background-color: black;
        outline: 10px solid white;
        display: block;
        margin: 0.5em 0.5em 0.5em -0.5em;
        position: absolute;
        top: 0;
        left: 2em;
        width: 1em;
        height: 1em;
      }
      
      .timeline-event-thumbnail {
        -moz-transition: box-shadow 0.5s ease-in 0.1s;
        -o-transition: box-shadow 0.5s ease-in 0.1s;
        -webkit-transition: box-shadow 0.5s ease-in;
        -webkit-transition-delay: 0.1s;
        transition: box-shadow 0.5s ease-in 0.1s;
        color: white;
        font-size: 0.75em;
        background-color: black;
        -moz-box-shadow: inset 0 0 0 0em #ef795a;
        -webkit-box-shadow: inset 0 0 0 0em #ef795a;
        box-shadow: inset 0 0 0 0em #ef795a;
        display: inline-block;
        margin-bottom: 1.2em;
        padding: 0.25em 1em 0.2em 1em;
      }
      
`;
