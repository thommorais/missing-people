const API = 'https://api.lab.dns-cloud.net/users'

export function getPeople(){
 return fetch(API).then(res => res.json())
}
