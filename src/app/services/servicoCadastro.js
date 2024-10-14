import axios from 'axios';

async function mandaDadosCadastro({nome, email, senha, token}) {
    try {
        const response = await axios.post('', {
            nome,
            email,
            senha,
            token 
        })
        return response
        
    } catch (error) {
        console.log('Ocorreu um erro ao cadastras um novo usário:', error);
        
    }
}

export{
    mandaDadosCadastro
}