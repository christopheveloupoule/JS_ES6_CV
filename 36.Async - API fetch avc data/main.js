let url = 'http://adok.org/form/films/films.php';
let fd = new FormData();
fd.append('action', 'lister');
let init = {
	method: 'post',
	body: fd
}
fetch(url, init)
	.then(reponse => {
		return reponse.ok ? reponse.json() : new Promise((resolve, reject) => reject(Error(reponse.statusText)));
	})
	.then(films => {
		for (let film of films) {
			console.log(`"${film.titre}" de ${film.real}`);
		}
	})
	.catch(erreur => console.log(`Erreur: ${erreur.message}`));
