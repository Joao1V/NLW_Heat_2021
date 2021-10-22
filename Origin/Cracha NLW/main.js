const LinksSocialMedia = {
  github: 'Joao1V',
  youtube: 'codigofontetv',
  facebook: 'joaovictor.predrohenrique',
  instagram: 'ja1_v',
  twitter: 'jaum1_v'
}

function changeSocialMediaLinks() {
 for (let li of socialLinks.children) {
  const  social = li.getAttribute('class')
  li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}` 
  
  //vai dentro da li, pega a posição 0 e da um alert 
 }
}
changeSocialMediaLinks()

function getGitHubProfileInfos() {
const url = `https://api.github.com/users/${LinksSocialMedia.github}`

fetch(url)
.then(response => response.json())
.then (data => {
  userName.innerHTML = data.name
  userBio.innerHTML = data.bio
  userGit.href = data.html_url
  userPhoto.src = data.avatar_url
  userLink.textContent = data.login
})

}

getGitHubProfileInfos()  