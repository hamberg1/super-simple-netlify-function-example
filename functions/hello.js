exports.handler = async event => {
  const subject = event.queryStringParameters.name || 'World'
  //const url = "https://api.github.com/repos/hamberg1/md_blog/contents/contents";
  return {
    statusCode: 200,
    body: `<h1> ${subject}</h1>`
  }
}
