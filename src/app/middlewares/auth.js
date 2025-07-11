import jwt from 'jsonwebtoken';
import authConfig from '../../config/auth';


function authMiddleware(request, response, next) {
    const authToken = request.headers.authorization;

    if (!authToken) {
        return response.status(401).json({ error: 'Token Inválido' });
    }

    const token = authToken.split(' ').at(1);

    try {
        jwt.verify(token, authConfig.secret, (err, decoded) => {
            if(err) {
                throw new Error();
            }

            request.userId = decoded.id;  
            request.userName = decoded.name;
        })

    } catch {
        return response.status(401).json({ error: 'Token Inválido' })
    }

    return next();

}

export default authMiddleware;