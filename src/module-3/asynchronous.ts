// Mocking

// Json Placeholder

interface ITodo {
    userID: number,
    id: number,
    title: string,
    completed: boolean
}

const getToDo = async(): Promise<ITodo> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    return await response.json()
}

const getTodoData = async(): Promise<void> => {
    const result = await getToDo();
    console.log(result)
}
getTodoData();

const makePromise =():Promise<string> => {
    return new Promise<string>((resolve, reject) =>{
        const data : string = 'Data is fetched';
        if(data){
            resolve(data)
        }
        else{
            reject('Failed to fetch data')
        }
    }) 
}
const makePromise2 =():Promise<boolean> => {
    return new Promise<boolean>((resolve, reject) =>{
        const data : boolean = true;
        if(data){
            resolve(data)
        }
        else{
            reject('Failed to fetch data')
        }
    }) 
}

const getPromiseData = async():Promise<string> => {
    const data = await makePromise();
    return data
}
const getPromiseData2 = async():Promise<boolean> => {
    const data = await makePromise2();
    return data
}

interface DataType{
    name: string,
    age: number
}
const makePromise3 =():Promise<DataType> => {
    return new Promise<DataType>((resolve, reject) =>{
        const data : DataType = {
            name: 'Upoma',
            age: 20
        };
        if(data){
            resolve(data)
        }
        else{
            reject('Failed to fetch data')
        }
    }) 
}
const getPromiseData3 = async():Promise<object> => {
    const data = await makePromise3();
    return data
}



// Promise<string>,  Promise<boolean>,  Promise<object>