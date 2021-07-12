const API_URL = 'http://localhost:3000/'

const getTodos = async (id) => {
    try {
        const response = await fetch(API_URL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
    
        return data;
    } catch (error) {
        console.log('Error: ', error);
    }
}


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
     
        return data;
    } catch (error) {
        console.log('Error: ', error);
    }
}



const deleteTodo = async (id) => {
    try {
        return await fetch(API_URL + id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
         
        })
    
    } catch (error) {
        console.log('Error: ', error);
    }
}
