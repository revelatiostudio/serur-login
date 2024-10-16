import axios from 'axios';

async function loginUsuario({email, senha}) {
    try {
        const response = await axios.post('http://serur-ia-sophia.vercel.app/api/auth/login', { 
            email,
            senha
        })
        return response
        
    } catch (error) {
        console.error("Erro ao tentar fazer login:", error.message);
        return alert("Erro ao tentar fazer login!");
        
    }
    
}

export{
    loginUsuario
}