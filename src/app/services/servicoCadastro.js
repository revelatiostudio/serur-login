import axios from 'axios';

async function mandaDadosCadastro({nome, email, senha, userToken}) {
    try {
        console.log(nome,email,senha,userToken)
        const response = await axios.post('https://serur-ia-sophia.vercel.app/api/auth/register', { 
            name:nome,
            email:email,
            password:senha,
            userToken: userToken
        })
        return response
        
    } catch (error) {
        return alert(error.response.data.message);
        
    }
}

export{
    mandaDadosCadastro
}