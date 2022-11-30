

    function speedTest (speed){

     const points = (speed - 70)/5
  // we define points with the formula above
      if (speed <= 70){
         return ('ok')
      }
  // less than 70 should print ok
      
      else if (points < 12){
          return ('points:', points)
      }
  // since we defined points earlier, if the points are lower than 12, it should print the number of points 
      else if (points > 12){
          return ('License suspended')
      }
  // above 12 should show the license is suspended
    }
    console.log (speedTest(100))