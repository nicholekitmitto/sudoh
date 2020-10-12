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
                <span className="command">return</span>
            </div>
            main()
        </pre>
        </div>
        <br/>
      </div>;


export const Python_insert_five_answer = 
        <div>
            <h3>Answer:</h3>

            
            <Collapsebuttons>
                <pre className="result">
                <span className="pink">def</span> insert_five(num: int): <br />
                <div className="indented">
                    <span className="pink">if</span> (num {"<"} 0): <br />
                        <div className="indented">
                            <span className="command">return</span> "No negatives allowed" <br />
                        </div>
                        <span className="comment"># Turn integer into string to</span> <br />
                        string = str(num) <br />
                        <span className="comment"># Break string number up into a list of each character</span> <br />
                        character = [char for char in string] <br />
                        <span className="comment"># Counter for while loop to determine each index we're in</span> <br />
                        i = 0 <br />
                        originalCount = len(character) <br />
                        <span className="comment"># Create a new empty list to append each modified version of character list to</span> <br />
                        alltogether = [] <br />
                        <span className="pink">while</span> i {"<="} originalCount: <br />
                            <div className="indented">
                                <span className="comment"># Make a temp copy of character for each iteration so as not to modify original and mess up future iterations</span> <br />
                                tmp = character[:] <br />
                                <span className="comment"># Insert '5' into each index of list</span> <br />
                                tmp.insert(i, '5') <br />
                                <span className="comment"># Turn each index from string back into an integer</span> <br />
                                ints = ''.join(tmp) <br />
                                <span className="comment"># Append each tmp list as an index in alltogether list</span> <br />
                                alltogether.append(ints) <br />
                                <span className="comment"># Print to see how we're doing :)</span> <br />
                                print(alltogether) <br />
                                <span className="comment"># Add 1 to i to move to next index for new iteration</span> <br />
                                i += 1 <br />
                                <span className="comment"># We're here, babaaayy! Final iteration</span> <br />
                                <span className="pink">if</span> i {">"} originalCount: <br />
                                    <div className="indented">
                                        <span className="comment"># Turn each string index back into integer so we can sort</span> <br />
                                        int_list = list(map(int, alltogether)) <br />
                                        int_list.sort(reverse=True) <br />
                                        <span className="comment"># Print both sorted list and the first index of list to make sure it's the largest</span> <br />
                                        print("SORTED: ", int_list) <br />
                                        print("FINAL: ", int_list[0]) <br />
                                        <span className="command">return</span> int_list[0] <br />
                                    </div>  
                            </div>
                </div>
                
                <span className="pink">def</span> main():
                <div className="indented">
                    tests = [20, 9991, 2147483647, 1234567, 0, -1, 9] <br />
                    <span className="pink">for</span> num <span className="pink">in</span> tests: <br />
                    <div className="indented">
                        <span className="pink">print</span>("Largest possible int from {"{num}"}: {"{result}"}".format( <br />
                            num=num, result=insert_five(num))) <br />
                    </div>
                    <span className="command">return</span>
                </div>
                main()
                </pre>
            </Collapsebuttons>
            <br/>
        </div>;

