Movie Search Platform - QA Testing Challenge

Issues found: 
  The search endpoint returns 500 error code
	
    Expected Behavior
      - The endpoint should return the desired movie by the title typed on the search box. 
    Observec Behavior
      - The endpoint returns error 500. 
    Evidence: https://prnt.sc/8Blgmdu8vS5Y 

 The remove movie endpoint doesn't work if the movie ID is integer
 
      Expected Behavior
        - The movie should be removed after click Remove button. 
      Observed Behavior
        - The endpoint allow to create movie using int values. But the delete button doesn't remove the movie. 
   
