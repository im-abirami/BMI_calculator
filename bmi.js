weight = parseInt(prompt("Input the Weight(lbs)"))
height = parseInt(prompt("Input the Height(in)"))

bmi =(weight/(height*height))*703;
alert("Your BMI is " + bmi)
if(bmi<18.5)
{
    alert("Underweight")
}
else if (bmi>18.5 && bmi<24.9)
{
    alert(" Normal Range ")

}

else if (bmi>25 && bmi<29.9)
{
    alert("Over Weight")
}
else if (bmi > 30.0 && bmi<34.9 )
{
    alert("Obese class-I")
}
else if(bmi >35.0 && bmi<39.9)
{
    alert("Obese class-II")
}
else if(bmi>=40)
{
    alert('Obese class-III')
}
else{
    alert('Check the inputs entered')
}