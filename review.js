// 1. What are the JavaScript keywords for the two Boolean values?
TRUE FALSE

// 2. How would you write a Boolean expression to test whether the value of the
// integer variable n was in the range 0 to 9, inclusive?
(n >= 0) && (n <= 9)

// 3. Describe in English what the following conditional expression means:
// (x !== 4) || (x !== 17) For what values of x is this condition true?
"This means that if X does not equal either 4 or 17, then evalutate to true. This will evaluate to true for every value of X, as this is a logically flawed statement."

// 4. What is meant by the term short-circuit evaluation?
"This is where JS will evaluate the first conditional expression and if the answer is enough to satisfy the conditions of the logical operation, it will exit the evaluation and perform the approrpaite actions based on the outcome of the conditional test."
(How's that for acadmeic mumbo jumbo?)

// 5. What are the two classes of control statements?
Relational and Logical

// 6. What does it mean to say that two control statements are nested?
"There is a control statment that runs inside of another."
// 7. Describe in English the general operation of the switch statement.
A switch statement is like a police lineup. Somewhere, there is some data, the data goes to the police department(i.e. a switch statement) where they explain what happened. The police evaluates the expression of that variable(making sure their story has no errors), and then shows that variable cases of suspects. Each suspect, or case clause, presents the value of their case. If it matches the variable's story, then the police follow that lead. If none of the cases match, then the police are forced to offer a default applogy to the varialbe for failing to find the right case for thier situation.

// 8. What rule does this chapter suggest with respect to the final statement in any
// case or default clause?
There needs to be a way to break out of the clauses. So use either return or break.

// 9. What special value is used in the monthName function in Figure 3-1 to indicate
// an illegal numeric month?
undefined

// 10. What was the nickname of the Small-Scale Experimental Machine developed at Manchester University that was in many respects the first modern digital computer?
Baby

// 11. Suppose the body of a while loop contains a statement that, when executed, causes the condition for that while loop to become false. Does the loop terminate immediately at that point or does it complete the current cycle?
It completes its current cycle first.

// 12. What term do computer scientists use to refer to an incomplete program written partly in a programming language and partly in English?
Pseudocode

// 13. What is the purpose of each of the three expressions that appear in the control
// line of a for statement?
First initalizes the value of the counter. The second is the test against which the first value is run. The last is the incrementer that changes the first value.

// 14. Whatforloopcontrollinewouldyouuseineachofthefollowingsituations:
// a) Counting from 1 to 100.
// b) Counting by sevens starting at 0 until the number has more than two digits.
// c) Counting backward by twos from 100 to 0.
a) for (let i = 1; i <= 100; i++)
b) for (let i = 0; i < 14 ; i += 7)
c) for (let i = 100; i >= 0; i -= 2)

// 15. What do the terms falsy and truthy signify in JavaScript? What strategy does this book suggest for avoiding the ambiguity associated with these terms?
Truthy and Falsy are used to describe values that when evaluated are grouped with FALSE or TRUE, but they are not strictly equal to those values. To avoid these issues, the book recomends that you avoid ==, and always use strict typing.  
