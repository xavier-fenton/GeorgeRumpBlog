import request from 'superagent'

const rootUrl = '/api/v1'

export function getPosts() {
  return request.get(rootUrl + '/posts').then((res) => {
    return res.body
  })
}

export function sendPost(data) {
  return request
    .post(rootUrl + '/posts')
    .send(data)
    .then((req) => {
      return req.body.post
    })
}
