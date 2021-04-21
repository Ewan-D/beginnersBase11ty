
    let input = document.getElementById('todoItem');
 	let listCount = 0;

	const todoList = [];
    const toggleFx = document.getElementById('toggleFx');
    const clearList = document.getElementById('clearList');
    const itemMaker = document.getElementById('itemMaker');
    const makeTodoList = document.getElementById('makeTodoList');

    // use enter key instead of submit...
    let startItemMaker = () => {
        itemMaker.style.display= "inline";
        makeTodoList.style.display= "none";
    };

    input.addEventListener("keyup", event => {
        if(event.keyCode == 13){
            addToList();
        }
    });

 	let allDone = () => {
		document.body.style.background= 'linear-gradient(to top, #003366 4%, #ff5050 5% , #ff99cc 6%, #000066 25%, #000 55%)';
        document.body.style.height = '100vh';
		document.body.style.color= 'white';
        toggleFx.style.display= 'inline';
        clearList.style.display= 'none';
        itemMaker.style.display= 'none';
	};

 	let checkList = () => {

    let done = 0;
	 for(let i=0; i < todoList.length ; i++){
		 if(todoList[i].firstChild.checked){
			 done++
		     }
	        }
		if(done == todoList.length){
			allDone();
            startFw();
		}
      };

	let addToList = () => {
		listCount++;
        // check this...

            clearList.style.display= 'inline';


		let newEl = document.createElement('li');
        newEl.classList.add('flex', 'justify-start', 'p-1')
		let newTodo = document.createTextNode(document.getElementById("todoItem").value);
			newEl.appendChild(newTodo);
		let position = document.getElementById('todoList');
			position.appendChild(newEl).insertAdjacentHTML('afterbegin', `<input id="tickBox${listCount}" class="mr-2" type="checkbox" />`);
			todoList.push(newEl);

        watch();
			};

    let watch = () => {

        if(listCount > 0){
	        let ticked = document.getElementById(`tickBox${listCount}`);
            ticked.addEventListener('change', checkList);
            };
        }

    let finished = () =>{
        listCount = 0;
        let clearList = document.getElementById("todoList");
        while(clearList.firstChild){
            clearList.removeChild(clearList.lastChild);
            }
        document.body.style.background= 'white';
        document.body.style.color= 'black';
        itemMaker.style.display= 'inline';
        toggleFx.style.display= 'none';
        }
