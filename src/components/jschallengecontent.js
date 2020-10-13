import React, { Component } from 'react'
import Collapsebuttons, { collapsed } from '../components/collapsebuttons'

export const JS_running_sum =
    <div>
        <h3>Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]). Return the running sum of nums.</h3>

        <div className="codeblock">
        <svg xmlns="http://www.w3.org/2000/svg" width="54" height="14" viewBox="0 0 54 14"><g fill="none" fillRule="evenodd" transform="translate(1 1)"><circle cx="6" cy="6" r="6" fill="#FF5F56" stroke="#E0443E" strokeWidth=".5"></circle><circle cx="26" cy="6" r="6" fill="#FFBD2E" stroke="#DEA123" strokeWidth=".5"></circle><circle cx="46" cy="6" r="6" fill="#27C93F" stroke="#1AAB29" strokeWidth=".5"></circle></g></svg>

        <pre className="result">
            Example 1 <br />
            <div className="indented">
            Input: nums = [1,2,3,4] <br />
            Output: [1,3,6,10] <br />
            Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
            <br />
            </div>
            Example 2 <br />
            <div className="indented">
            Input: nums = [1,1,1,1,1] <br />
            Output: [1,2,3,4,5] <br />
            Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
            <br />
            <br />
            </div>
            <hr />
            <span className="pink">var </span>runningSum = function(<span class="orange">nums</span>) {"{"}
                <div className="indented">
                    # Your code here
                </div>
            {"}"}
        </pre>
        </div>
        <br/>

    </div>;

export const JS_running_sum_answer =
    <div>
        <h3>Answer:</h3>

            
        <Collapsebuttons>
            <pre className="result">
            <span className="pink">var </span>runningSum = function(<span class="orange">nums</span>) {"{"}
                <div className="indented">
                    <span className="comment">// Define a new empty array and a "previous" variable to hold the last iteration's sum</span> <br />
                    <span className="pink">let</span> <span class="orange">array</span> = []; <br />
                    <span className="pink">let</span> <span class="orange">previous</span> = null; <br />
                    <span className="command">for</span> (let i = 0; i {"<"} <span class="orange">nums</span>.length; i++) {"{"}
                    <div class="indented">
                        <span className="comment">// If not the first iteration (previous is defined) append current index value + last iteration's index value to new array</span> <br />
                        <span className="command">if</span> (<span class="orange">previous</span>) {"{"} <br />
                        <div className="indented">
                            <span class="orange">array</span>.push(<span class="orange">nums</span>[i] + <span class="orange">previous</span>);
                        </div>
                            {"}"} <span className="command">else</span> {"{"} <br />
                            <div className="indented">
                                <span className="comment">// If first iteration, push current index value to new array</span> <br />
                                <span class="orange">array</span>.push(<span class="orange">nums</span>[i]);
                            </div>
                            {"}"} <br />
                            <span className="comment">// Replace previous' definition with current index value + last iteration's previous definition (null if this is the first loop!)</span> <br />
                            <span class="orange">previous</span> = <span class="orange">nums</span>[i] + <span class="orange">previous</span>; <br />
                            console.log(<span class="orange">array</span>); <br />
                </div>
                {"}"} <br />
               
                    
                <span className="pink">return</span> <span class="orange">array</span>;
                </div>
            {"}"}
            </pre>
        </Collapsebuttons>
        <br/>

    </div>;