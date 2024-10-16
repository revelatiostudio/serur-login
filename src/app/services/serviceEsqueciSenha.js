import axios from 'axios';

async function esqueciSenha({email}) {
    try {
        const response = await axios.post('https://serur-ia-sophia.vercel.app/api/auth/forgot-password', { 
            email,
        })
        return response
        
    } catch (error) {
        console.error(error.message);
        return alert("Erro ao mudar de senha!");
        
    }
    
}

export{
    esqueciSenha,
}