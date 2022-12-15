import React, { useState, useRef, useEffect, useCallback } from 'react';
import styled from 'styled-components';

const FormWrapper = styled.div`
  width: 640px;
  height: 400px;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.07);
  background: #FFFFFF;
  color: var(--red-color);
  position: relative;
  z-index: 100;
  border-radius: 40px;
  text-align: center;
  padding: 50px 30px 20px 50px;
  margin: 0 auto;
  font-family: var(--font-title); 

  #welcome-form > h2 {
    font-size: 48px;
  }
  #welcome-form > .content {
    justify-content: space-evenly;
    margin: 50px auto 30px auto;
  }
  #welcome-form > .content > .question > p {
    font-size: 20px;
    display: block;
    text-align: left;
    margin-bottom: 20px;
  }
 
  #welcome-form > .content > .input > input {
    background-color: #F3F3F3;
    border: none;
    font-size: 18px;
    padding: 10px 20px;
    display: inline;
    width: 60px;
    border-radius: 60px;
    margin-bottom: 20px;
  }
  #welcome-form > .content > .input > .select {
    gap: 5px;
  }
  #welcome-form > .content > .input > .select > div {
    background-color: #F3F3F3;
    padding: 13px 14px;
    border-radius: 60px;
    font-family: var(--font-title); 
    font-size: 20px;
    margin-bottom: 20px;
  }
  #welcome-form > .content > .input > .select > div:hover {
    background-color: var(--red-color);
    color: #fff;
    cursor: pointer;
  }
  #welcome-form > .content > .input > .select > div.active {
    background-color: var(--red-color);
    color: #fff;
  }
  #welcome-form > button {
    color: #fff;
    border: none;
    background-color: var(--red-color);
    box-shadow: 0px 5px 0px #9B3A3A;
    font-size: 20px;

  }
`;

export const WelcomeForm = () => {
    const [gender,setGender] = useState("");
    const [newMem, setNewMem] = useState("");
    console.log(gender)
    return(
        <FormWrapper>
            <form id='welcome-form'>
                <h2>TeenHoodへようこそ！</h2>
                
                <div className='content flex-row'>
                    <div className='question'>
                        <p>あなたの年齢は :</p>
                        <p>あなたの性別は :</p>
                        <p>TeenHoodで初めて？</p>
                    </div>
                    <div className='input'>
                        <input type="text"/>
                        <div className='select flex-row'>
                            <div className={gender==="boy" ? 'active' : ''} onClick={() => setGender("boy")}>男</div>
                            <div className={gender==="girl" ? 'active' : ''}  onClick={() => setGender("girl")}>女</div>
                        </div>
                        <div className='select flex-row'>
                            <div className={newMem ? 'active' : ''} onClick={() => setNewMem(true)}>Ｏ</div>
                            <div className={!newMem ? 'active' : ''} onClick={() => setNewMem(false)}>Ｘ</div>
                        </div>
                        </div>
                </div>
                
                <button type="submit" name="submitConfirm" value="confirm">Submit and Go</button>
            </form>
        </FormWrapper>
    )
}