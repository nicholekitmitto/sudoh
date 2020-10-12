import React, { Component } from 'react'
import Collapsebuttons, { collapsed } from '../components/collapsebuttons'

export const Python_insert_five = 
      <div>
         <h3>Write an algorithm for the insert_five() function that will insert the number "5" into each position of the integer num and return the largest integer. Do not support negative numbers.</h3>

        <div className="codeblock">
        <svg xmlns="http://www.w3.org/2000/svg" width="54" height="14" viewBox="0 0 54 14"><g fill="none" fillRule="evenodd" transform="translate(1 1)"><circle cx="6" cy="6" r="6" fill="#FF5F56" stroke="#E0443E" strokeWidth=".5"></circle><circle cx="26" cy="6" r="6" fill="#FFBD2E" stroke="#DEA123" strokeWidth=".5"></circle><circle cx="46" cy="6" r="6" fill="#27C93F" stroke="#1AAB29" strokeWidth=".5"></circle></g></svg>

        <pre className="result">
            Example input/output: <br />
            <div className="indented">
            Input into insert_five(): 20 <br />
            Possible positions: 520, 250, 205 (this line not displayed to user) <br />
            Return: 520 <br />
            <br />
            </div>
            <hr />
            <span className="pink">def</span> insert_five(num: int):
            <div className="indented">
                # Your code here
            </div>
            <span className="pink">def</span> main():
            <div className="indented">
                tests = [20, 9991, 2147483647, 1234567, 0, -1, 9] <br />
                <span className="pink">for</span> num <span className="pink">in</span> tests: <br />
                <div className="indented">
                    <span className="pink">print</span>("Largest possible int from {"{num}"}: {"{result}"}.format( <br />
                        num=num, result=insert_five(num))) <br />
                </div>
                return
            </div>
            <span className="pink">if</span> __name__ == "__main__";
            <div className="indented">main()</div>
        </pre>
        </div>
        <br/>
      </div>;


export const Python_insert_five_answer = 
        <div>
            <h3>Answer:</h3>

            
            <Collapsebuttons>
                <pre className="result">
                Example input/output: <br />
                <div className="indented">
                Input into insert_five(): 20 <br />
                Possible positions: 520, 250, 205 (this line not displayed to user) <br />
                Return: 520 <br />
                <br />
                </div>
                <hr />
                <span className="pink">def</span> insert_five(num: int):
                <div className="indented">
                    # Your code here
                </div>
                <span className="pink">def</span> main():
                <div className="indented">
                    tests = [20, 9991, 2147483647, 1234567, 0, -1, 9] <br />
                    <span className="pink">for</span> num <span className="pink">in</span> tests: <br />
                    <div className="indented">
                        <span className="pink">print</span>("Largest possible int from {"{num}"}: {"{result}"}.format( <br />
                            num=num, result=insert_five(num))) <br />
                    </div>
                    return
                </div>
                <span className="pink">if</span> __name__ == "__main__";
                <div className="indented">main()</div>
                </pre>
            </Collapsebuttons>
            <br/>
        </div>;

