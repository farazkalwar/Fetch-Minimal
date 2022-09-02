let div = document.querySelector('#data-div')

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => {
        let table = ``
        data.forEach(post => {
            table += `
            <ul>
                <li>User Id: ${post.userId}</li>
                <li>Post Id: ${post.id}</li>
                <li>Title: ${post.title}</li>
                <li>Body: ${post.body}</li>
            </ul>
            `
        });
        div.innerHTML = table
    })