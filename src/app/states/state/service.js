import "whatwg-fetch";

export function getStatesList(){
    return fetch("http://localhost:7070/api/states")
    .then( response =>{
        return response.json();
    })
}

export function getStateById(id){
    return fetch("http://localhost:7070/api/states/"+id)
    .then( response =>{
        return response.json();
    })
}

export function saveState(stateView){
    return fetch("http://localhost:7070/api/states/"+stateView.id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify(stateView)
    })
}

export function saveNewState(stateView){
    return fetch("http://localhost:7070/api/states/", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify(stateView)
    })
}

