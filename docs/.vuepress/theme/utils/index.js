export async function fetchGithubUserInfo(username) {
  const response = await fetch(`https://api.github.com/users/${username}`)
  console.log(response)
  return response.json()
}
