import axios from 'axios';

async function esqueciSenha({email}) {
    try {
        const response = await axios.post('http://serur-ia-sophia.vercel.app/api/auth/forgot-password', { 
            email,
        })
        return response
        
    } catch (error) {
        return alert(error.message);
        
    }
    
}

export{
    esqueciSenha,
}