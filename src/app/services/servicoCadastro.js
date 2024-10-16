import axios from 'axios';

async function mandaDadosCadastro({nome, email, senha, token}) {
    try {
        const response = await axios.post('http://serur-ia-sophia.vercel.app/api/auth/register', { 
            nome,
            email,
            senha,
            token 
        })
        return response
        
    } catch (error) {
        return alert(error.message);
        
    }
}

export{
    mandaDadosCadastro
}