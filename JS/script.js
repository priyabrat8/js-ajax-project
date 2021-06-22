const container = document.querySelector("#container");
const request = new XMLHttpRequest();
request.open('GET',"https://restcountries.eu/rest/v2/name/india");
request.send();

request.addEventListener('load',function(){
    const data = JSON.parse(this.responseText)
    const htmlData = `
    <div id="card">
    <article class="card">
        <div class="card-body">
            <img src="${data[1].flag}" alt="flag" srcset="" class="card-body-img">
            <h1 class="card-body-title">
                ${data[1].name}<span></span>
            </h1>
            <p class="card-body-text"> Capital  :  ${data[1].capital}</p>
            <hr id="card-body-line">
        </div>
        <div class="card-footer">
        <table>
        <tr>
            <th><h3 id="h1" >${data[1].languages[0].nativeName}</h3></th>
            <th><h3 id="h2" >${data[1].population}</h3></th>
            <th><h3 id="h3" >${data[1].demonym}</h3></th>
        </tr>
        <tr>
            <td><p id="p1" >Native Language</p></td>
            <td><p id="p2" >Population</p></td>
            <td><p id="p3" >Demonym</p></td>
        </tr>
    </table>
        </div>
    </article>
</div>
    `;

    // container.insertAdjacentHTML("afterbegin",htmlData);
    container.innerHTML = htmlData;
});