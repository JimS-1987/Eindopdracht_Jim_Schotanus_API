const API_URL = 'http://localhost:3000/'

const getTodos = async () => {
    try {
        const response = await fetch(API_URL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
       console.log(data);
        return data;
    } catch (error) {
        console.log('Error: ', error);
    }
}
//getTodos();

const postTodo = async (todo) => {
    try {
        const response = await fetch(API_URL,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(todo),
        })
        const data = await response.json();
      //  console.log(data);
        return data;
    } catch (error) {
        console.log('Error: ', error);
    }
}

 //postTodo();

const deleteTodo = async ( id) => {
    try {
        const response = await fetch(API_URL + id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
         //body: JSON.stringify(id),
        })
        const data = await response.json();
         
        
        //console.log(data);
        return data;
    } catch (error) {
        console.log('Error: ', error);
    }
}

//deleteTodo("bf8d9d39-60fd-48d4-aae5-8a09e131095b");
//deleteTodo("55dbe53a-775e-4e8a-ab04-2a9f59c03d13");