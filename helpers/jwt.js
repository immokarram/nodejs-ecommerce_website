const jwt  = require('express-jwt');
const jwt1 = require('jsonwebtoken');

const secretKey = 'mysecretkey'; // Replace with your secret key

function authJwt() {
    const secret = secretKey;

    const api = process.env.API_URL;
    return jwt({
        secret,
        algorithms: ['HS256'],
        isRevoked : isRevoked
    }).unless({
        path: [
            {url: /\/public\/uploads(.*)/, methods: ['GET', 'OPTIONS'] },
            {url: /\/api\/v1\/products(.*)/, methods: ['GET', 'OPTIONS']},
            {url: /\/api\/v1\/categories(.*)/, methods: ['GET', 'OPTIONS']},
            `${api}/users/login`,
            `${api}/users/register`
        ]
    })
}

async function isRevoked (req, payload, done){
    if(!payload.isAdmin){
        done(null, true)
    } 

    done();
}


// Define the payload of the JWT token
const payload = {
    user: 'john.doe',
    role: 'admin'
  };
  
  // Generate the JWT token with appropriate permissions
  const token = jwt1.sign(payload, 'mysecretkey', { expiresIn: '1h' });
  
  

module.exports = authJwt;