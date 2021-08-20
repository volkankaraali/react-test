import { render, screen } from "@testing-library/react";
import React from 'react';
import App from "./App";
import Header from "./Header"

import userEvent from '@testing-library/user-event'

describe("emoji app tesleri",()=>{

  beforeEach(()=>{
    render(<App></App>)
  })

  test("basligin basarili sekilde render edilmeli", () => {
    const baslik=screen.getByText("Emoji Search")
    expect(baslik).toBeInTheDocument();
  });

  test("uygulama acildiginda emoji listesi render edilmeli ",()=>{
    let emojiName="100"
    const emoji=screen.getByText(emojiName)
    expect(emoji).toBeInTheDocument();
    
  })
  
  test("filtreleme yapildiginde emoji listesi ona göre render edilmeli",()=>{
    let emojiName="100";
    let emojiElement=screen.getByText(emojiName)
    let input=screen.getByPlaceholderText("Find Emoji")

    userEvent.type(input,emojiName)
    expect(emojiElement).toBeInTheDocument();
  })

  test("emojiye tiklandiginda emojinin kopyalamanası olmali",()=>{
    //

  })

})

