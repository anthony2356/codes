// print messages on console
console.writeline("diamonds!");

// messages with variables
string message_random = "hello"
console.writeline(message_random);

// jumping lines and adding spaces between words
console.writeline("hello\nworld"); // with this you can put the seoond word on the second line.
console.writeline("hello\tworld"); // with this you can add space between the two words.

// string concatenation
string firstname = "John";
string secondname = "Bob";
string message = "Hello ! " + firstname + " my name is " + secondname
console.writeline(message);

// simple interface
console.writeline("generating data.. for the user \"Guest2345\"...\"");
console.writeline("data generated ! : 213437289\t\t");
console.writeline("\ndirectory...\t");
console.writeline(@"c:\data");

// interpolation with c#
string name_of_project = "first name";
console.writeline($@"c:\data\{name_of_project}\data");
string name_of_user = "guest123456";
string msg = "hi";
string final_msg = $"{msg}{name_of_user}";
console.writeline(final_msg);

// challenge 1
console.writeline("view english data:");
console.writeline("c:\\exercise\\coding_test\\coding_test.txt");

// math operations with c#
int first_num = 12;
int second_num = 24;
console.writeline(first_num + second_num);
string name = "Paul";
int items = 90;
console.writeline(name + " sold " + (items * 20) + " items ");
int a = 9 + 90;
int b = 7 - 30;
int c = 20 * 34;
int d = 35 / 7;
console.writeline("result : " + a);
console.writeline("result : " + b);
console.writeline("result : " + c);
console.writeline("result : " + d);
decimal cD = 7.0m / 5;
console.writeline("the coeficient is : " + cD);
int x = 2;
int z = 4;
string e = x / z;
console.writeline("the coeficient is : " + e);
console.writeline("the module of 200 / 5 is : " + (200 % 5));
console.writeline("the module of 7 / 5 is : " + (7 % 5));
int a1 = 3+4*5;
int a2 = (3+4)*5;
console.writeline(a1);
console.writeline(a2);

// increment and decrement with c#
int v1 = +1;
console.writeline("FI = " + v1);
int v2 = ++1;
console.writeline("SI = " + v2);
int v3 = +++1;
console.writeline("TI = " + v3);
int v4 = -1;
console.writeline("FD = " + v4);
int v5 = --1;
console.writeline("SD = " + v4);
int v6 = ---1;
console.writeline("TD = " + v6);

// if statement on c#
random dice = newrandom();
int r1 = dice.next(1,7);
int r2 = dice.next(1,7);
int r3 = dice.next(1,7);
int t = r1 + r2 + r3;
console.writeline($"rolls number : " + {r1}+{r2}+{r3});
if(t>14){
    console.writeline("you won!")
}
if(t<15){
    console.writeline("you loose!")
};

// foreach instruction on c#
string [] name = {"Bob", "John", "Gabriel"};
foreach (string name in names){
    console.writeline("name");
}
int [] values = {200,400,100,500};
int somatory = 0;
foreach (int items in inventory){
    somatory += items;
}
console.writeline($"we have {somatory} items on our inventory.");

// dice game
random dice = newrandom();
int r1 = dice.next(1,7);
int r2 = dice.next(1,7);
int r3 = dice.next(1,7);
int t = r1 + r2 + r3;
console.writeline($"dice rolling... : {r1}+{r2}+{r3} = {t}");
if (r1 == r2) || (r2 == r3) || r1 == r3{
    if(r1 == r2) && (r2 == r3){
        console.writeline("the three dices rolled being same!, +6 points at total");
    }
}
elseif(t >= 16){
    console.writeline("you won and ur prize is an new car !")
}
elseif(t >= 10){
    console.writeline("you won and ur prize is an notebook !")
}
elseif(t == 7){
    console.writeline("you won and ur prize is an travel for las vegas")
}
else{
    console.writeline("you just loose buddy :(")
};