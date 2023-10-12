function domainName() {
    let pronoun = ['the', 'our'];
    let adj = ['great','big'];
    let nouns = ['jogger', 'racoon'];
    let domain = "";
    let a=0;
    let b=0;
    let c=0;
    
    for (let a=0;a<pronoun.length;a++)
    {
        for (let b=0;b<adj.length;b++)
        {
            for (let c=0;c<nouns.length;c++)
            {
             domain += pronoun[a]+adj[b]+nouns[c]+".com <br>";

     
            }
        }
    }
return domain;
}
document.querySelector("#btn").addEventListener ("click", () => {
    document.querySelector("#name").innerHTML = domainName();




});