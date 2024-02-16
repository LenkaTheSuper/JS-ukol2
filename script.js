let jmeno = prompt("Zadejte celé své jméno bez diakritiky: ").trim().toLowerCase()
// const spatneZnaky = ["á","é","ě","í","ó","ú","ů","ý","ž","š","č","ř","ď","ť","ň"]
// const spravneZnaky = ["a","e","e","i","o","u","u","y","z","s","c","r","d","t","n"]

let index = jmeno.indexOf(" ")
let prvniCast = jmeno.slice(0, index)
let druhaCast = jmeno.slice(index + 1)

let emailPrvniCast = prvniCast.slice(0,3)
let emailDruhaCast = druhaCast.slice(0,5)

document.body.innerHTML = `
<h3> Váš email je: </h3>
<p>${emailDruhaCast}${emailPrvniCast}@fit.cvut.cz</p>
`