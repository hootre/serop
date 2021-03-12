import { TextTranstion } from '@styles/test-styles';
import React, { useEffect, useState } from 'react';

const Test = () => {
  const [transText, setTransText] = useState('Space Pilot 3000,A Flight to Remember,A sexy mistake,Good news everyone');
  let text = transText.replace(/\ /g, '•').toUpperCase().split(','); //Get words, sort out spaces, put to uppercase and make an array.
  let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789•'.toUpperCase(); //allowed characters, case unspecific as it converts everything into uppercase.

  let select = 0; //Which text is selected first
  let length = Math.max.apply(
    null,
    text.map((item) => {
      return item.length;
    }),
  ); //Length of longest string
  let correct = 0; //Counter to see if all letters match
  let selecttext: string[] = []; //Current held correct text
  let fulltext: string[] = []; //Current held text, not always correct
  let actualtext = ''; //Text displayed inside .switcher .display
  let latch = true; //Just a fail safe to not skip a word

  const write = () => {
    loadtext();
    for (let i = 0; i < length; i++) {
      //initiate fulltext with completely blank string
      fulltext[i] = '•';
    }
  };

  const loadtext = () => {
    //Fill selecttext with word and empty space padding •
    for (let i = 0; i < length; i++) {
      selecttext[i] = text[select][i];
      if (i >= text[select].length) {
        selecttext[i] = '•';
      }
    }
    latch = true; //open to check if words match
  };
  const flicker = () => {
    //Matching characters
    console.log(selecttext);
    for (let i = 0; i < length; i++) {
      //cycle through letters
      if (selecttext[i] != fulltext[i]) {
        //does the varying character not match with the correct one
        if (fulltext[i] == '•') {
          //If it is at the end of the loop
          fulltext[i] = 'A'; //Put to the beginning
        } else {
          fulltext[i] = chars[chars.indexOf(fulltext[i]) + 1]; //Increase character by 1
        }
        correct++; //means that the loop will not end this time around
      }
    }
    for (let i = 0; i < length; i++) {
      //Stitch characters into a word
      actualtext += fulltext[i];
    }
    if (latch) {
      setTransText(actualtext); //Display the word
    }
    actualtext = ''; //and blanket
    if (correct == 0 && latch) {
      //If there are no errors and it can latch
      latch = false; //can't latch
      if (select >= text.length - 1) {
        //increment word by 1 or loop
        select = 0;
      } else {
        select++;
      }
      setTimeout(loadtext, 1500); //start next word after a pause, this is where latch comes into play
    }
    correct = 0; //reset correct after it is used
  };

  useEffect(() => {
    write();
    setInterval(flicker, 40); //This is how fast the characters switch
  }, [transText]);
  return (
    <TextTranstion>
      <div className="switcher">{transText}</div>
    </TextTranstion>
  );
};

export default Test;
