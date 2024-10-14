import axios from 'axios';

async function loginUsuario({email, senha}) {
    try {
        const response = await axios.post('http://serur-ia-sophia.vercel.app/api/auth/login', {
            email,
            senha
        })
        return response
        
    } catch (error) {
        return alert(error.message);
        
    }
    
}

export{
    loginUsuario
}