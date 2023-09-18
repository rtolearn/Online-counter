let count = 0;
        let resultElement = document.getElementById("result");
        resultElement.innerText = count;

        let welcome = document.getElementById("greet");

        let name = "Welcome..";
        let greeting = "Hi! ";

        welcome.innerText = greeting + name
        let saveElement = document.getElementById("record");


        function updateResult() {
            
            resultElement.innerText = count;
        }

        function increment() {
            count++;
            updateResult();
        }

        function decrement() {
            count--;
            updateResult();
        }
        function displayCurrent(){
            document.getElementById("save").innerText = "Current count is " + count;
           
        }
        function reset(){
            counter =0;
            saveElement.textContent= "Previous record:";
        }
            
        //Do the recording
        let counter = 0;
        function recording(){
        
            if(counter == 0){
                if(count > 0)
                    saveElement.textContent += ( count );
                else    
                    saveElement.textContent += "(" +  count + ")"
                counter++;
            }
            else{
                if(count > 0)
                    saveElement.textContent += (" , " + count );
                else
                    saveElement.textContent += (" , " + "(" + count + ")")

            }
            count =0;
            resultElement.innerText = count;
        }

