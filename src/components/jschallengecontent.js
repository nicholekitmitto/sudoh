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

export const JS_greatest_candies =
    <div>
        <h3>Given the array candies and the integer extraCandies, where candies[i] represents the number of candies that the ith kid has. For each kid check if there is a way to distribute extraCandies among the kids such that he or she can have the greatest number of candies among them. Notice that multiple kids can have the greatest number of candies.</h3>

        <div className="codeblock">
        <svg xmlns="http://www.w3.org/2000/svg" width="54" height="14" viewBox="0 0 54 14"><g fill="none" fillRule="evenodd" transform="translate(1 1)"><circle cx="6" cy="6" r="6" fill="#FF5F56" stroke="#E0443E" strokeWidth=".5"></circle><circle cx="26" cy="6" r="6" fill="#FFBD2E" stroke="#DEA123" strokeWidth=".5"></circle><circle cx="46" cy="6" r="6" fill="#27C93F" stroke="#1AAB29" strokeWidth=".5"></circle></g></svg>

        <pre className="result">
            Example 1 <br />
            <div className="indented">
            Input: candies = [2,3,5,1,3], extraCandies = 3 <br />
            Output: [true,true,true,false,true]  <br />
            Explanation:  <br />
            Kid 1 has 2 candies and if he or she receives all extra candies (3) will have 5 candies --- the greatest number of candies among the kids.  <br />
            Kid 2 has 3 candies and if he or she receives at least 2 extra candies will have the greatest number of candies among the kids.  <br />
            Kid 3 has 5 candies and this is already the greatest number of candies among the kids.  <br />
            Kid 4 has 1 candy and even if he or she receives all extra candies will only have 4 candies.  <br />
            Kid 5 has 3 candies and if he or she receives at least 2 extra candies will have the greatest number of candies among the kids. <br />
            <br />
            </div>
            Example 2 <br />
            <div className="indented">
            Input: candies = [4,2,1,1,2], extraCandies = 1 <br/>
            Output: [true,false,false,false,false] <br/>
            Explanation: There is only 1 extra candy, therefore only kid 1 will have the greatest number of candies among the kids regardless of who takes the extra candy.
            <br />
            <br />
            </div>
            <hr />
            <span className="pink">var </span>kidsWithCandies = function(<span class="orange">candies, extraCandies</span>) {"{"}
                <div className="indented">
                    # Your code here
                </div>
            {"}"}
        </pre>
        </div>
        <br/>

    </div>;

export const JS_greatest_candies_answer =
<div>
    <h3>Answer:</h3>

        
    <Collapsebuttons>
        <pre className="result">
        <span className="pink">var </span>kidsWithCandies = function(<span class="orange">candies, extraCandies</span>) {"{"}
            <div className="indented">
                <span className="comment">// Define a new empty array and a copy of the candies array so we don't modify the original</span> <br />
                <span className="pink">let</span> <span class="orange">outputArray</span> = []; <br />
                <span className="pink">let</span> <span class="orange">candiesCopy</span> = [...candies]]; <br />
                <span className="command">for</span> (let i = 0; i {"<"} <span class="orange">candies</span>.length; i++) {"{"}
                <div class="indented">
                    <span className="comment">// Create a temp variable, count, to hold the current iteration's candy count</span> <br />
                    <span className="pink">let</span> <span class="orange">count</span> = <span class="orange">candies</span>[i] + <span class="orange">extraCandies</span>; <br />
                    <span className="comment">// Sort the candiesCopy array and pass a new method so it's in descending order, this way we can check what the largest count of candies was to compare to see if the current iteration's count is greatest or not</span> <br />
                    <span class="orange">candiesCopy</span>.<span className="command">sort</span>(<span className="command">function</span>(<span class="orange">a</span>, <span class="orange">b</span>) {"{"} <br />
                        <div className="indented">
                            <span className="pink">return</span> <span class="orange">b</span> - <span class="orange">a</span>;
                        </div>
                    {"}"}); <br />
                    <span className="comment">// If our current count of candies is greater than or equal to the highest candy count in our candiesCopy array, we return true</span> <br />
                    <span className="command">if</span> (<span class="orange">count</span> {">="} <span class="orange">candiesCopy</span>[0]) {"{"} <br />
                        <div class="indented">
                        <span class="orange">outputArray</span>.<span className="command">push</span>(true);
                        </div>
                    {"}"} <span className="command">else</span> {"{"} <br />
                        <div class="indented">
                        <span class="orange">outputArray</span>.<span className="command">push</span>(false);
                        </div>
                        {"}"}
                
                </div>
            {"}"} <br />
           
                
            <span className="pink">return</span> <span class="orange">outputArray</span>;
            </div>
        {"}"}
        </pre>
    </Collapsebuttons>
    <br/>

</div>;