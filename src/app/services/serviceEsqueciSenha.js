import axios from 'axios';

async function esqueciSenha({email}) {
    try {
        const response = await axios.post('https://serur-ia-sophia.vercel.app/api/auth/forgot-password', { 
            email,
        })
        return response
        
    } catch (error) {
        return alert(error.response.data.message);
        
    }
    
}

export{
    esqueciSenha,
}