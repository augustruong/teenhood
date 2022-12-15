import React, { useRef, useEffect, useCallback } from 'react';
import styled from 'styled-components';

const FormWrapper = styled.div`
  width: 600px;
  height: 400px;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.07);
  background: #FFFFFF;
  color: #000;
  position: relative;
  z-index: 100;
  border-radius: 20px;
  text-align: center;
  padding: 30px 30px 20px 50px;
  margin: 0 auto;
`;

export const WelcomeForm = () => {
    return(
        <FormWrapper>
            <form id='welcome-form'>
                <h2>TeenHoodへようこそ！</h2>
                <p>あなたの年齢は :</p>
                <input type="number"/>

                <p>あなたの性別は :</p>
                <div>
                    <div>男</div>
                    <div>女</div>
                </div>
                <p>TeenHoodで初めて？</p>
                <div>
                    <div>Ｏ</div>
                    <div>Ｘ</div>
                </div>
                <button type="submit" name="submitConfirm" value="confirm">Submit and Go</button>
            </form>
        </FormWrapper>
    )
}