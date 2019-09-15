/*
Question:https://practice.geeksforgeeks.org/problems/left-out-candies/0#_=_
//Kinda easy question ,wont take long:P

*/

#include <iostream>
using namespace std;
int main()
{
    int testcase;
    scanf("%d", &testcase);

    while (testcase--)
    {
        int studentCount, choclateCount;
        scanf("%d %d", &studentCount, &choclateCount);

        bool found = false;
        int index = 1;
        /*
        basic idea is to run a infinite loop that run from 1st person to last person and will substract chocolates
        from them
        */
        while (1)
        {
            //if current choclates count is greater than equal to person in queue
            if (choclateCount >= index)
            {
                choclateCount -= index;
                found = true;
            }
            else
            {//if we have exhausted all the chocolates
                if (choclateCount == 0)
                {
                    found = true;
                    break;
                }
                else
                {//in this case we cant provide needed chocolates to person,ie we have reach dead end
                    found = false;
                    break;
                }
            }

            index++;//if we reached to last person in queue,go back to 1st person
            if (index > studentCount)
                index = 1;
        }

        printf("%d\n", found ? 0 : choclateCount);
    }
    //code
    return 0;
}