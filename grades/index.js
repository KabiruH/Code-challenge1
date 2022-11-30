
function studentMarks  (marks){
    //to activate the click option on the browser. The output is in the browser console
        
    if (marks > 79 && marks <= 100){
        return ('A')
    }
    if (marks > 60 && marks < 79 ){
        return ('B')
    }
    if (marks >=49 && marks<=59){
        return ('C')
    }
    if (marks >=40 && marks < 49){
        return ('D')
    }
    if (marks < 40){
        return ('E')
    }
   }
   console.log (studentMarks(90))
// each of the if statements represents a range of grades






