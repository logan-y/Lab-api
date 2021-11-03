


let resBtn = document.querySelector("#resBtn")
let clickBtn = (event) => {
    event.preventDefault();
    console.log("button clicked")
    axios.get('https://swapi.dev/api/planets/?=alderaan').then((res) => {
        for (let i = 0; i< res.data.results[1].residents.length; i++){
            resident = res.data.results[1].residents[i]
            axios.get(resident).then((res) => {
            let addRes = document.createElement("h2");
            addRes.textContent = res.data.name;
            document.body.appendChild(addRes);
            })
        }
    })
    .catch(error => {
        console.log('error', error)
    })
}
resBtn.addEventListener('click', clickBtn)

 // As you complete this section, be sure to test along the way using Postman and console.log`s 
// 3. Inside the callback passed to the .then, loop over the residents array returned on the results. It’s full of URLs. 
// 4. In the loop, make another get request for each URL in the array. 
// 5. You’ll have another .then that has its own callback, inside which you should create an h2 element whose content is the name of the resident that you just requested. Append the h2 to your HTML document.