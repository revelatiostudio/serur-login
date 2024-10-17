import axios from 'axios';

async function loginUsuario({email, senha}) {
    try {
        const response = await axios.post('https://serur-ia-sophia.vercel.app/api/auth/login', { 
            email:email,
            password:senha
        })
        console.log(response)
        return response
        
    } catch (error) {
        return alert(error.response.data.message);        
    }
    
}

export{
    loginUsuario
}